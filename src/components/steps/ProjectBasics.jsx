import React from 'react';

const ProjectBasics = ({ formData, handleInputChange, nextStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="form-step">
      <h2>Project Basics</h2>
      <p className="step-description">Tell us about your project's foundation</p>
      
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="form-section">
          <h3 className="form-section-title">Contact Information</h3>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email address"
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="companyName">Company Name</label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Your company name (optional)"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Your phone number (optional)"
              />
            </div>
          </div>
        </div>
        
        {/* Project Information */}
        <div className="form-section">
          <h3 className="form-section-title">Project Information</h3>
          
          <div className="form-group">
            <label htmlFor="projectName">Project Name</label>
            <input
              type="text"
              id="projectName"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              placeholder="Enter your project name"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="currentState">Current State</label>
              <select
                id="currentState"
                name="currentState"
                value={formData.currentState}
                onChange={handleInputChange}
                required
              >
                <option value="idea">New Idea</option>
                <option value="mvp">MVP Development</option>
                <option value="existing">Existing Project Enhancement</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="projectArea">Project Area</label>
              <select
                id="projectArea"
                name="projectArea"
                value={formData.projectArea}
                onChange={handleInputChange}
                required
              >
                <option value="web">Web Application</option>
                <option value="mobile">Mobile App</option>
                <option value="desktop">Desktop Software</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="projectDescription">Project Description</label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              placeholder="Briefly describe your project and its main goals"
              rows="3"
            ></textarea>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="budget">Approximate Budget (USD)</label>
              <input
                type="number"
                id="budget"
                name="budget"
                min="0"
                step="1000"
                value={formData.budget}
                onChange={handleInputChange}
                placeholder="What's your approximate budget?"
              />
              <small className="form-helper">This helps us tailor recommendations to your budget.</small>
            </div>
            
            <div className="form-group">
              <label htmlFor="targetLaunchDate">Target Launch Date</label>
              <input
                type="date"
                id="targetLaunchDate"
                name="targetLaunchDate"
                value={formData.targetLaunchDate}
                onChange={handleInputChange}
              />
              <small className="form-helper">When would you like to launch your project?</small>
            </div>
          </div>
        </div>

        <div className="form-navigation">
          <button type="submit" className="btn btn-primary">Continue to Features</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectBasics;