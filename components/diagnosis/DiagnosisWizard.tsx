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
  const [prevStep, setPrevStep] = useState<Step | null>(null);
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
    setPrevStep(step);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(prevStepNum);
      onStepChange?.(prevStepNum);
      setTimeout(() => {
        setPrevStep(null);
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const handleNextStep = (nextStep: Step) => {
    if (isTransitioning) return;
    setPrevStep(step);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      onStepChange?.(nextStep);
      setTimeout(() => {
        setPrevStep(null);
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const handleShowDiagnosisResult = () => {
    if (!canNext5 || isCalculating) return;
    setIsCalculating(true);
    setTimeout(() => {
      // 既存のロジックとの互換性のため、cashlessAmountを優先的に使用
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
  const progressPercentage = (step / totalSteps) * 100;

  return (
    <>
      {/* ローディングオーバーレイ（診断結果計算中） */}
      {isCalculating && (
        <div className="diagnosis-loading-overlay">
          <div className="diagnosis-loading-content">
            <div className="diagnosis-loading-spinner" />
            <div className="diagnosis-loading-text">
              あなたに合うプランを分析中
              <span className="diagnosis-loading-dots"></span>
            </div>
            <div className="diagnosis-loading-subtext">
              もうすぐ結果が表示されます
            </div>
          </div>
        </div>
      )}

      <section className="mt-4 relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white via-slate-50/30 to-slate-50/30 p-6 space-y-5 shadow-xl diagnosis-wizard-card">
        {/* 光るエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-slate-300/5 diagnosis-wizard-glow" />

        {/* ステップ表示と進捗バー */}
        <div className="relative space-y-3">
          <div className="flex items-center justify-between">
            {/* 戻るボタン */}
            {(step > 1 || onBack) && (
              <button
                type="button"
                onClick={handlePrevStep}
                className="flex items-center gap-1.5 text-[12px] text-slate-600 hover:text-slate-900 font-medium transition"
                disabled={isTransitioning}
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
                戻る
              </button>
            )}
            <div className="flex-1" />
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-3 py-1 text-[11px] font-bold text-white shadow-md">
              <span>
                Q{step} / {totalSteps}
              </span>
            </div>
          </div>

          {/* プログレスバー */}
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-slate-700 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* Q1 */}
        {step === 1 && (
          <div
            className={`relative space-y-4 diagnosis-step-content ${
              prevStep === 1
                ? "diagnosis-step-fade-out"
                : "diagnosis-step-fade-in"
            }`}
          >
            <p className="text-[16px] font-bold text-slate-900 leading-relaxed">
              今の「お金との付き合い方」はどれが近い？
            </p>
            <div className="space-y-3">
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
            </div>
            <NextButton
              disabled={!canNext1 || isTransitioning}
              onClick={() => canNext1 && handleNextStep(2)}
            />
          </div>
        )}

        {/* Q2 */}
        {step === 2 && (
          <div
            className={`relative space-y-4 diagnosis-step-content ${
              prevStep === 2
                ? "diagnosis-step-fade-out"
                : "diagnosis-step-fade-in"
            }`}
          >
            <p className="text-[16px] font-bold text-slate-900 leading-relaxed">
              毎月のキャッシュレス利用はどれくらい？
            </p>
            <div className="space-y-3">
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
            </div>
            <NextButton
              disabled={!canNext2 || isTransitioning}
              onClick={() => canNext2 && handleNextStep(3)}
            />
          </div>
        )}

        {/* Q3 */}
        {step === 3 && (
          <div
            className={`relative space-y-4 diagnosis-step-content ${
              prevStep === 3
                ? "diagnosis-step-fade-out"
                : "diagnosis-step-fade-in"
            }`}
          >
            <p className="text-[16px] font-bold text-slate-900 leading-relaxed">
              毎月「これくらいなら使えるかな」というスキマ時間は？
            </p>
            <div className="space-y-3">
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
            </div>
            <NextButton
              disabled={!canNext3 || isTransitioning}
              onClick={() => canNext3 && handleNextStep(4)}
            />
          </div>
        )}

        {/* Q4 */}
        {step === 4 && (
          <div
            className={`relative space-y-4 diagnosis-step-content ${
              prevStep === 4
                ? "diagnosis-step-fade-out"
                : "diagnosis-step-fade-in"
            }`}
          >
            <p className="text-[16px] font-bold text-slate-900 leading-relaxed">
              固定費（光熱費、通信費、サブスクなど）への意識は？
            </p>
            <div className="space-y-3">
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
            </div>
            <NextButton
              disabled={!canNext4 || isTransitioning}
              onClick={() => canNext4 && handleNextStep(5)}
            />
          </div>
        )}

        {/* Q5 */}
        {step === 5 && (
          <div
            className={`relative space-y-4 diagnosis-step-content ${
              prevStep === 5
                ? "diagnosis-step-fade-out"
                : "diagnosis-step-fade-in"
            }`}
          >
            <p className="text-[16px] font-bold text-slate-900 leading-relaxed">
              手間やリスク許容度はどのくらい？
            </p>
            <div className="space-y-3">
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
            </div>
            <button
              type="button"
              disabled={!canNext5 || isCalculating}
              onClick={handleShowDiagnosisResult}
              className={`w-full mt-1 inline-flex items-center justify-center rounded-2xl text-base font-bold py-4 transition-all duration-200 shadow-lg ${
                canNext5 && !isCalculating
                  ? "bg-slate-700 text-white hover:bg-slate-600 hover:shadow-xl active:scale-[0.98]"
                  : "bg-slate-100 text-slate-400 cursor-not-allowed"
              }`}
            >
              {isCalculating ? (
                <span className="flex items-center gap-2">
                  <span
                    className="inline-block h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin"
                    aria-hidden="true"
                  />
                  診断中...
                </span>
              ) : (
                "診断結果をみる"
              )}
            </button>
          </div>
        )}
      </section>
    </>
  );
};

/* 選択肢カード（絵文字なし） */
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
    className={`w-full text-left px-4 py-4 rounded-2xl border-2 transition-all duration-200 shadow-sm flex items-center gap-3 ${
      selected
        ? "bg-slate-100 border-slate-400 text-slate-800 font-bold shadow-md hover:shadow-lg"
        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md"
    }`}
  >
    <span className="text-[14px] leading-relaxed flex-1">{label}</span>
    {selected && (
      <svg
        className="w-5 h-5 text-slate-700 flex-shrink-0"
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
  </button>
);

const NextButton = ({
  disabled,
  onClick,
}: {
  disabled: boolean;
  onClick: () => void;
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    className={`w-full mt-2 inline-flex items-center justify-center rounded-2xl text-base font-bold py-4 transition-all duration-200 shadow-lg ${
      disabled
        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
        : "bg-slate-700 text-white hover:bg-slate-600 hover:shadow-xl active:scale-[0.98]"
    }`}
  >
    次へ進む
  </button>
);
