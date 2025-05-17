import React from 'react';

const TechnicalRequirements = ({ formData, handleInputChange, prevStep, submitEstimation, isSubmitting }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    submitEstimation();
  };

  return (
    <div className="form-step">
      <h2>Technical Requirements</h2>
      <p className="step-description">Define the technical aspects of your project</p>
      
      <form onSubmit={handleSubmit}>
        {/* Project Complexity */}
        <div className="form-section">
          <h3 className="form-section-title">Project Complexity</h3>
          
          <div className="form-group">
            <label htmlFor="complexity">Project Complexity Level</label>
            <select
              id="complexity"
              name="complexity"
              value={formData.complexity}
              onChange={handleInputChange}
              required
            >
              <option value="low">Low - Simple functionality, straightforward UI</option>
              <option value="medium">Medium - Moderate complexity, some advanced features</option>
              <option value="high">High - Complex business logic, advanced UI/UX</option>
              <option value="enterprise">Enterprise - Highly complex systems, integrations, security</option>
            </select>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="securityRequirements">Security Requirements</label>
              <select
                id="securityRequirements"
                name="securityRequirements"
                value={formData.securityRequirements}
                onChange={handleInputChange}
              >
                <option value="standard">Standard Security</option>
                <option value="advanced">Advanced Security (2FA, encryption)</option>
                <option value="highSecurity">High Security (compliance requirements)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="dataStorage">Data Storage Requirements</label>
              <select
                id="dataStorage"
                name="dataStorage"
                value={formData.dataStorage}
                onChange={handleInputChange}
              >
                <option value="small">Small (Less than 10GB)</option>
                <option value="medium">Medium (10GB - 100GB)</option>
                <option value="large">Large (100GB - 1TB)</option>
                <option value="enterprise">Enterprise (1TB+)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* User & Performance */}
        <div className="form-section">
          <h3 className="form-section-title">User & Performance Requirements</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="projectedLoad">Projected User Load</label>
              <select
                id="projectedLoad"
                name="projectedLoad"
                value={formData.projectedLoad}
                onChange={handleInputChange}
                required
              >
                <option value="low">Low - Up to 1,000 users/month</option>
                <option value="medium">Medium - 1,000 to 10,000 users/month</option>
                <option value="high">High - 10,000+ users/month</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="concurrentUsers">Expected Concurrent Users</label>
              <select
                id="concurrentUsers"
                name="concurrentUsers"
                value={formData.concurrentUsers}
                onChange={handleInputChange}
              >
                <option value="low">Low (Less than 100)</option>
                <option value="medium">Medium (100-1,000)</option>
                <option value="high">High (1,000+)</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="responseTime">Required Response Time</label>
              <select
                id="responseTime"
                name="responseTime"
                value={formData.responseTime}
                onChange={handleInputChange}
              >
                <option value="standard">Standard (Less than 2 seconds)</option>
                <option value="fast">Fast (Less than 1 second)</option>
                <option value="realtime">Real-time (Milliseconds)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="scalability">Scalability Requirements</label>
              <select
                id="scalability"
                name="scalability"
                value={formData.scalability}
                onChange={handleInputChange}
              >
                <option value="standard">Standard</option>
                <option value="highGrowth">High Growth Potential</option>
                <option value="elastic">Elastic (Rapid scaling up/down)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Technology Stack */}
        <div className="form-section">
          <h3 className="form-section-title">Technology Preferences</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="frontendPreference">Frontend Technology</label>
              <select
                id="frontendPreference"
                name="frontendPreference"
                value={formData.frontendPreference}
                onChange={handleInputChange}
              >
                <option value="any">No Preference</option>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue.js</option>
                <option value="native">Native (iOS/Android)</option>
                <option value="other">Other (specify in notes)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="backendPreference">Backend Technology</label>
              <select
                id="backendPreference"
                name="backendPreference"
                value={formData.backendPreference}
                onChange={handleInputChange}
              >
                <option value="any">No Preference</option>
                <option value="node">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="dotnet">.NET</option>
                <option value="php">PHP</option>
                <option value="other">Other (specify in notes)</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="databasePreference">Database Preference</label>
              <select
                id="databasePreference"
                name="databasePreference"
                value={formData.databasePreference}
                onChange={handleInputChange}
              >
                <option value="any">No Preference</option>
                <option value="sql">SQL (MySQL, PostgreSQL)</option>
                <option value="nosql">NoSQL (MongoDB, Firestore)</option>
                <option value="other">Other (specify in notes)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="deploymentPreference">Deployment Preference</label>
              <select
                id="deploymentPreference"
                name="deploymentPreference"
                value={formData.deploymentPreference}
                onChange={handleInputChange}
              >
                <option value="any">No Preference</option>
                <option value="aws">AWS</option>
                <option value="azure">Azure</option>
                <option value="gcp">Google Cloud</option>
                <option value="dedicated">Dedicated Hosting</option>
                <option value="other">Other (specify in notes)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Project Timeline & Team */}
        <div className="form-section">
          <h3 className="form-section-title">Project Timeline & Team</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="teamSize">Preferred Team Size</label>
              <input
                type="number"
                id="teamSize"
                name="teamSize"
                min="1"
                max="20"
                value={formData.teamSize}
                onChange={handleInputChange}
                required
              />
              <small className="form-helper">Number of developers you'd like on the project</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="durationMonths">Project Timeline (months)</label>
              <input
                type="number"
                id="durationMonths"
                name="durationMonths"
                min="1"
                max="36"
                value={formData.durationMonths}
                onChange={handleInputChange}
                required
              />
              <small className="form-helper">Estimated or desired project duration</small>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="developmentMethodology">Development Methodology</label>
              <select
                id="developmentMethodology"
                name="developmentMethodology"
                value={formData.developmentMethodology}
                onChange={handleInputChange}
              >
                <option value="agile">Agile (Sprints, iterative)</option>
                <option value="waterfall">Waterfall (Sequential)</option>
                <option value="hybrid">Hybrid Approach</option>
                <option value="noPreference">No Preference</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="maintenanceSupport">Maintenance & Support</label>
              <select
                id="maintenanceSupport"
                name="maintenanceSupport"
                value={formData.maintenanceSupport}
                onChange={handleInputChange}
              >
                <option value="none">Not Required</option>
                <option value="basic">Basic Support</option>
                <option value="standard">Standard Support (Business hours)</option>
                <option value="premium">Premium Support (24/7)</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Additional Requirements */}
        <div className="form-section">
          <h3 className="form-section-title">Additional Requirements</h3>
          
          <div className="form-group">
            <label htmlFor="additionalRequirements">Special Requirements or Constraints</label>
            <textarea
              id="additionalRequirements"
              name="additionalRequirements"
              value={formData.additionalRequirements}
              onChange={handleInputChange}
              placeholder="Any other technical requirements, constraints, or specific needs not covered above"
              rows="3"
            ></textarea>
          </div>
          
          <div className="form-row checkbox-group">
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="accessibilityRequired"
                name="accessibilityRequired"
                checked={formData.accessibilityRequired}
                onChange={handleInputChange}
              />
              <label htmlFor="accessibilityRequired">Accessibility Requirements (WCAG compliance)</label>
            </div>
            
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="mobileResponsive"
                name="mobileResponsive"
                checked={formData.mobileResponsive}
                onChange={handleInputChange}
              />
              <label htmlFor="mobileResponsive">Mobile Responsive Design Required</label>
            </div>
          </div>
          
          <div className="form-row checkbox-group">
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="seoOptimization"
                name="seoOptimization"
                checked={formData.seoOptimization}
                onChange={handleInputChange}
              />
              <label htmlFor="seoOptimization">SEO Optimization Required</label>
            </div>
            
            <div className="form-group checkbox">
              <input
                type="checkbox"
                id="analyticsIntegration"
                name="analyticsIntegration"
                checked={formData.analyticsIntegration}
                onChange={handleInputChange}
              />
              <label htmlFor="analyticsIntegration">Analytics Integration Required</label>
            </div>
          </div>
        </div>

        <div className="form-navigation">
          <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>
          <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
            {isSubmitting ? 'Generating Estimate...' : 'Generate Estimate'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TechnicalRequirements;