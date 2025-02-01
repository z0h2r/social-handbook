import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/LanguageToggle.css';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button 
      className="language-toggle" 
      onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
      aria-label="Toggle language"
    >
      {language === 'en' ? '🇺🇸' : '🇮🇱'}
    </button>
  );
};

export default LanguageToggle; 