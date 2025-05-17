// src/components/EstimationForm.jsx
import { useState } from 'react';

const EstimationForm = ({ onEstimateGenerated }) => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectType: 'web',
    complexity: 'medium',
    teamSize: 1,
    durationMonths: 1,
    features: '',
  });
  
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Convert our form data to match the API's expected format
      const apiPayload = {
        project_name: formData.projectName,
        project_type: formData.projectType,
        complexity: formData.complexity,
        team_size: parseInt(formData.teamSize),
        duration_months: parseInt(formData.durationMonths),
        features: formData.features
      };
      
      // Use the backend API endpoint (for local development)
      const response = await fetch('http://localhost:8080/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiPayload),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate estimate');
      }
      
      const data = await response.json();
      onEstimateGenerated(data);
    } catch (error) {
      console.error('Error generating estimate:', error);
      // Fallback to client-side calculation if API fails
      const estimatedHours = calculateEstimate(formData);
      const estimatedCost = estimatedHours * 75;
      
      onEstimateGenerated({
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
    } finally {
      setLoading(false);
    }
  };
  
  // Basic estimation algorithm - will be moved to backend later
  const calculateEstimate = (data) => {
    let baseHours = 0;
    
    // Base hours by project type
    switch(data.projectType) {
      case 'web': baseHours = 80; break;
      case 'mobile': baseHours = 120; break;
      case 'desktop': baseHours = 100; break;
      default: baseHours = 80;
    }
    
    // Multiply by complexity factor
    const complexityFactors = {
      low: 0.7,
      medium: 1,
      high: 1.5,
      enterprise: 2.5
    };
    
    // Calculate features impact
    const featureCount = data.features.split(',').filter(f => f.trim()).length;
    const featureImpact = featureCount * 10;
    
    return Math.round(baseHours * complexityFactors[data.complexity] * 
           Math.sqrt(data.teamSize) * data.durationMonths + featureImpact);
  };

  return (
    <div className="estimation-form">
      <h2>Software Development Estimator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Project Name</label>
          <input
            type="text"
            id="projectName"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="projectType">Project Type</label>
          <select
            id="projectType"
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
          >
            <option value="web">Web Application</option>
            <option value="mobile">Mobile App</option>
            <option value="desktop">Desktop Software</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="complexity">Project Complexity</label>
          <select
            id="complexity"
            name="complexity"
            value={formData.complexity}
            onChange={handleChange}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="teamSize">Team Size</label>
          <input
            type="number"
            id="teamSize"
            name="teamSize"
            min="1"
            max="20"
            value={formData.teamSize}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="durationMonths">Duration (months)</label>
          <input
            type="number"
            id="durationMonths"
            name="durationMonths"
            min="1"
            max="36"
            value={formData.durationMonths}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="features">Key Features (comma separated)</label>
          <textarea
            id="features"
            name="features"
            value={formData.features}
            onChange={handleChange}
            placeholder="user auth, payments, reporting, etc."
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? 'Calculating...' : 'Generate Estimate'}
        </button>
      </form>
    </div>
  );
};

export default EstimationForm;