"use client";

import { useState } from "react";
import { DiagnosisHero } from "@/components/diagnosis/DiagnosisHero";
import { DiagnosisWizard } from "@/components/diagnosis/DiagnosisWizard";
import { DiagnosisFooter } from "@/components/diagnosis/DiagnosisFooter";
import { DiagnosisStartFlow } from "@/components/diagnosis/DiagnosisStartFlow";
import { DiagnosisTypeExamples } from "@/components/diagnosis/DiagnosisTypeExamples";

export const DiagnosisPageClient = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const handleStart = () => {
    setIsStarted(true);
    setCurrentStep(1);
  };

  const handleBack = () => {
    setIsStarted(false);
    setCurrentStep(0);
  };

  return (
    <>
      <div className="mx-auto max-w-2xl px-4 pt-8 pb-16">
        {!isStarted ? (
          <div className="space-y-10">
            {/* ファーストビュー：ヒーローセクション */}
            <DiagnosisHero onStart={handleStart} />

            {/* その下の簡潔な要素 */}
            <div className="space-y-8">
              {/* 3ステップで診断の流れ */}
              <DiagnosisStartFlow />

              {/* 想定タイプの例 */}
              <DiagnosisTypeExamples />
            </div>
          </div>
        ) : (
          <DiagnosisWizard onBack={handleBack} onStepChange={setCurrentStep} />
        )}
      </div>

      {/* 下部固定エリア */}
      {isStarted && <DiagnosisFooter currentStep={currentStep} />}
    </>
  );
};
