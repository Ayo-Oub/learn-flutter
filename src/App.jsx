import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import WidgetCard from './components/WidgetCard';
import WidgetDetail from './components/WidgetDetail';
import { flutterWidgets } from './data/flutterData';
import './App.css';

export default function App() {
  // Theme state: defaults to dark mode for premium look, cached in localStorage
  const [darkMode, setDarkMode] = useState(() => {
    const cached = localStorage.getItem('theme');
    return cached ? cached === 'dark' : true;
  });

  // Navigation state: tracks selected widget (null = Home Dashboard)
  const [activeWidgetId, setActiveWidgetId] = useState(() => {
    // Read from URL hash if available (e.g. #scaffold)
    const hash = window.location.hash.replace('#', '');
    const exists = flutterWidgets.some(w => w.id === hash);
    return exists ? hash : null;
  });

  // Search and Category filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  // Track completed widgets in localStorage
  const [learnedWidgets, setLearnedWidgets] = useState(() => {
    try {
      const saved = localStorage.getItem('flutter_learned_widgets');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Apply dark mode theme class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Sync learned widgets to localStorage
  useEffect(() => {
    localStorage.setItem('flutter_learned_widgets', JSON.stringify(learnedWidgets));
  }, [learnedWidgets]);

  // Handle URL hashes for forward/backward browser navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const exists = flutterWidgets.some(w => w.id === hash);
      if (exists) {
        setActiveWidgetId(hash);
      } else if (!hash) {
        setActiveWidgetId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleWidgetSelect = (id) => {
    setActiveWidgetId(id);
    window.location.hash = id;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackHome = () => {
    setActiveWidgetId(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleLearnedStatus = (id) => {
    setLearnedWidgets((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  // Find active widget object
  const activeWidget = flutterWidgets.find((w) => w.id === activeWidgetId);

  // Setup Step-by-Step navigation functions
  const activeIndex = flutterWidgets.findIndex((w) => w.id === activeWidgetId);
  const onPrev = activeIndex > 0 ? () => handleWidgetSelect(flutterWidgets[activeIndex - 1].id) : null;
  const onNext = activeIndex < flutterWidgets.length - 1 ? () => handleWidgetSelect(flutterWidgets[activeIndex + 1].id) : null;

  // Filter widgets for the home grid
  const filteredWidgets = flutterWidgets.filter((widget) => {
    const matchesSearch = 
      widget.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      widget.arabicName.includes(searchQuery) ||
      widget.shortDescription.includes(searchQuery);
    
    const matchesCategory = selectedCategory === 'الكل' || widget.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const categories = ['الكل', 'الهيكل والترتيب', 'العناصر الأساسية', 'التصميم والتنسيق'];

  return (
    <>
      <Navbar 
        completedCount={learnedWidgets.length} 
        totalCount={flutterWidgets.length} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode}
        activeWidget={activeWidget}
        onBackHome={handleBackHome}
      />

      <main className="main-content">
        {activeWidget ? (
          <WidgetDetail
            widget={activeWidget}
            isLearned={learnedWidgets.includes(activeWidget.id)}
            onToggleLearned={() => toggleLearnedStatus(activeWidget.id)}
            onBack={handleBackHome}
            onPrev={onPrev}
            onNext={onNext}
          />
        ) : (
          <>
            {/* Hero / Introduction */}
            <div className="hero-section">
              <h2 className="hero-title">تعلّم تطوير تطبيقات الموبايل بـ Flutter</h2>
              <p className="hero-desc">
                اكتشف عناصر Flutter البرمجية الأساسية (Widgets) بطريقة تفاعلية وممتعة. شرح كامل باللغة العربية، أمثلة كود حقيقية، محاكاة حية فورية وملاحظات عملية لتجنب الأخطاء البرمجية.
              </p>
            </div>

            {/* Filter Dashboard */}
            <div className="filter-search-bar">
              <div className="search-input-wrapper">
                <svg className="search-icon" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <input
                  type="text"
                  className="search-input"
                  placeholder="ابحث عن ويدجت (مثال: Scaffold)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="filter-categories">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="widgets-grid">
              {filteredWidgets.length > 0 ? (
                filteredWidgets.map((widget) => (
                  <WidgetCard
                    key={widget.id}
                    widget={widget}
                    isLearned={learnedWidgets.includes(widget.id)}
                    onClick={() => handleWidgetSelect(widget.id)}
                  />
                ))
              ) : (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <h3>لم نعثر على أي ويدجت يطابق بحثك</h3>
                  <p>تأكد من كتابة الاسم بشكل صحيح أو جرب فئات أخرى.</p>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="footer-main">
        <p className="footer-text">
          منصة فلاتر بالعربية © 2026. صُنعت بكل حب لتمكين المبرمجين العرب.
        </p>
      </footer>
    </>
  );
}
