import type { Metadata } from "next";
import { HeaderBar } from "@/components/layout/HeaderBar";
import Link from "next/link";
import {
  getDiagnosisTypeId,
  diagnosisTypes,
  type DiagnosisType,
} from "@/types/diagnosis";
import { getServicesByCategory } from "@/data/services";
import { ResultHero } from "@/components/diagnosis/results/ResultHero";
import { TypeExplanation } from "@/components/diagnosis/results/TypeExplanation";
import { RecommendedServices } from "@/components/diagnosis/results/RecommendedServices";
import { DiagnosisLogic } from "@/components/diagnosis/results/DiagnosisLogic";
import { ComparisonTable } from "@/components/diagnosis/results/ComparisonTable";
import { TrustZone } from "@/components/diagnosis/results/TrustZone";

export const metadata: Metadata = {
  title: "ポイ活なび｜診断結果",
  description: "あなたの診断結果をご確認ください",
};

interface PageProps {
  searchParams: Promise<{
    cardUse?: string;
    spareTime?: string;
    tolerance?: string;
    cashlessAmount?: string;
    fixedCostAwareness?: string;
  }>;
}

interface DetailedResult {
  label: string;
  subCopy: string;
  features: string[];
  summary: string;
  strategyTitle: string;
  strategyDescription: string;
  category: "poi-katsu" | "credit-card" | "investment";
  ctaText: string;
  riskLevel: number;
  typeColor: "blue" | "orange" | "green" | "teal";
  answers: {
    question: string;
    answer: string;
    insight: string;
  }[];
}

