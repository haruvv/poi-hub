"use client";

import { useState } from "react";
import { DiagnosisHero } from "@/components/diagnosis/DiagnosisHero";
import { DiagnosisWizard } from "@/components/diagnosis/DiagnosisWizard";
import { DiagnosisFooter } from "@/components/diagnosis/DiagnosisFooter";

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
      <div className="mx-auto max-w-md px-4 pt-8 pb-16">
        {!isStarted ? (
          <DiagnosisHero onStart={handleStart} />
        ) : (
          <DiagnosisWizard onBack={handleBack} onStepChange={setCurrentStep} />
        )}
      </div>

      {/* 下部固定エリア */}
      {isStarted && <DiagnosisFooter currentStep={currentStep} />}
    </>
  );
};
