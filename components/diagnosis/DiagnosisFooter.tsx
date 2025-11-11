"use client";

interface DiagnosisFooterProps {
  currentStep: number;
  totalSteps?: number;
}

export const DiagnosisFooter = ({
  currentStep,
  totalSteps = 5,
}: DiagnosisFooterProps) => {
  const remainingSteps = totalSteps - currentStep;

  if (currentStep === 0) return null; // ヒーロー画面では表示しない

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-slate-200 shadow-lg">
      <div className="mx-auto max-w-md px-4 py-3">
        <div className="flex items-center justify-between text-[12px]">
          <div className="text-slate-600 font-medium">
            {remainingSteps > 0 ? `あと${remainingSteps}問` : "最後の質問です"}
          </div>
          <div className="text-slate-500">スキップせず答えると精度UP</div>
        </div>
      </div>
    </div>
  );
};
