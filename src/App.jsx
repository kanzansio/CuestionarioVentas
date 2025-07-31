import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import AssessmentForm from './components/AssessmentForm';
import ResultsReport from './components/ResultsReport';
import './App.css';

function App() {
  const [currentStep, setCurrentStep] = useState('landing'); // 'landing', 'assessment', 'results'
  const [userInfo, setUserInfo] = useState(null);
  const [results, setResults] = useState(null);

  const handleStart = (userData) => {
    setUserInfo(userData);
    setCurrentStep('assessment');
  };

  const handleComplete = (assessmentResults) => {
    setResults(assessmentResults);
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setCurrentStep('landing');
    setUserInfo(null);
    setResults(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {currentStep === 'landing' && (
        <LandingPage onStart={handleStart} />
      )}
      
      {currentStep === 'assessment' && (
        <div className="container mx-auto px-4 py-8">
          <AssessmentForm onComplete={handleComplete} />
        </div>
      )}
      
      {currentStep === 'results' && (
        <div className="container mx-auto px-4 py-8">
          <ResultsReport 
            results={results} 
            userInfo={userInfo}
            onRestart={handleRestart}
          />
        </div>
      )}
    </div>
  );
}

export default App;
