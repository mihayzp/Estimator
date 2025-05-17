// src/components/EstimationResults.jsx
import React from 'react';

const EstimationResults = ({ estimate }) => {
  if (!estimate) return null;
  
  // Function to format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(amount);
  };
  
  // Calculate the feature complexity based on the hours
  const getComplexityLevel = (hours) => {
    if (hours < 100) return 'Low';
    if (hours < 200) return 'Medium';
    if (hours < 400) return 'High';
    return 'Very High';
  };
  
  // Generate recommended team size based on hours and timeframe
  const getRecommendedTeamSize = (hours, timeframe) => {
    const months = parseInt(timeframe);
    const hoursPerMonth = hours / months;
    
    // Assuming a developer works ~160 hours per month
    return Math.ceil(hoursPerMonth / 160);
  };
  
  const handleDownloadPDF = () => {
    alert('PDF download functionality would be implemented here');
    // In a real implementation, this would generate and download a PDF
  };
  
  const handleContactUs = () => {
    alert('Contact form would be shown here');
    // In a real implementation, this would show a contact form or redirect to contact page
  };
  
  return (
    <div className="estimation-results">
      <h2>Your Development Estimate</h2>
      <p className="step-description">Based on your requirements, here's our detailed estimate</p>
      
      <div className="estimate-summary">
        <div className="estimate-card">
          <h3>Estimated Cost</h3>
          <div className="estimate-value">{formatCurrency(estimate.cost)}</div>
        </div>
        
        <div className="estimate-card">
          <h3>Development Hours</h3>
          <div className="estimate-value">{estimate.hours}</div>
        </div>
        
        <div className="estimate-card">
          <h3>Timeframe</h3>
          <div className="estimate-value">{estimate.timeframe}</div>
        </div>
        
        <div className="estimate-card">
          <h3>Recommended Team</h3>
          <div className="estimate-value">{getRecommendedTeamSize(estimate.hours, estimate.timeframe.split(' ')[0])} Developers</div>
        </div>
      </div>
      
      <div className="estimate-breakdown">
        <h3>Hours Breakdown</h3>
        <div className="breakdown-bars">
          {Object.entries(estimate.breakdown).map(([phase, hours]) => (
            <div className="breakdown-item" key={phase}>
              <div className="breakdown-label">
                <span className="phase-name">{phase.charAt(0).toUpperCase() + phase.slice(1)}</span>
                <span className="phase-hours">{hours} hrs</span>
              </div>
              <div className="breakdown-bar-container">
                <div 
                  className="breakdown-bar" 
                  style={{width: `${(hours / estimate.hours) * 100}%`}}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="estimate-detail-cards">
        <div className="detail-card">
          <h3>Project Complexity</h3>
          <p>Based on your requirements, your project has a <strong>{getComplexityLevel(estimate.hours)}</strong> complexity level.</p>
          <p>This influences the skill level of developers needed and the project management approach.</p>
        </div>
        
        <div className="detail-card">
          <h3>Technology Recommendations</h3>
          <p>For your project type and requirements, we recommend:</p>
          <ul>
            <li><strong>Frontend:</strong> React with TypeScript</li>
            <li><strong>Backend:</strong> Node.js or Python</li>
            <li><strong>Database:</strong> PostgreSQL</li>
            <li><strong>Hosting:</strong> AWS or Vercel</li>
          </ul>
        </div>
      </div>
      
      <div className="estimate-notes">
        <h3>Important Notes</h3>
        <ul>
          <li>This estimate is preliminary and based on the information provided.</li>
          <li>Actual costs may vary depending on final requirements and project scope.</li>
          <li>The estimate includes design, development, testing, and deployment.</li>
          <li>We recommend starting with a detailed discovery phase to refine requirements.</li>
        </ul>
      </div>
      
      <div className="result-actions">
        <button className="btn btn-primary btn-large" onClick={handleContactUs}>
          Get a Detailed Quote
        </button>
        <button className="btn btn-outline btn-large" onClick={handleDownloadPDF}>
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default EstimationResults;