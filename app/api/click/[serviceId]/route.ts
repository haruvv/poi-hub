import { NextRequest, NextResponse } from "next/server";
import { getServiceById } from "@/data/services";
import { UAParser } from "ua-parser-js";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ serviceId: string }> }
) {
  const { serviceId } = await params;

  // サービス情報を取得
  const service = getServiceById(serviceId);

  if (!service) {
    console.error(`[Click Tracking] Service not found: ${serviceId}`);
    return NextResponse.json({ error: "Service not found" }, { status: 404 });
  }

  // アフィリエイトリンクを取得
  const affiliateLinks = service.affiliateLinks || [];
  const primaryLink = affiliateLinks[0];

  if (!primaryLink) {
    console.error(
      `[Click Tracking] No affiliate link for service: ${serviceId}`
    );
    return NextResponse.json(
      { error: "No affiliate link available" },
      { status: 404 }
    );
  }

  // ユーザーエージェントを解析
  const userAgent = request.headers.get("user-agent") || "unknown";
  const parser = new UAParser(userAgent);
  const result = parser.getResult();

  // デバイスタイプを判定
  let deviceType = "Desktop";
  if (result.device.type === "mobile") {
    deviceType = "Mobile";
  } else if (result.device.type === "tablet") {
    deviceType = "Tablet";
  }

  // わかりやすいデバイス情報を作成
  const deviceInfo =
    `${deviceType} / ${result.os.name || "Unknown"} ${result.os.version || ""} / ${result.browser.name || "Unknown"}`.trim();

  // Vercelから位置情報を取得
  const country = request.headers.get("x-vercel-ip-country") || "Unknown";
  const city = request.headers.get("x-vercel-ip-city") || "Unknown";
  const region = request.headers.get("x-vercel-ip-country-region") || "";

  // 位置情報を結合（例: "JP / Tokyo / 13"）
  const location = region
    ? `${country} / ${city} / ${region}`
    : `${country} / ${city}`;

  // クリック情報をログに記録（Vercelのログに残る）
  const clickInfo = {
    timestamp: new Date().toISOString(),
    serviceId: service.id,
    serviceName: service.name,
    category: service.category,
    affiliateUrl: primaryLink.url,
    deviceInfo: deviceInfo,
    location: location,
    userAgent: userAgent,
    referer: request.headers.get("referer") || "direct",
    ip:
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown",
  };

  console.log("[Click Tracking]", JSON.stringify(clickInfo));

  // Google Sheetsに記録（非同期・エラーでもリダイレクトは継続）
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(clickInfo),
      });
      console.log("[Click Tracking] Successfully sent to Google Sheets");
    } catch (error) {
      console.error("[Click Tracking] Failed to send to Google Sheets:", error);
      // エラーでもリダイレクトは継続
    }
  } else {
    console.warn("[Click Tracking] GOOGLE_SHEETS_WEBHOOK_URL not configured");
  }

  // 外部サイトにリダイレクト
  return NextResponse.redirect(primaryLink.url, 302);
}
