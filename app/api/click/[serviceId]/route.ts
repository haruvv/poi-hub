import { NextRequest, NextResponse } from "next/server";
import { getServiceById } from "@/data/services";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ serviceId: string }> }
) {
  const { serviceId } = await params;
  
  // サービス情報を取得
  const service = getServiceById(serviceId);

  if (!service) {
    console.error(`[Click Tracking] Service not found: ${serviceId}`);
    return NextResponse.json(
      { error: "Service not found" },
      { status: 404 }
    );
  }

  // アフィリエイトリンクを取得
  const affiliateLinks = service.affiliateLinks || [];
  const primaryLink = affiliateLinks[0];

  if (!primaryLink) {
    console.error(`[Click Tracking] No affiliate link for service: ${serviceId}`);
    return NextResponse.json(
      { error: "No affiliate link available" },
      { status: 404 }
    );
  }

  // クリック情報をログに記録（Vercelのログに残る）
  const clickInfo = {
    timestamp: new Date().toISOString(),
    serviceId: service.id,
    serviceName: service.name,
    category: service.category,
    affiliateUrl: primaryLink.url,
    userAgent: request.headers.get("user-agent") || "unknown",
    referer: request.headers.get("referer") || "direct",
    ip: request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "unknown",
  };

  console.log("[Click Tracking]", JSON.stringify(clickInfo));

  // 外部サイトにリダイレクト
  return NextResponse.redirect(primaryLink.url, 302);
}

