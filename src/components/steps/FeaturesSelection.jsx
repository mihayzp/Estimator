import React from 'react';

const FeaturesSelection = ({ formData, handleInputChange, nextStep, prevStep }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className="form-step">
      <h2>Features Selection</h2>
      <p className="step-description">Select the features your project requires</p>
      
      <form onSubmit={handleSubmit}>
        {/* Core Features */}
        <div className="form-section">
          <h3 className="form-section-title">Core Features</h3>
          <p className="form-section-description">Select the main features your application needs</p>
          
          <div className="features-grid">
            <div className="feature-item">
              <input
                type="checkbox"
                id="userAuth"
                name="userAuth"
                checked={formData.userAuth}
                onChange={handleInputChange}
              />
              <label htmlFor="userAuth">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="feature-name">User Authentication</div>
                <div className="feature-description">Login, registration, user profiles and roles</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="payments"
                name="payments"
                checked={formData.payments}
                onChange={handleInputChange}
              />
              <label htmlFor="payments">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                    <line x1="2" y1="10" x2="22" y2="10"></line>
                  </svg>
                </div>
                <div className="feature-name">Payment Processing</div>
                <div className="feature-description">Credit card, subscription or payment gateway integration</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="adminPanel"
                name="adminPanel"
                checked={formData.adminPanel}
                onChange={handleInputChange}
              />
              <label htmlFor="adminPanel">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div className="feature-name">Admin Dashboard</div>
                <div className="feature-description">User management, content moderation, settings</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="dataAnalytics"
                name="dataAnalytics"
                checked={formData.dataAnalytics}
                onChange={handleInputChange}
              />
              <label htmlFor="dataAnalytics">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <div className="feature-name">Data Analytics</div>
                <div className="feature-description">Reporting, statistics, dashboards</div>
              </label>
            </div>
          </div>
        </div>
        
        {/* Additional Features */}
        <div className="form-section">
          <h3 className="form-section-title">Additional Features</h3>
          <p className="form-section-description">Select any additional features you might need</p>
          
          <div className="features-grid">
            <div className="feature-item">
              <input
                type="checkbox"
                id="fileUploads"
                name="fileUploads"
                checked={formData.fileUploads}
                onChange={handleInputChange}
              />
              <label htmlFor="fileUploads">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
                <div className="feature-name">File Uploads</div>
                <div className="feature-description">Image/document upload, cloud storage</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="notifications"
                name="notifications"
                checked={formData.notifications}
                onChange={handleInputChange}
              />
              <label htmlFor="notifications">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                  </svg>
                </div>
                <div className="feature-name">Notifications</div>
                <div className="feature-description">Email, SMS, push notifications</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="thirdPartyIntegration"
                name="thirdPartyIntegration"
                checked={formData.thirdPartyIntegration}
                onChange={handleInputChange}
              />
              <label htmlFor="thirdPartyIntegration">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </div>
                <div className="feature-name">Third-Party Integration</div>
                <div className="feature-description">APIs, social media, external services</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="multiLanguage"
                name="multiLanguage"
                checked={formData.multiLanguage}
                onChange={handleInputChange}
              />
              <label htmlFor="multiLanguage">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8l6 6"></path>
                    <path d="M4 14l6-6 2-3"></path>
                    <path d="M2 5h12"></path>
                    <path d="M7 2h1"></path>
                    <path d="M22 22l-5-10-5 10"></path>
                    <path d="M14 18h6"></path>
                  </svg>
                </div>
                <div className="feature-name">Multi-language Support</div>
                <div className="feature-description">Translations, localization, RTL support</div>
              </label>
            </div>
          </div>
          
          <div className="features-grid">
            <div className="feature-item">
              <input
                type="checkbox"
                id="offlineMode"
                name="offlineMode"
                checked={formData.offlineMode}
                onChange={handleInputChange}
              />
              <label htmlFor="offlineMode">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="1" y1="1" x2="23" y2="23"></line>
                    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path>
                    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path>
                    <path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path>
                    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path>
                    <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                    <line x1="12" y1="20" x2="12.01" y2="20"></line>
                  </svg>
                </div>
                <div className="feature-name">Offline Support</div>
                <div className="feature-description">Work without internet connection</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="chatFeature"
                name="chatFeature"
                checked={formData.chatFeature}
                onChange={handleInputChange}
              />
              <label htmlFor="chatFeature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="feature-name">Chat Functionality</div>
                <div className="feature-description">Live chat, messaging, support</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="searchFeature"
                name="searchFeature"
                checked={formData.searchFeature}
                onChange={handleInputChange}
              />
              <label htmlFor="searchFeature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                </div>
                <div className="feature-name">Advanced Search</div>
                <div className="feature-description">Filtering, sorting, full-text search</div>
              </label>
            </div>
            
            <div className="feature-item">
              <input
                type="checkbox"
                id="socialFeatures"
                name="socialFeatures"
                checked={formData.socialFeatures}
                onChange={handleInputChange}
              />
              <label htmlFor="socialFeatures">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div className="feature-name">Social Features</div>
                <div className="feature-description">Follows, likes, sharing, profiles</div>
              </label>
            </div>
          </div>
        </div>
        
        <div className="form-group">
          <label htmlFor="customFeatures">Additional Features</label>
          <textarea
            id="customFeatures"
            name="customFeatures"
            value={formData.customFeatures}
            onChange={handleInputChange}
            placeholder="Describe any additional features needed for your project"
            rows="3"
          ></textarea>
        </div>

        <div className="form-navigation">
          <button type="button" className="btn btn-secondary" onClick={prevStep}>Previous</button>
          <button type="submit" className="btn btn-primary">Continue to Technical Requirements</button>
        </div>
      </form>
    </div>
  );
};

export default FeaturesSelection;