// src/App.jsx
import { useState } from 'react';
import ProjectBasics from './components/steps/ProjectBasics';
import FeaturesSelection from './components/steps/FeaturesSelection';
import TechnicalRequirements from './components/steps/TechnicalRequirements';
import EstimationResults from './components/EstimationResults';
import StepIndicator from './components/StepIndicator';
import './App.css';
import './enhanced-form-styles.css';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Contact Information
    fullName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    
    // Project Basics
    projectName: '',
    currentState: 'idea', // idea, mvp, existing
    projectArea: 'web', // web, mobile, desktop, other
    projectDescription: '',
    budget: '',
    targetLaunchDate: '',
    
    // Core Features
    userAuth: false,
    payments: false,
    adminPanel: false,
    dataAnalytics: false,
    
    // Additional Features
    fileUploads: false,
    notifications: false,
    thirdPartyIntegration: false,
    multiLanguage: false,
    offlineMode: false,
    chatFeature: false,
    searchFeature: false,
    socialFeatures: false,
    customFeatures: '',
    
    // Project Complexity
    complexity: 'medium', // low, medium, high, enterprise
    securityRequirements: 'standard', // standard, advanced, highSecurity
    dataStorage: 'small', // small, medium, large, enterprise
    
    // User & Performance
    projectedLoad: 'low', // low, medium, high
    concurrentUsers: 'low', // low, medium, high
    responseTime: 'standard', // standard, fast, realtime
    scalability: 'standard', // standard, highGrowth, elastic
    
    // Technology Preferences
    frontendPreference: 'any',
    backendPreference: 'any',
    databasePreference: 'any',
    deploymentPreference: 'any',
    
    // Project Timeline & Team
    teamSize: 1,
    durationMonths: 3,
    developmentMethodology: 'agile', // agile, waterfall, hybrid, noPreference
    maintenanceSupport: 'standard', // none, basic, standard, premium
    
    // Additional Requirements
    additionalRequirements: '',
    accessibilityRequired: false,
    mobileResponsive: true,
    seoOptimization: false,
    analyticsIntegration: false
  });
  
  const [estimate, setEstimate] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
    window.scrollTo(0, 0);
  };

  const submitEstimation = async () => {
    setIsSubmitting(true);
    
    try {
      // Convert features to comma-separated list for API
      const features = Object.entries(formData)
        .filter(([key, value]) => 
          ['userAuth', 'payments', 'adminPanel', 'dataAnalytics', 
           'fileUploads', 'notifications', 'thirdPartyIntegration',
           'multiLanguage', 'offlineMode', 'chatFeature', 'searchFeature',
           'socialFeatures'].includes(key) && value
        )
        .map(([key]) => key)
        .join(', ');
      
      // Append custom features if any
      const allFeatures = formData.customFeatures 
        ? features + ', ' + formData.customFeatures 
        : features;
      
      // Prepare payload for API
      const payload = {
        project_name: formData.projectName,
        project_type: formData.projectArea,
        complexity: formData.complexity,
        team_size: parseInt(formData.teamSize),
        duration_months: parseInt(formData.durationMonths),
        features: allFeatures,
        
        // Additional fields for enhanced API (if supported)
        contact_info: {
          name: formData.fullName,
          email: formData.email,
          company: formData.companyName,
          phone: formData.phoneNumber
        },
        project_description: formData.projectDescription,
        security_level: formData.securityRequirements,
        projected_load: formData.projectedLoad,
        technology_preferences: {
          frontend: formData.frontendPreference,
          backend: formData.backendPreference,
          database: formData.databasePreference,
          deployment: formData.deploymentPreference
        }
      };
      
      // Call the API
      const response = await fetch('http://localhost:8080/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate estimate');
      }
      
      const data = await response.json();
      setEstimate(data);
      nextStep();
    } catch (error) {
      console.error('Error generating estimate:', error);
      // Fallback calculation if API fails
      const baseHours = getBaseHours();
      const complexityFactor = getComplexityFactor();
      const loadFactor = getLoadFactor();
      const featuresCount = countFeatures();
      const securityFactor = getSecurityFactor();
      
      const estimatedHours = Math.round(
        baseHours * complexityFactor * loadFactor * securityFactor + (featuresCount * 20)
      );
      
      const estimatedCost = estimatedHours * 75;
      
      setEstimate({
        hours: estimatedHours,
        cost: estimatedCost,
        timeframe: `${formData.durationMonths} months`,
        breakdown: {
          design: Math.round(estimatedHours * 0.2),
          development: Math.round(estimatedHours * 0.6),
          testing: Math.round(estimatedHours * 0.15),
          deployment: Math.round(estimatedHours * 0.05),
        }
      });
      nextStep();
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Helper functions for fallback calculation
  const getBaseHours = () => {
    const baseByArea = {
      web: 80,
      mobile: 120,
      desktop: 100,
      other: 140
    };
    return baseByArea[formData.projectArea] || 100;
  };
  
  const getComplexityFactor = () => {
    const factors = {
      low: 0.7,
      medium: 1.0,
      high: 1.5,
      enterprise: 2.5
    };
    return factors[formData.complexity] || 1.0;
  };
  
  const getLoadFactor = () => {
    const factors = {
      low: 1.0,
      medium: 1.3,
      high: 1.7
    };
    return factors[formData.projectedLoad] || 1.0;
  };
  
  const getSecurityFactor = () => {
    const factors = {
      standard: 1.0,
      advanced: 1.2,
      highSecurity: 1.5
    };
    return factors[formData.securityRequirements] || 1.0;
  };
  
  const countFeatures = () => {
    return ['userAuth', 'payments', 'adminPanel', 'dataAnalytics', 
            'fileUploads', 'notifications', 'thirdPartyIntegration',
            'multiLanguage', 'offlineMode', 'chatFeature', 'searchFeature',
            'socialFeatures']
      .filter(feature => formData[feature]).length;
  };

  const renderStep = () => {
    switch(currentStep) {
      case 1:
        return (
          <ProjectBasics 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
          />
        );
      case 2:
        return (
          <FeaturesSelection 
            formData={formData} 
            handleInputChange={handleInputChange} 
            nextStep={nextStep} 
            prevStep={prevStep} 
          />
        );
      case 3:
        return (
          <TechnicalRequirements 
            formData={formData} 
            handleInputChange={handleInputChange} 
            prevStep={prevStep} 
            submitEstimation={submitEstimation}
            isSubmitting={isSubmitting}
          />
        );
      case 4:
        return <EstimationResults estimate={estimate} formData={formData} />;
      default:
        return <div>Something went wrong</div>;
    }
  };

  return (
    <div className="app">
      <header>
        <h1>DevEstimator</h1>
        <p>Accurate software development estimates in seconds</p>
      </header>
      
      <main>
        {currentStep < 4 && (
          <StepIndicator 
            totalSteps={3} 
            currentStep={currentStep} 
            labels={['Project Basics', 'Features Selection', 'Technical Requirements']} 
          />
        )}
        
        {renderStep()}
      </main>
      
      <footer>
        <p>© 2025 DevEstimator - Fast and accurate software development estimates</p>
      </footer>
    </div>
  );
}

export default App;