import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SocialHandbook.css';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export interface TipContent {
  title: string;
  description: string;
  fullContent: string;
  keyPoints: string[];
  codeExample?: {
    code: string;
    language: string;
  };
}

export interface Tip {
  id: string;
  content: {
    en: TipContent;
    he: TipContent;
  };
  videoUrl?: string;
  tags: string[];
  image?: {
    url: string;
    alt: string;
  };
}

const socialTips: Tip[] = [
  {
    id: "active-listening",
    content: {
      en: {
        title: "Active Listening",
        description: "Focus on what others are saying without planning your response. Make eye contact and provide verbal/non-verbal feedback.",
        fullContent: `Active listening is more than just hearing words - it's about fully engaging with the speaker and showing genuine interest. When you practice active listening, you create deeper connections and better understanding.
        
        Active listening involves several key components:
        - Maintaining appropriate eye contact
        - Using encouraging verbal cues like "I see" or "Go on"
        - Nodding and using facial expressions to show engagement
        - Asking relevant follow-up questions
        - Paraphrasing to confirm understanding`,
        keyPoints: [
          "Focus entirely on the speaker",
          "Avoid interrupting",
          "Use both verbal and non-verbal feedback",
          "Ask clarifying questions",
          "Show empathy and understanding"
        ]
      },
      he: {
        title: "הקשבה פעילה",
        description: "להתמקד במה שאחרים אומרים מבלי לתכנן את התגובה. ליצור קשר עין ולתת משוב מילולי ולא מילולי.",
        fullContent: `הקשבה פעילה היא יותר מאשר שמיעת מילים - זה עניין של מעורבות מלאה עם הדובר והפגנת עניין אמיתי. כאשר אתה מתרגל הקשבה פעילה, אתה יוצר קשרים עמוקים יותר והבנה טובה יותר.

        הקשבה פעילה כוללת מספר מרכיבים מרכזיים:
        - שמירה על קשר עין מתאים
        - שימוש ברמזים מילוליים מעודדים כמו "אני מבין" או "המשך"
        - הנהון ושימוש בהבעות פנים להראות מעורבות
        - שאילת שאלות המשך רלוונטיות
        - חזרה על הדברים כדי לוודא הבנה`,
        keyPoints: [
          "להתמקד לחלוטין בדובר",
          "להימנע מהפרעות",
          "להשתמש במשוב מילולי ולא מילולי",
          "לשאול שאלות הבהרה",
          "להפגין אמפתיה והבנה"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/3_dAkDsBQyk",
    tags: ["communication", "basics", "interpersonal"]
  },
  {
    id: "body-language",
    content: {
      en: {
        title: "Body Language",
        description: "Maintain open posture, smile naturally, and mirror others' positive body language to build rapport.",
        fullContent: `Your body language speaks volumes before you even say a word. Understanding and mastering body language can significantly improve your social interactions.
        
        Key aspects of positive body language include:
        - Maintaining an open posture
        - Using appropriate eye contact
        - Genuine smiling
        - Mirroring others naturally
        - Being mindful of personal space`,
        keyPoints: [
          "Keep your posture open and welcoming",
          "Smile genuinely when appropriate",
          "Maintain comfortable eye contact",
          "Mirror others' positive body language",
          "Be aware of cultural differences"
        ]
      },
      he: {
        title: "שפת גוף",
        description: "לשמור על תנוחה פתוחה, לחייך באופן טבעי, ולשקף את שפת הגוף החיובית של אחרים.",
        fullContent: `שפת הגוף שלך מדברת המון עוד לפני שאתה אומר מילה. הבנה ושליטה בשפת גוף יכולה לשפר משמעותית את האינטראקציות החברתיות שלך.

        היבטים מרכזיים של שפת גוף חיובית כוללים:
        - שמירה על תנוחה פתוחה
        - שימוש בקשר עין מתאים
        - חיוך אמיתי
        - שיקוף טבעי של אחרים
        - מודעות למרחב האישי`,
        keyPoints: [
          "לשמור על תנוחה פתוחה ומזמינה",
          "לחייך באופן אמיתי כשמתאים",
          "לשמור על קשר עין נוח",
          "לשקף שפת גוף חיובית של אחרים",
          "להיות מודע להבדלים תרבותיים"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/Ks-_Mh1QhMc",
    tags: ["nonverbal", "basics", "physical"]
  },
  {
    id: "asking-questions",
    content: {
      en: {
        title: "Asking Questions",
        description: "Show genuine interest by asking open-ended questions. Follow up on their answers to deepen conversations.",
        fullContent: `The art of asking good questions is fundamental to building meaningful conversations and relationships. Open-ended questions encourage deeper sharing and show genuine interest.
        
        Effective questioning techniques include:
        - Using what, how, and why questions
        - Following up on answers
        - Showing genuine curiosity
        - Avoiding interrogation-style questioning
        - Being mindful of timing and context`,
        keyPoints: [
          "Use open-ended questions",
          "Show genuine curiosity",
          "Follow up thoughtfully",
          "Listen actively to answers",
          "Avoid rapid-fire questioning"
        ]
      },
      he: {
        title: "Asking Questions",
        description: "Show genuine interest by asking open-ended questions. Follow up on their answers to deepen conversations.",
        fullContent: `The art of asking good questions is fundamental to building meaningful conversations and relationships. Open-ended questions encourage deeper sharing and show genuine interest.
        
        Effective questioning techniques include:
        - Using what, how, and why questions
        - Following up on answers
        - Showing genuine curiosity
        - Avoiding interrogation-style questioning
        - Being mindful of timing and context`,
        keyPoints: [
          "Use open-ended questions",
          "Show genuine curiosity",
          "Follow up thoughtfully",
          "Listen actively to answers",
          "Avoid rapid-fire questioning"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/YVDw1mHwFSw",
    tags: ["communication", "basics", "interpersonal"]
  },
  {
    id: "empathy",
    content: {
      en: {
        title: "Empathy",
        description: "Try to understand others' perspectives and feelings. Validate their emotions even if you disagree.",
        fullContent: `Empathy is the ability to understand and share the feelings of others. It's a crucial skill for building strong relationships and navigating social situations successfully.
        
        Developing empathy involves:
        - Putting yourself in others' shoes
        - Validating emotions
        - Listening without judgment
        - Showing understanding
        - Responding with compassion`,
        keyPoints: [
          "Practice perspective-taking",
          "Validate others' emotions",
          "Listen without judgment",
          "Show genuine understanding",
          "Respond with compassion"
        ]
      },
      he: {
        title: "Empathy",
        description: "Try to understand others' perspectives and feelings. Validate their emotions even if you disagree.",
        fullContent: `Empathy is the ability to understand and share the feelings of others. It's a crucial skill for building strong relationships and navigating social situations successfully.
        
        Developing empathy involves:
        - Putting yourself in others' shoes
        - Validating emotions
        - Listening without judgment
        - Showing understanding
        - Responding with compassion`,
        keyPoints: [
          "Practice perspective-taking",
          "Validate others' emotions",
          "Listen without judgment",
          "Show genuine understanding",
          "Respond with compassion"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/1Evwgu369Jw",
    tags: ["interpersonal", "empathy"]
  },
  {
    id: "remember-names",
    content: {
      en: {
        title: "Remember Names",
        description: "Use people's names in conversation and associate them with memorable characteristics.",
        fullContent: `Remembering and using people's names is a powerful way to build rapport and show respect. It makes others feel valued and creates a more personal connection.
        
        Techniques for remembering names:
        - Repeat the name immediately
        - Create visual associations
        - Use the name naturally in conversation
        - Write it down if possible
        - Ask for clarification if needed`,
        keyPoints: [
          "Repeat names when introduced",
          "Create memorable associations",
          "Use names in conversation",
          "Practice active recall",
          "Don't be afraid to ask again"
        ]
      },
      he: {
        title: "Remember Names",
        description: "Use people's names in conversation and associate them with memorable characteristics.",
        fullContent: `Remembering and using people's names is a powerful way to build rapport and show respect. It makes others feel valued and creates a more personal connection.
        
        Techniques for remembering names:
        - Repeat the name immediately
        - Create visual associations
        - Use the name naturally in conversation
        - Write it down if possible
        - Ask for clarification if needed`,
        keyPoints: [
          "Repeat names when introduced",
          "Create memorable associations",
          "Use names in conversation",
          "Practice active recall",
          "Don't be afraid to ask again"
        ]
      }
    },
    tags: ["communication", "basics", "interpersonal"]
  },
  {
    id: "practice-gratitude",
    content: {
      en: {
        title: "Practice Gratitude",
        description: "Regularly express appreciation for others' help, presence, or impact on your life.",
        fullContent: `Expressing gratitude is not just good for your well-being; it's essential for building and maintaining strong relationships. Genuine appreciation helps create positive social connections.
        
        Ways to practice gratitude:
        - Express thanks specifically
        - Write thank-you notes
        - Acknowledge others' efforts
        - Show appreciation regularly
        - Be sincere in your expression`,
        keyPoints: [
          "Be specific in your thanks",
          "Express appreciation regularly",
          "Show genuine gratitude",
          "Acknowledge others' impact",
          "Follow up on kind actions"
        ]
      },
      he: {
        title: "Practice Gratitude",
        description: "Regularly express appreciation for others' help, presence, or impact on your life.",
        fullContent: `Expressing gratitude is not just good for your well-being; it's essential for building and maintaining strong relationships. Genuine appreciation helps create positive social connections.
        
        Ways to practice gratitude:
        - Express thanks specifically
        - Write thank-you notes
        - Acknowledge others' efforts
        - Show appreciation regularly
        - Be sincere in your expression`,
        keyPoints: [
          "Be specific in your thanks",
          "Express appreciation regularly",
          "Show genuine gratitude",
          "Acknowledge others' impact",
          "Follow up on kind actions"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/WPPPFqsECz0",
    tags: ["interpersonal", "gratitude"]
  },
  {
    id: "active-listening-he",
    content: {
      en: {
        title: "Active Listening",
        description: "Focus on what others are saying without planning your response. Make eye contact and provide verbal/non-verbal feedback.",
        fullContent: `Active listening is more than just hearing words - it's about fully engaging with the speaker and showing genuine interest. When you practice active listening, you create deeper connections and better understanding.
        
        Active listening involves several key components:
        - Maintaining appropriate eye contact
        - Using encouraging verbal cues like "I see" or "Go on"
        - Nodding and using facial expressions to show engagement
        - Asking relevant follow-up questions
        - Paraphrasing to confirm understanding`,
        keyPoints: [
          "Focus entirely on the speaker",
          "Avoid interrupting",
          "Use both verbal and non-verbal feedback",
          "Ask clarifying questions",
          "Show empathy and understanding"
        ]
      },
      he: {
        title: "הקשבה פעילה",
        description: "להתמקד במה שאחרים אומרים מבלי לתכנן את התגובה. ליצור קשר עין ולתת משוב מילולי ולא מילולי.",
        fullContent: `הקשבה פעילה היא יותר מאשר שמיעת מילים - זה עניין של מעורבות מלאה עם הדובר והפגנת עניין אמיתי. כאשר אתה מתרגל הקשבה פעילה, אתה יוצר קשרים עמוקים יותר והבנה טובה יותר.

        הקשבה פעילה כוללת מספר מרכיבים מרכזיים:
        - שמירה על קשר עין מתאים
        - שימוש ברמזים מילוליים מעודדים כמו "אני מבין" או "המשך"
        - הנהון ושימוש בהבעות פנים להראות מעורבות
        - שאילת שאלות המשך רלוונטיות
        - חזרה על הדברים כדי לוודא הבנה`,
        keyPoints: [
          "להתמקד לחלוטין בדובר",
          "להימנע מהפרעות",
          "להשתמש במשוב מילולי ולא מילולי",
          "לשאול שאלות הבהרה",
          "להפגין אמפתיה והבנה"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/3_dAkDsBQyk",
    tags: ["communication", "basics", "interpersonal"]
  },
  {
    id: "body-language-he",
    content: {
      en: {
        title: "Body Language",
        description: "Maintain open posture, smile naturally, and mirror others' positive body language to build rapport.",
        fullContent: `Your body language speaks volumes before you even say a word. Understanding and mastering body language can significantly improve your social interactions.
        
        Key aspects of positive body language include:
        - Maintaining an open posture
        - Using appropriate eye contact
        - Genuine smiling
        - Mirroring others naturally
        - Being mindful of personal space`,
        keyPoints: [
          "Keep your posture open and welcoming",
          "Smile genuinely when appropriate",
          "Maintain comfortable eye contact",
          "Mirror others' positive body language",
          "Be aware of cultural differences"
        ]
      },
      he: {
        title: "שפת גוף",
        description: "לשמור על תנוחה פתוחה, לחייך באופן טבעי, ולשקף את שפת הגוף החיובית של אחרים.",
        fullContent: `שפת הגוף שלך מדברת המון עוד לפני שאתה אומר מילה. הבנה ושליטה בשפת גוף יכולה לשפר משמעותית את האינטראקציות החברתיות שלך.

        היבטים מרכזיים של שפת גוף חיובית כוללים:
        - שמירה על תנוחה פתוחה
        - שימוש בקשר עין מתאים
        - חיוך אמיתי
        - שיקוף טבעי של אחרים
        - מודעות למרחב האישי`,
        keyPoints: [
          "לשמור על תנוחה פתוחה ומזמינה",
          "לחייך באופן אמיתי כשמתאים",
          "לשמור על קשר עין נוח",
          "לשקף שפת גוף חיובית של אחרים",
          "להיות מודע להבדלים תרבותיים"
        ]
      }
    },
    videoUrl: "https://www.youtube.com/embed/Ks-_Mh1QhMc",
    tags: ["nonverbal", "basics", "physical"]
  },
  {
    id: "coding-example",
    content: {
      en: {
        title: "Code Example",
        description: "Example of a tip with code",
        fullContent: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`,
        keyPoints: [
          "Repeat names when introduced",
          "Create memorable associations",
          "Use names in conversation",
          "Practice active recall",
          "Don't be afraid to ask again"
        ],
        codeExample: {
          code: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`,
          language: "javascript"
        }
      },
      he: {
        title: "Code Example",
        description: "Example of a tip with code",
        fullContent: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`,
        keyPoints: [
          "Repeat names when introduced",
          "Create memorable associations",
          "Use names in conversation",
          "Practice active recall",
          "Don't be afraid to ask again"
        ],
        codeExample: {
          code: `function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`,
          language: "javascript"
        }
      }
    },
    tags: ["coding", "basics"]
  }
];

const positiveMessages = {
  en: [
    "Every small step matters! 🌱",
    "You're doing great! ✨",
    "Growth happens one day at a time 🌻",
    "Believe in yourself! 💫",
    "Today is full of possibilities 🌈",
    "Keep growing, keep glowing! ⭐",
    "You've got this! 💪",
    "Small progress is still progress 🌺",
    "Your effort matters! 🌟",
    "Each day is a new opportunity 🍀"
  ],
  he: [
    "כל צעד קטן חשוב! 🌱",
    "אתה עושה עבודה נהדרת! ✨",
    "צמיחה קורית יום אחר יום 🌻",
    "תאמין בעצמך! 💫",
    "היום מלא באפשרויות 🌈",
    "תמשיך לצמוח, תמשיך לזהור! ⭐",
    "אתה יכול לעשות את זה! 💪",
    "גם התקדמות קטנה היא התקדמות 🌺",
    "המאמץ שלך חשוב! 🌟",
    "כל יום הוא הזדמנות חדשה 🍀"
  ]
};

const SocialHandbook: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { language } = useLanguage();
  const [selectedTag, setSelectedTag] = React.useState<string | null>(null);
  const [bannerMessage, setBannerMessage] = React.useState('');
  const allTags = Array.from(new Set(socialTips.flatMap(tip => tip.tags)));

  React.useEffect(() => {
    setBannerMessage(
      positiveMessages[language][Math.floor(Math.random() * positiveMessages[language].length)]
    );
  }, [language]);

  const filteredTips = selectedTag
    ? socialTips.filter(tip => tip.tags.includes(selectedTag))
    : socialTips;

  return (
    <div className={`handbook-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="content">
        <div className="toggle-container">
          <ThemeToggle />
          <LanguageToggle />
        </div>
        <h1>{language === 'en' ? 'Social Skills Handbook' : 'מדריך כישורים חברתיים'}</h1>
        <p className="subtitle">
          {language === 'en' 
            ? 'Your guide to better social interactions'
            : 'המדריך שלך לאינטראקציות חברתיות טובות יותר'
          }
        </p>
        
        <div className="tags-container">
          {allTags.map((tag) => (
            <span 
              key={tag} 
              className={`tag ${selectedTag === tag ? 'tag-selected' : ''}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
            >
              {tag}
              {selectedTag === tag && <span className="tag-clear">×</span>}
            </span>
          ))}
        </div>
        
        <div className="tips-container">
          {filteredTips.map((tip) => (
            <Link to={`/tip/${tip.id}`} key={tip.id} className="tip-card">
              <div className="tip-card-content" dir={language === 'he' ? 'rtl' : 'ltr'}>
                <h3>{tip.content[language].title}</h3>
                <p>{tip.content[language].description}</p>
                <div className="tip-tags">
                  {tip.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="read-more">{language === 'he' ? '← קרא עוד' : 'Read More →'}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialHandbook;
export { socialTips }; 