import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { socialTips, Tip } from './SocialHandbook';
import '../styles/TipDetail.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const TipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tip = socialTips.find(t => t.id === id);
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();

  if (!tip) {
    return <div>Tip not found</div>;
  }

  const content = tip.content[language];

  return (
    <div className={`tip-detail-container ${isDarkMode ? 'dark-mode' : ''}`} dir={language === 'he' ? 'rtl' : 'ltr'}>
      <ThemeToggle />
      <LanguageToggle />
      <div className="sunflower-decoration left"></div>
      <div className="sunflower-decoration right"></div>
      <div className="tip-detail-content">
        <Link to="/" className="back-button">
          {language === 'he' ? 'חזרה למדריך ←' : '← Back to Handbook'}
        </Link>
        <h1>{content.title}</h1>
        
        <div className="tip-detail-tags">
          {tip.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="tip-section overview-section">
          <p>{content.description}</p>
        </div>

        {tip.image && (
          <div className="tip-section">
            <img 
              src={tip.image.url} 
              alt={tip.image.alt} 
              className="tip-image"
            />
            <p className="tip-image-caption">{tip.image.alt}</p>
          </div>
        )}

        {tip.videoUrl && (
          <div className="tip-section video-section">
            <h2>{language === 'he' ? 'צפה ולמד' : 'Watch and Learn'}</h2>
            <div className="video-container">
              <iframe
                src={tip.videoUrl}
                title={`Video about ${content.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="tip-section">
          <h2>{language === 'he' ? 'מדריך מפורט' : 'Detailed Guide'}</h2>
          <div className="full-content">
            {content.fullContent.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="tip-section">
          <h2>{language === 'he' ? 'נקודות מפתח' : 'Key Points'}</h2>
          <ul className="key-points">
            {content.keyPoints.map((point, index) => (
              <li key={index} className="key-point-item">{point}</li>
            ))}
          </ul>
        </div>

        {content.codeExample && (
          <div className="tip-section code-section">
            <h2>{language === 'he' ? 'דוגמת קוד' : 'Code Example'}</h2>
            <SyntaxHighlighter 
              language={content.codeExample.language} 
              style={tomorrow}
              showLineNumbers
            >
              {content.codeExample.code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipDetail; 