import React from 'react';

export default function Navbar({ 
  completedCount, 
  totalCount, 
  darkMode, 
  setDarkMode, 
  activeWidget, 
  onBackHome 
}) {
  const completionPercentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Brand Logo & Name */}
        <div className="navbar-brand" onClick={onBackHome} style={{ cursor: 'pointer' }}>
          <svg className="flutter-svg-logo" viewBox="0 0 390 390" width="30" height="30">
            <path fill="#02569B" d="M260.6 3l-89.9 89.9 89.9 89.9H390L300.1 92.9 390 3h-129.4z"/>
            <path fill="#0175C2" d="M260.6 195.9l-44.9 44.9 44.9 44.9H390l-45-44.9 45-44.9H260.6z"/>
            <path fill="#039BE5" d="M215.7 240.8L125.8 331 36 240.8h89.9l89.8-89.9 89.9 89.9h-89.9z"/>
          </svg>
          <div className="brand-texts">
            <h1 className="brand-title">فلاتر بالعربية</h1>
            <span className="brand-subtitle">منصة التعلم التفاعلية</span>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="progress-capsule">
          <span className="progress-label">مسار التعلم:</span>
          <div className="progress-bar-wrapper">
            <div 
              className="progress-bar-fill" 
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
          <span className="progress-text">{completedCount} من {totalCount} ({completionPercentage}%)</span>
        </div>

        {/* Theme Toggle & Home navigation */}
        <div className="navbar-actions">
          {activeWidget && (
            <button className="nav-btn-home" onClick={onBackHome}>
              🏠 الرئيسية
            </button>
          )}

          <button 
            className="theme-toggle-btn"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="تغيير المظهر"
          >
            {darkMode ? (
              <svg className="theme-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg className="theme-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
