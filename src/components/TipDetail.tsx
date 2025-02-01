import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { socialTips, Tip } from './SocialHandbook';
import '../styles/TipDetail.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const TipDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const tip = socialTips.find(t => t.id === id);
  const { isDarkMode } = useTheme();

  if (!tip) {
    return <div>Tip not found</div>;
  }

  return (
    <div className={`tip-detail-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <ThemeToggle />
      <div className="sunflower-decoration left"></div>
      <div className="sunflower-decoration right"></div>
      <div className="tip-detail-content">
        <Link to="/" className="back-button">← Back to Handbook</Link>
        <h1>{tip.title}</h1>
        
        <div className="tip-detail-tags">
          {tip.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="tip-section overview-section">
          <p>{tip.description}</p>
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
            <h2>Watch and Learn</h2>
            <div className="video-container">
              <iframe
                src={tip.videoUrl}
                title={`Video about ${tip.title}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="tip-section">
          <h2>Detailed Guide</h2>
          <div className="full-content">
            {tip.fullContent.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="tip-section">
          <h2>Key Points</h2>
          <ul className="key-points">
            {tip.keyPoints.map((point, index) => (
              <li key={index} className="key-point-item">{point}</li>
            ))}
          </ul>
        </div>

        {tip.codeExample && (
          <div className="tip-section code-section">
            <h2>Code Example</h2>
            <SyntaxHighlighter 
              language={tip.codeExample.language} 
              style={tomorrow}
              showLineNumbers
            >
              {tip.codeExample.code}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
    </div>
  );
};

export default TipDetail; 