function buildDetailedResult({
  cardUse,
  spareTime,
  tolerance,
  fixedCostAwareness = "",
}: {
  cardUse: string;
  spareTime: string;
  tolerance: string;
  fixedCostAwareness?: string;
}): DetailedResult {
  // 固定費への意識に基づいて回答を生成するヘルパー関数
  const getFixedCostAnswer = () => {
    if (fixedCostAwareness === "high") return "できるだけ下げたい";
    if (fixedCostAwareness === "mid") return "たまにチェックする程度";
    return "特に気にしていない";
  };

  const getFixedCostInsight = () => {
    if (fixedCostAwareness === "high") return "固定費削減重視";
    if (fixedCostAwareness === "mid") return "固定費への意識あり";
    return "固定費への意識低め";
  };

  // めんどくさがり現実派
  if (cardUse === "mid" && spareTime === "none" && tolerance === "low") {
    return {
      label: "めんどくさがり現実派",
      subCopy:
        "少額から安全に始めたいあなたには “ポイ活メイン＋おまけ投資” が相性◎",
      features: [
        "固定費はできるだけ下げたい",
        "難しい投資用語はまだしんどい",
        "スマホで完結したい",
        "自動で貯まる仕組みが理想",
      ],
      summary:
        "そんなあなたには、リスク少なめで確実に得する“ポイ活＋高還元1枚持ち”戦略が最適です",
      strategyTitle: "あなたへのおすすめ戦略",
      strategyDescription:
        "ポイ活を軸に、“確実にもらえる” お得からスタートしましょう",
      category: "credit-card",
      ctaText: "あなたに合うクレジットカード候補を見る",
      riskLevel: 20,
      typeColor: "blue",
      answers: [
        {
          question: "今の「お金との付き合い方」はどれが近い？",
          answer: "ネットショッピングが多い",
          insight: "リスク低め志向",
        },
        {
          question: "毎月のキャッシュレス利用はどれくらい？",
          answer: "1〜10万円くらい",
          insight: "中程度の利用",
        },
        {
          question: "毎月「これくらいなら使えるかな」というスキマ時間は？",
          answer: "ほぼない（できれば何もしたくない）",
          insight: "シンプル重視",
        },
        {
          question: "固定費（光熱費、通信費、サブスクなど）への意識は？",
          answer: getFixedCostAnswer(),
          insight: getFixedCostInsight(),
        },
        {
          question: "手間やリスク許容度はどのくらい？",
          answer: "できるだけシンプル・年会費無料がいい",
          insight: "コツコツ型・継続得意",
        },
      ],
    };
  }

  // コスパ重視で少し動ける
  if (spareTime === "short" && tolerance !== "low") {
    return {
      label: "コスパ重視で少し動ける",
      subCopy:
        "固定費と決済の最適化に加えて、単発案件を月数件こなすだけで＋αを狙えます",
      features: [
        "固定費はできるだけ下げたい",
        "週に30分〜1時間くらいなら使える",
        "ちょっと複雑でも、ちゃんと得するならアリ",
        "コツコツ続けられる",
      ],
      summary:
        "そんなあなたには、ポイ活をメインに“確実にもらえる”お得からスタートし、余裕があれば単発案件も試す戦略が最適です",
      strategyTitle: "あなたへのおすすめ戦略",
      strategyDescription:
        "ポイ活を軸に、“確実にもらえる” お得からスタートしましょう",
      category: "poi-katsu",
      ctaText: "おすすめのポイ活サービスを見る",
      riskLevel: 40,
      typeColor: "green",
      answers: [
        {
          question: "今の「お金との付き合い方」はどれが近い？",
          answer: "普段からキャッシュレス多め または ネットショッピングが多い",
          insight: "キャッシュレス利用あり",
        },
        {
          question: "毎月のキャッシュレス利用はどれくらい？",
          answer: "1〜10万円くらい または 10万円以上",
          insight: "中〜高額利用",
        },
        {
          question: "毎月「これくらいなら使えるかな」というスキマ時間は？",
          answer: "週に30分〜1時間くらい",
          insight: "少し動ける",
        },
        {
          question: "固定費（光熱費、通信費、サブスクなど）への意識は？",
          answer: getFixedCostAnswer(),
          insight: getFixedCostInsight(),
        },
        {
          question: "手間やリスク許容度はどのくらい？",
          answer: "ちょっと複雑でも、ちゃんと得するならアリ",
          insight: "コスパ重視",
        },
      ],
    };
  }

  // 支出インパクト大きめ
  if (cardUse === "high") {
    return {
      label: "支出インパクト大きめ",
      subCopy: "出費は多いけど管理は苦手 → 高還元クレカ1枚に集中するのがベスト",
      features: [
        "毎月の決済額が大きい",
        "カード選びとポイント設計で差が出る",
        "複雑な管理は避けたい",
        "確実に還元を受けたい",
      ],
      summary:
        "そんなあなたには、利用ジャンルに合う高還元カードを2枚までに絞り、公共料金・サブスク・通販決済をそのカードに集約する戦略が最適です",
      strategyTitle: "あなたへのおすすめ戦略",
      strategyDescription:
        "クレジットカードを軸に、確実に還元を受けられる設計をしましょう",
      category: "credit-card",
      ctaText: "あなたに合うクレジットカード候補を見る",
      riskLevel: 30,
      typeColor: "teal",
      answers: [
        {
          question: "今の「お金との付き合い方」はどれが近い？",
          answer: "普段からキャッシュレス多め",
          insight: "キャッシュレス重視",
        },
        {
          question: "毎月のキャッシュレス利用はどれくらい？",
          answer: "10万円以上使うことが多い",
          insight: "支出インパクト大",
        },
        {
          question: "毎月「これくらいなら使えるかな」というスキマ時間は？",
          answer: "ほぼない または 週に30分〜1時間くらい",
          insight: "シンプル重視",
        },
        {
          question: "固定費（光熱費、通信費、サブスクなど）への意識は？",
          answer: getFixedCostAnswer(),
          insight: getFixedCostInsight(),
        },
        {
          question: "手間やリスク許容度はどのくらい？",
          answer: "できるだけシンプル または ちょっと複雑でも得するならアリ",
          insight: "確実性重視",
        },
      ],
    };
  }

  // ライトに始める
  return {
    label: "ライトに始める",
    subCopy:
      "難しいことは避けつつ、「損だけはしたくない」人向け最低限の「やっとくと得」だけ押さえればOKです",
    features: [
      "難しいことは避けたい",
      "最低限の「やっとくと得」だけ押さえたい",
      "スマホで完結したい",
      "コツコツ続けられる",
    ],
    summary:
      "そんなあなたには、年会費無料で評判の良い決済手段を1つ決め、よく使うサービスの公式アプリだけ入れておく戦略が最適です",
    strategyTitle: "あなたへのおすすめ戦略",
    strategyDescription:
      "ポイ活を軸に、“確実にもらえる” お得からスタートしましょう",
    category: "poi-katsu",
    ctaText: "おすすめのポイ活サービスを見る",
    riskLevel: 15,
    typeColor: "blue",
    answers: [
      {
        question: "今の「お金との付き合い方」はどれが近い？",
        answer: "コツコツ貯金は好き",
        insight: "貯蓄重視",
      },
      {
        question: "毎月のキャッシュレス利用はどれくらい？",
        answer: "1万円未満（ほとんど使わない）",
        insight: "ライト利用",
      },
      {
        question: "毎月「これくらいなら使えるかな」というスキマ時間は？",
        answer: "ほぼない または 週に30分〜1時間くらい",
        insight: "シンプル重視",
      },
      {
        question: "固定費（光熱費、通信費、サブスクなど）への意識は？",
        answer: getFixedCostAnswer(),
        insight: getFixedCostInsight(),
      },
      {
        question: "手間やリスク許容度はどのくらい？",
        answer: "できるだけシンプル・年会費無料がいい",
        insight: "ライトスタート",
      },
    ],
  };
}

