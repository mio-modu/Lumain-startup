import React, { useState, useRef } from 'react';
import './App.css';
import Logo from './components/Logo';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cases from './pages/Cases';
import Contact from './pages/Contact';

const sectionLabels = {
  home: { ko: '홈', en: 'Home' },
  about: { ko: '회사소개', en: 'About' },
  services: { ko: '서비스', en: 'Services' },
  cases: { ko: '사례', en: 'Cases' },
  contact: { ko: '문의하기', en: 'Contact' }
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('ko');
  const sections = useRef({});

  const handleNavClick = (section) => {
    setActiveSection(section);
    sections.current[section]?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <Logo />
            <nav className="nav-links">
              {Object.entries(sectionLabels).map(([key, labels]) => (
                <button
                  key={key}
                  className={`nav-link ${activeSection === key ? 'active' : ''}`}
                  onClick={() => handleNavClick(key)}
                >
                  {lang === 'ko' ? labels.ko : labels.en}
                </button>
              ))}
            </nav>
          </div>
          <div className="language-switch">
            <button
              className={lang === 'ko' ? 'active' : ''}
              onClick={() => setLang('ko')}
            >
              KR
            </button>
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {Object.entries(sectionLabels).map(([key]) => {
          let SectionComponent;
          if (key === 'home') SectionComponent = Home;
          else if (key === 'about') SectionComponent = About;
          else if (key === 'services') SectionComponent = Services;
          else if (key === 'cases') SectionComponent = Cases;
          else if (key === 'contact') SectionComponent = Contact;

          return (
            <section
              key={key}
              ref={(el) => (sections.current[key] = el)}
              className={`lumain-section ${activeSection === key ? 'active-section' : 'inactive-section'}`}
              style={{ display: activeSection === key ? 'flex' : 'none' }}
            >
              <SectionComponent lang={lang} />
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App; 