import React from 'react';
import SyntaxHighlighter from './SyntaxHighlighter';

export default function WidgetDetail({ 
  widget, 
  isLearned, 
  onToggleLearned, 
  onBack, 
  onPrev, 
  onNext 
}) {
  return (
    <div className="widget-detail-container animate-fade-in">
      {/* Detail Header & Action Bar */}
      <div className="detail-action-bar">
        <div className="breadcrumb">
          <span className="crumb-link" onClick={onBack}>الرئيسية</span>
          <span className="crumb-separator">/</span>
          <span className="crumb-current">{widget.name}</span>
        </div>

        <div className="detail-actions">
          <button 
            className={`learn-toggle-btn ${isLearned ? 'completed' : ''}`}
            onClick={onToggleLearned}
          >
            {isLearned ? (
              <>
                <svg className="action-btn-icon" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>تم التعلم! (اضغط للإلغاء)</span>
              </>
            ) : (
              <>
                <svg className="action-btn-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>تحديد كمكتمل</span>
              </>
            )}
          </button>

          <button className="back-to-home-btn" onClick={onBack}>
            ← العودة للرئيسية
          </button>
        </div>
      </div>

      {/* Main Container: Focused single-column layout */}
      <div className="detail-docs-centered-column">
        
        <div className="docs-header">
          <span className="docs-cat-badge">{widget.category}</span>
          <h2 className="docs-title-en">{widget.name}</h2>
          <h3 className="docs-title-ar">{widget.arabicName}</h3>
        </div>

        {/* Section 1: Detailed Explanation */}
        <section className="docs-section">
          <h4 className="section-title">💡 الشرح التفصيلي</h4>
          <p className="docs-explanation">{widget.explanation}</p>
        </section>

        {/* Section 2: Properties Breakdown */}
        {widget.properties && widget.properties.length > 0 && (
          <section className="docs-section">
            <h4 className="section-title">📋 خصائص الـ Widget (Properties)</h4>
            <p className="section-subtitle-ar">فيما يلي تفصيل لأهم الخصائص المتاحة لتخصيص هذا الـ Widget مع شرحها وكود تطبيقها:</p>
            
            <div className="properties-list-container">
              {widget.properties.map((prop, idx) => (
                <div className="property-doc-card" key={idx}>
                  <div className="property-doc-header">
                    <code className="property-name-badge">{prop.name}</code>
                  </div>
                  <div className="property-doc-body">
                    <p className="property-desc-txt">{prop.description}</p>
                    <div className="property-mini-code">
                      <SyntaxHighlighter code={prop.example} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section 3: Complete Practical Code Example */}
        <section className="docs-section">
          <h4 className="section-title">💻 مثال عملي متكامل</h4>
          <p className="section-subtitle-ar">كود كامل يوضح كيفية دمج واستخدام هذا الـ Widget داخل بيئة فلاتر:</p>
          <SyntaxHighlighter code={widget.codeExample} />
        </section>

        {/* Section 4: Notes and Tips */}
        {widget.notes && widget.notes.length > 0 && (
          <section className="docs-section docs-notes-box">
            <h4 className="section-title text-note">📌 نصائح وإرشادات هامة</h4>
            <ul className="docs-list">
              {widget.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 5: Common Mistakes */}
        {widget.mistakes && widget.mistakes.length > 0 && (
          <section className="docs-section docs-mistakes-box">
            <h4 className="section-title text-danger">⚠️ أخطاء شائعة تجنبها</h4>
            <ul className="docs-list">
              {widget.mistakes.map((mistake, index) => (
                <li key={index}>{mistake}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Section 6: Official Reference Link */}
        <section className="docs-section docs-footer">
          <a 
            href={widget.docLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="official-doc-link"
          >
            <span>قراءة المستندات الرسمية لـ {widget.name} (Flutter Docs)</span>
            <svg className="external-link-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-2h6m0 0v6m0-6L10 14"></path>
            </svg>
          </a>
        </section>

      </div>

      {/* Navigation Footer */}
      <div className="detail-navigation-footer">
        <button 
          className="nav-footer-btn prev" 
          onClick={onPrev}
          disabled={!onPrev}
        >
          <span>السابق</span>
          <span className="nav-footer-btn-sub">الشاشة السابقة</span>
        </button>

        <button 
          className="nav-footer-btn next" 
          onClick={onNext}
          disabled={!onNext}
        >
          <span>التالي</span>
          <span className="nav-footer-btn-sub">العنصر التالي</span>
        </button>
      </div>
    </div>
  );
}