export default async function DiagnosisResultsPage({
  searchParams,
}: PageProps) {
  const params = await searchParams;
  const {
    cardUse = "",
    spareTime = "",
    tolerance = "",
    cashlessAmount = "",
    fixedCostAwareness = "",
  } = params;

  // 新しい質問パラメータを既存のパラメータにマッピング（互換性のため）
  const mappedCardUse = cashlessAmount || cardUse || "low";

  // パラメータが不足している場合は診断ページにリダイレクト
  if (!mappedCardUse || !spareTime || !tolerance) {
    return (
      <main className="min-h-screen bg-slate-50">
        <HeaderBar />
        <div className="mx-auto max-w-md px-4 pt-8 pb-16">
          <div className="rounded-2xl bg-white border border-slate-200 p-6 text-center">
            <p className="text-slate-700 mb-4">
              診断結果を取得できませんでした
            </p>
            <Link
              href="/diagnosis"
              className="inline-block rounded-2xl bg-slate-700 text-white px-6 py-3 font-bold hover:bg-slate-600 transition"
            >
              診断をやり直す
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const result = buildDetailedResult({
    cardUse: mappedCardUse,
    spareTime,
    tolerance,
    fixedCostAwareness,
  });
  const services = getServicesByCategory(result.category);
  const diagnosisType = result.label as DiagnosisType;
  const typeId = getDiagnosisTypeId(diagnosisType);
  const typeInfo = diagnosisTypes[diagnosisType];
  const categoryUrl = `/diagnosis/${typeInfo.page}?type=${typeId}`;

  // 診断結果ページのパラメータをURLクエリ文字列として保持
  const resultsParams = new URLSearchParams({
    cardUse: mappedCardUse,
    spareTime,
    tolerance,
    cashlessAmount: cashlessAmount || "",
    fixedCostAwareness: fixedCostAwareness || "",
  }).toString();

  // セカンドチョイスの準備
  const otherCategories = ["poi-katsu", "credit-card", "investment"].filter(
    (cat) => cat !== result.category
  ) as Array<"poi-katsu" | "credit-card" | "investment">;

  const secondChoices = otherCategories.map((cat) => {
    const catServices = getServicesByCategory(cat);
    const catLabel =
      cat === "poi-katsu"
        ? "ポイ活サイト"
        : cat === "credit-card"
          ? "クレジットカード"
          : "投資・資産づくり";
    return {
      title: `もう少し攻めてみたい人へ：${catLabel}`,
      description:
        cat === "investment"
          ? "カジュアルに投資を始めるならこの2つ"
          : cat === "credit-card"
            ? "出張・旅行が多い人ならこのクレカもアリ"
            : "ポイ活をメインにしたい人へ",
      services: catServices.slice(0, 2).map((s) => ({
        name: s.name,
        href: `/diagnosis/services/${s.id}?from=results&${resultsParams}`,
      })),
    };
  });

  // 比較テーブルのデータ
  const comparisonRows = [
    {
      category: "ポイ活",
      difficulty: "低",
      risk: "ほぼ0",
      returnImage: "数百〜数千円/月",
      suitableFor: "初心者",
      href: "/diagnosis/poi-katsu",
    },
    {
      category: "クレカ",
      difficulty: "中",
      risk: "管理次第",
      returnImage: "数千円〜",
      suitableFor: "キャッシュレス派",
      href: "/diagnosis/credit-card",
    },
    {
      category: "証券",
      difficulty: "中〜高",
      risk: "元本変動",
      returnImage: "長期で◯",
      suitableFor: "資産形成したい人",
      href: "/diagnosis/investment",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <HeaderBar />
      <div className="mx-auto max-w-3xl px-4 pt-8 pb-20 space-y-8">
        {/* ① ヒーロー */}
        <ResultHero
          typeLabel={result.label}
          subCopy={result.subCopy}
          ctaText={result.ctaText}
          ctaHref={categoryUrl}
          riskLevel={result.riskLevel}
          typeColor={result.typeColor}
        />

        {/* ② タイプ解説ブロック */}
        <TypeExplanation features={result.features} summary={result.summary} />

        {/* ③ メイン推薦カテゴリ＋サービスカード */}
        <RecommendedServices
          strategyTitle={result.strategyTitle}
          strategyDescription={result.strategyDescription}
          services={services.slice(0, 3)}
          categoryLabel={
            result.category === "poi-katsu"
              ? "ポイ活サービス"
              : result.category === "credit-card"
                ? "クレジットカード"
                : "投資サービス"
          }
          resultsParams={resultsParams}
        />

        {/* ④ ロジック可視化 */}
        <DiagnosisLogic answers={result.answers} />

        {/* ⑤ セカンドチョイス＆比較テーブル */}
        <ComparisonTable rows={comparisonRows} secondChoices={secondChoices} />

        {/* ⑥ 注意書き・信頼ゾーン */}
        <TrustZone />
      </div>
    </main>
  );
}
