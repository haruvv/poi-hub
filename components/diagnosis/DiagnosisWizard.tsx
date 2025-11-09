"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  getDiagnosisTypeId,
  diagnosisTypes,
  type DiagnosisType,
} from "@/types/diagnosis";

type Step = 1 | 2 | 3 | 4;

export const DiagnosisWizard = () => {
  const router = useRouter();
  const [step, setStep] = useState<Step>(1);

  const [cardUse, setCardUse] = useState<"low" | "mid" | "high" | "">("");
  const [spareTime, setSpareTime] = useState<"none" | "short" | "long" | "">(
    ""
  );
  const [tolerance, setTolerance] = useState<"low" | "mid" | "high" | "">("");
  const [isNavigating, setIsNavigating] = useState(false);

  const canNext1 = cardUse !== "";
  const canNext2 = spareTime !== "";
  const canNext3 = tolerance !== "";

  const handleReset = () => {
    setStep(1);
    setCardUse("");
    setSpareTime("");
    setTolerance("");
    setIsNavigating(false);
  };

  const result = buildResult({ cardUse, spareTime, tolerance });

  const handleShowResults = () => {
    if (isNavigating) return;
    const diagnosisType = result.label as DiagnosisType;
    const typeId = getDiagnosisTypeId(diagnosisType);
    const typeInfo = diagnosisTypes[diagnosisType];
    const url = `/diagnosis/${typeInfo.page}?type=${typeId}`;
    setIsNavigating(true);
    setTimeout(() => {
      router.push(url);
    }, 600);
  };

  return (
    <section className="mt-4 rounded-2xl bg-white border border-slate-200 p-4 space-y-4 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
      {/* ステップ表示 */}
      <div className="flex items-center justify-between text-[10px] text-slate-500">
        <span>質問 {step <= 3 ? step : 3} / 3</span>
        <button
          type="button"
          onClick={handleReset}
          className="underline-offset-2 hover:underline"
        >
          リセット
        </button>
      </div>

      {/* Q1 */}
      {step === 1 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-900">
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
            disabled={!canNext1}
            onClick={() => canNext1 && setStep(2)}
          />
        </div>
      )}

      {/* Q2 */}
      {step === 2 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-900">
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
            disabled={!canNext2}
            onClick={() => canNext2 && setStep(3)}
          />
        </div>
      )}

      {/* Q3 */}
      {step === 3 && (
        <div className="space-y-3">
          <p className="text-sm font-medium text-slate-900">
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
            disabled={!canNext3}
            onClick={() => canNext3 && setStep(4)}
            className={`w-full mt-1 inline-flex items-center justify-center rounded-2xl text-sm font-semibold py-2.5 transition ${
              canNext3
                ? "bg-blue-600 text-white hover:bg-blue-500"
                : "bg-slate-100 text-slate-400 cursor-not-allowed"
            }`}
          >
            診断結果をみる
          </button>
        </div>
      )}

      {/* 結果 */}
      {step === 4 && (
        <div className="space-y-3">
          <p className="text-base font-semibold text-blue-600">診断結果</p>
          <h2 className="text-sm font-semibold text-slate-900">
            あなたは「{result.label}」タイプです。
          </h2>
          <p className="text-xs text-slate-700 leading-relaxed">
            {result.description}
          </p>
          <ul className="mt-2 space-y-1.5 text-xs text-slate-800">
            {result.actions.map((a) => (
              <li key={a} className="flex items-start gap-1.5">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                <span>{a}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 mt-3">
            <button
              type="button"
              disabled={isNavigating}
              onClick={handleShowResults}
              aria-live="polite"
              className={`result-cta w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold py-2.5 transition-all duration-200 shadow-lg hover:shadow-xl ${
                isNavigating
                  ? "cursor-wait opacity-90 ring-2 ring-blue-300/60 hover:from-blue-600 hover:to-blue-500"
                  : "hover:from-blue-500 hover:to-blue-400 active:scale-[0.97]"
              }`}
            >
              {isNavigating ? (
                <span className="flex items-center gap-2 text-sm font-semibold tracking-wide">
                  <span
                    className="inline-block h-4 w-4 rounded-full border-2 border-white/70 border-t-transparent animate-spin"
                    aria-hidden="true"
                  />
                  診断中...
                </span>
              ) : (
                <>
                  <span>診断結果に合う候補を表示する</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
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
            {isNavigating && (
              <p
                className="text-[11px] text-blue-500 text-center animate-pulse"
                aria-live="polite"
              >
                結果画面を準備しています...
              </p>
            )}
            <button
              type="button"
              onClick={handleReset}
              className="w-full inline-flex items-center justify-center rounded-2xl border border-slate-200 text-[11px] text-slate-600 py-2 hover:bg-slate-50 transition"
            >
              もう一度診断する
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

/* 選択肢ボタン：青系に */
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
    className={`w-full text-left text-xs sm:text-sm px-3 py-2 rounded-2xl border transition ${
      selected
        ? "bg-blue-50 border-blue-500 text-blue-700 font-semibold"
        : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
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
    className={`w-full mt-1 inline-flex items-center justify-center rounded-2xl text-sm font-semibold py-2.5 transition ${
      disabled
        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
        : "bg-blue-600 text-white hover:bg-blue-500"
    }`}
  >
    次へ進む
  </button>
);

/* 結果ロジックはそのまま（文言は必要あれば後で調整） */
const buildResult = ({
  cardUse,
  spareTime,
  tolerance,
}: {
  cardUse: string;
  spareTime: string;
  tolerance: string;
}) => {
  if (cardUse === "mid" && spareTime === "none" && tolerance === "low") {
    return {
      label: "めんどくさがり現実派",
      description:
        "普段の支払いとよく使うサービスだけ整えて、自動で貯まる仕組みを作るのが効率的です。",
      actions: [
        "年会費無料で還元率の良いメインカードを1枚決める",
        "よく使うECはポイントサイトを1タップ経由するだけにする",
        "コンビニやドラッグストアの公式アプリだけ入れておく",
      ],
    };
  }

  if (spareTime === "short" && tolerance !== "low") {
    return {
      label: "コスパ重視で少し動ける",
      description:
        "固定費と決済の最適化に加えて、単発案件を月数件こなすだけで＋αを狙えます。",
      actions: [
        "メインカード＋ポイントサイトの基本セットを押さえる",
        "「登録だけ」で完了する高単価案件から試す",
        "信頼できるアンケート・レシート系アプリを1〜2個だけ併用する",
      ],
    };
  }

  if (cardUse === "high") {
    return {
      label: "支出インパクト大きめ",
      description:
        "毎月の決済額が大きいので、カード選びとポイント設計だけで年間差額が出やすいタイプです。",
      actions: [
        "利用ジャンルに合う高還元カードを2枚までに絞る",
        "公共料金・サブスク・通販決済をそのカードに集約する",
        "ポイントサイトやキャンペーンは「狙い撃ち」で使う",
      ],
    };
  }

  return {
    label: "ライトに始める",
    description:
      "難しいことは避けつつ、「損だけはしたくない」人向け。最低限の「やっとくと得」だけ押さえればOKです。",
    actions: [
      "年会費無料で評判の良い決済手段を1つ決める",
      "よく使うサービスの公式アプリだけ入れておく",
      "余裕があれば単発でおいしい案件を1〜2件だけ試す",
    ],
  };
};
