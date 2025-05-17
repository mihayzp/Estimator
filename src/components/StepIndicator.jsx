// src/components/StepIndicator.jsx
import React from 'react';

const StepIndicator = ({ totalSteps, currentStep, labels }) => {
  return (
    <div className="step-indicator">
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <div 
            key={stepNumber} 
            className={`step ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`}
          >
            <div className="step-circle">
              {isCompleted ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              ) : (
                stepNumber
              )}
            </div>
            <div className="step-label">{labels[index]}</div>
            {stepNumber < totalSteps && (
              <div className={`step-connector ${isCompleted ? 'completed' : ''}`}></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;