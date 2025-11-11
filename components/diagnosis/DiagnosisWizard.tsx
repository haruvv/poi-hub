"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Step = 1 | 2 | 3;

export const DiagnosisWizard = () => {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);
  const [prevStep, setPrevStep] = useState<Step | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [cardUse, setCardUse] = useState<"low" | "mid" | "high" | "">("");
  const [spareTime, setSpareTime] = useState<"none" | "short" | "long" | "">(
    ""
  );
  const [tolerance, setTolerance] = useState<"low" | "mid" | "high" | "">("");
  const [isCalculating, setIsCalculating] = useState(false);

  const canNext1 = cardUse !== "";
  const canNext2 = spareTime !== "";
  const canNext3 = tolerance !== "";

  const handleReset = () => {
    setStep(1);
    setPrevStep(null);
    setCardUse("");
    setSpareTime("");
    setTolerance("");
    setIsCalculating(false);
    setIsTransitioning(false);
  };

  const handleNextStep = (nextStep: Step) => {
    if (isTransitioning) return;
    setPrevStep(step);
    setIsTransitioning(true);
    setTimeout(() => {
      setStep(nextStep);
      setTimeout(() => {
        setPrevStep(null);
        setIsTransitioning(false);
      }, 50);
    }, 400);
  };

  const handleShowDiagnosisResult = () => {
    if (!canNext3 || isCalculating) return;
    setIsCalculating(true);
    setTimeout(() => {
      const params = new URLSearchParams({
        cardUse,
        spareTime,
        tolerance,
      });
      router.push(`/diagnosis/results?${params.toString()}`);
    }, 800);
  };

  return (
    <>
      {/* ローディングオーバーレイ（診断結果計算中） */}
      {isCalculating && (
        <div className="diagnosis-loading-overlay">
          <div className="diagnosis-loading-content">
            <div className="diagnosis-loading-spinner" />
            <div className="diagnosis-loading-text">
              診断中<span className="diagnosis-loading-dots"></span>
            </div>
            <div className="diagnosis-loading-subtext">
              あなたのタイプを分析しています
            </div>
          </div>
        </div>
      )}

      <section className="mt-4 relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white via-slate-50/30 to-slate-50/30 p-6 space-y-5 shadow-xl diagnosis-wizard-card">
        {/* 光るエフェクト */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-300/5 via-transparent to-slate-300/5 diagnosis-wizard-glow" />

        {/* ステップ表示 */}
        <div className="relative flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-700 px-3 py-1 text-[10px] font-bold text-white shadow-md">
            <span>質問 {step} / 3</span>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-[10px] text-slate-600 hover:text-slate-900 font-medium underline-offset-2 hover:underline transition"
          >
            リセット
          </button>
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
            <p className="text-[15px] font-bold text-slate-900 leading-relaxed">
              Q1. 毎月のキャッシュレス利用はどれくらい？
            </p>
            <OptionButton
              label="1万円未満（ほとんど使わない）"
              selected={cardUse === "low"}
              onClick={() => setCardUse("low")}
            />
            <OptionButton
              label="1〜10万円くらい"
              selected={cardUse === "mid"}
              onClick={() => setCardUse("mid")}
            />
            <OptionButton
              label="10万円以上使うことが多い"
              selected={cardUse === "high"}
              onClick={() => setCardUse("high")}
            />
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
            <p className="text-[15px] font-bold text-slate-900 leading-relaxed">
              Q2. 毎月「これくらいなら使えるかな」というスキマ時間は？
            </p>
            <OptionButton
              label="ほぼない（できれば何もしたくない）"
              selected={spareTime === "none"}
              onClick={() => setSpareTime("none")}
            />
            <OptionButton
              label="週に30分〜1時間くらい"
              selected={spareTime === "short"}
              onClick={() => setSpareTime("short")}
            />
            <OptionButton
              label="毎週そこそこ時間取れる"
              selected={spareTime === "long"}
              onClick={() => setSpareTime("long")}
            />
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
            <p className="text-[15px] font-bold text-slate-900 leading-relaxed">
              Q3. 手間やリスク許容度はどのくらい？
            </p>
            <OptionButton
              label="できるだけシンプル・年会費無料がいい"
              selected={tolerance === "low"}
              onClick={() => setTolerance("low")}
            />
            <OptionButton
              label="ちょっと複雑でも、ちゃんと得するならアリ"
              selected={tolerance === "mid"}
              onClick={() => setTolerance("mid")}
            />
            <OptionButton
              label="投資系や高還元案件も、内容次第で検討したい"
              selected={tolerance === "high"}
              onClick={() => setTolerance("high")}
            />
            <button
              type="button"
              disabled={!canNext3 || isCalculating}
              onClick={handleShowDiagnosisResult}
              className={`w-full mt-1 inline-flex items-center justify-center rounded-2xl text-sm font-bold py-3 transition-all duration-200 shadow-lg ${
                canNext3 && !isCalculating
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

/* 選択肢ボタン：地味目に */
const OptionButton = ({
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
    className={`w-full text-left text-[13px] px-4 py-3 rounded-2xl border-2 transition-all duration-200 shadow-sm ${
      selected
        ? "bg-slate-100 border-slate-400 text-slate-800 font-bold shadow-md hover:shadow-lg"
        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 hover:shadow-md"
    }`}
  >
    {label}
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
    className={`w-full mt-1 inline-flex items-center justify-center rounded-2xl text-sm font-bold py-3 transition-all duration-200 shadow-lg ${
      disabled
        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
        : "bg-slate-700 text-white hover:bg-slate-600 hover:shadow-xl active:scale-[0.98]"
    }`}
  >
    次へ進む
  </button>
);
