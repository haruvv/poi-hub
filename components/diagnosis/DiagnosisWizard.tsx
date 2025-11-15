"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3 | 4 | 5;

interface DiagnosisWizardProps {
  onBack?: () => void;
  onStepChange?: (step: number) => void;
}

export const DiagnosisWizard = ({
  onBack,
  onStepChange,
}: DiagnosisWizardProps) => {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [cardUse, setCardUse] = useState<"low" | "mid" | "high" | "">("");
  const [cashlessAmount, setCashlessAmount] = useState<
    "low" | "mid" | "high" | ""
  >("");
  const [spareTime, setSpareTime] = useState<"none" | "short" | "long" | "">(
    ""
  );
  const [fixedCostAwareness, setFixedCostAwareness] = useState<
    "low" | "mid" | "high" | ""
  >("");
  const [tolerance, setTolerance] = useState<"low" | "mid" | "high" | "">("");
  const [isCalculating, setIsCalculating] = useState(false);

  const canNext1 = cardUse !== "";
  const canNext2 = cashlessAmount !== "";
  const canNext3 = spareTime !== "";
  const canNext4 = fixedCostAwareness !== "";
  const canNext5 = tolerance !== "";

  const handlePrevStep = () => {
    if (isTransitioning) return;
    if (step === 1 && onBack) {
      onBack();
      return;
    }
    const prevStepNum = (step - 1) as Step;
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(prevStepNum);
      onStepChange?.(prevStepNum);
    setIsTransitioning(false);
    }, 200);
  };

  const handleNextStep = (nextStep: Step) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      onStepChange?.(nextStep);
        setIsTransitioning(false);
    }, 200);
  };

  const handleShowDiagnosisResult = () => {
    if (!canNext5 || isCalculating) return;
    setIsCalculating(true);
    setTimeout(() => {
      const mappedCardUse =
        cashlessAmount !== "" ? cashlessAmount : cardUse || "low";
      const params = new URLSearchParams({
        cardUse: mappedCardUse,
        spareTime,
        tolerance,
        cashlessAmount: cashlessAmount || "",
        fixedCostAwareness: fixedCostAwareness || "",
      });
      router.push(`/diagnosis/results?${params.toString()}`);
    }, 800);
  };

  const totalSteps = 5;
  // 1問目は0%、2問目以降は (step-1) / totalSteps * 100
  const progressPercentage = step === 1 ? 0 : ((step - 1) / totalSteps) * 100;

  return (
    <>
      {/* ローディングオーバーレイ */}
      {isCalculating && (
        <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-8 shadow-xl max-w-sm mx-4 text-center space-y-4 border border-slate-200">
            <div className="inline-block h-12 w-12 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
            <div className="space-y-2">
              <p className="text-base font-bold text-slate-900">
                診断結果を集計しています
              </p>
              <p className="text-sm text-slate-600">
                もうすぐ結果が表示されます
              </p>
            </div>
          </div>
        </div>
      )}

      <section className="relative">
        {/* 上部ヘッダー / ステップ情報 */}
        <div className="sticky top-16 z-20 bg-white/95 backdrop-blur-sm border-b border-slate-200 -mx-4 px-4 py-3 mb-6">
          <div className="max-w-2xl mx-auto space-y-2">
            {/* タイトルとステップ番号 */}
            <div className="flex items-center justify-between">
              <h1 className="text-sm font-bold text-slate-900">
                お得な始め方診断
              </h1>
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                質問 {step} / {totalSteps}
              </span>
            </div>

            {/* 進捗バー */}
            <div className="space-y-1.5">
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-medium text-slate-500">
                <span>開始</span>
                <span>完了まで残り {totalSteps - step} 問</span>
              </div>
            </div>
          </div>
        </div>

        {/* 質問カード */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 shadow-md min-h-[500px] flex flex-col">

          <div className="relative z-10 flex-1 flex flex-col">
        {/* Q1 */}
        {step === 1 && (
              <QuestionContent
                question="今の「お金との付き合い方」はどれが近いですか？"
                description="普段のお金の使い方や考え方について教えてください"
              >
                <OptionCard
                  label="普段からキャッシュレス多め"
                  selected={cardUse === "high"}
                  onClick={() => setCardUse("high")}
            />
                <OptionCard
                  label="ネットショッピングが多い"
              selected={cardUse === "mid"}
              onClick={() => setCardUse("mid")}
            />
                <OptionCard
                  label="コツコツ貯金は好き"
                  selected={cardUse === "low"}
                  onClick={() => setCardUse("low")}
            />
              </QuestionContent>
        )}

        {/* Q2 */}
        {step === 2 && (
              <QuestionContent
                question="毎月のキャッシュレス利用はどれくらいですか？"
                description="クレジットカードや電子マネーでの支払い金額の目安"
              >
                <OptionCard
                  label="1万円未満（ほとんど使わない）"
                  selected={cashlessAmount === "low"}
                  onClick={() => setCashlessAmount("low")}
                />
                <OptionCard
                  label="1〜10万円くらい"
                  selected={cashlessAmount === "mid"}
                  onClick={() => setCashlessAmount("mid")}
                />
                <OptionCard
                  label="10万円以上使うことが多い"
                  selected={cashlessAmount === "high"}
                  onClick={() => setCashlessAmount("high")}
                />
              </QuestionContent>
            )}

            {/* Q3 */}
            {step === 3 && (
              <QuestionContent
                question="毎月「これくらいなら使えるかな」というスキマ時間は？"
                description="ポイント管理やサービス利用に使える時間の目安"
              >
                <OptionCard
              label="ほぼない（できれば何もしたくない）"
              selected={spareTime === "none"}
              onClick={() => setSpareTime("none")}
            />
                <OptionCard
              label="週に30分〜1時間くらい"
              selected={spareTime === "short"}
              onClick={() => setSpareTime("short")}
            />
                <OptionCard
              label="毎週そこそこ時間取れる"
              selected={spareTime === "long"}
              onClick={() => setSpareTime("long")}
            />
              </QuestionContent>
            )}

            {/* Q4 */}
            {step === 4 && (
              <QuestionContent
                question="固定費への意識はどの程度ですか？"
                description="光熱費、通信費、サブスクなどの見直し意識"
              >
                <OptionCard
                  label="できるだけ下げたい"
                  selected={fixedCostAwareness === "high"}
                  onClick={() => setFixedCostAwareness("high")}
            />
                <OptionCard
                  label="たまにチェックする程度"
                  selected={fixedCostAwareness === "mid"}
                  onClick={() => setFixedCostAwareness("mid")}
                />
                <OptionCard
                  label="特に気にしていない"
                  selected={fixedCostAwareness === "low"}
                  onClick={() => setFixedCostAwareness("low")}
                />
              </QuestionContent>
            )}

            {/* Q5 */}
            {step === 5 && (
              <QuestionContent
                question="手間やリスク許容度はどのくらいですか？"
                description="お得な方法を選ぶ際の、あなたの考え方"
              >
                <OptionCard
              label="できるだけシンプル・年会費無料がいい"
              selected={tolerance === "low"}
              onClick={() => setTolerance("low")}
            />
                <OptionCard
              label="ちょっと複雑でも、ちゃんと得するならアリ"
              selected={tolerance === "mid"}
              onClick={() => setTolerance("mid")}
            />
                <OptionCard
              label="投資系や高還元案件も、内容次第で検討したい"
              selected={tolerance === "high"}
              onClick={() => setTolerance("high")}
            />
              </QuestionContent>
            )}

            {/* ナビゲーション */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center gap-3">
              {/* 前へ戻るボタン */}
              {(step > 1 || onBack) && (
                <button
                  type="button"
                  onClick={handlePrevStep}
                  disabled={isTransitioning}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  前へ戻る
                </button>
              )}

              {/* 次へ / 結果を見るボタン */}
              {step < 5 ? (
            <button
              type="button"
                  disabled={
                    (step === 1 && !canNext1) ||
                    (step === 2 && !canNext2) ||
                    (step === 3 && !canNext3) ||
                    (step === 4 && !canNext4) ||
                    isTransitioning
                  }
                  onClick={() => {
                    if (step === 1 && canNext1) handleNextStep(2);
                    if (step === 2 && canNext2) handleNextStep(3);
                    if (step === 3 && canNext3) handleNextStep(4);
                    if (step === 4 && canNext4) handleNextStep(5);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-bold shadow-sm hover:shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  次へ進む
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  type="button"
                  disabled={!canNext5 || isCalculating}
                  onClick={handleShowDiagnosisResult}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white text-sm font-bold shadow-sm hover:shadow-md hover:bg-blue-700 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              {isCalculating ? (
                    <>
                      <span className="inline-block h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin" />
                  診断中...
                    </>
              ) : (
                    <>
                      結果を見る
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                      </svg>
                    </>
              )}
            </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

/* 質問コンテンツラッパー */
const QuestionContent = ({
  question,
  description,
  children,
}: {
  question: string;
  description?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-5 flex-1 flex flex-col">
    <div className="space-y-2">
      <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
        {question}
      </h2>
      {description && (
        <p className="text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      )}
    </div>
    <div className="space-y-3 flex-1">{children}</div>
  </div>
);

/* 選択肢カード */
const OptionCard = ({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    onClick={onClick}
    className={`w-full text-left px-4 py-3.5 rounded-lg border transition-all duration-200 flex items-center gap-3 ${
      selected
        ? "bg-blue-50 border-blue-500"
        : "bg-white border-slate-200 hover:border-blue-300"
    }`}
  >
    {/* チェックボックス風のインジケーター */}
    <div
      className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
        selected
          ? "bg-blue-600 border-blue-600"
          : "border-slate-300"
      }`}
    >
      {selected && (
        <svg
          className="w-3 h-3 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
    </div>

    <span
      className={`text-sm leading-relaxed flex-1 font-medium ${
        selected ? "text-blue-900" : "text-slate-700"
    }`}
  >
      {label}
    </span>
  </button>
);
