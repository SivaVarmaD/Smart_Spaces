import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation resources
const resources = {
  en: {
    translation: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.solutions': 'Solutions',
      'nav.caseStudies': 'Case Studies',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.requestDemo': 'Request Demo',
      'hero.title': 'Connected Homes, Smarter Living',
      'hero.subtitle': 'Transform your home with AI-powered automation solutions. Smart Lighting, Advanced Security, and Complete Home Integration.',
      'footer.company': 'SmartLife Solutions Pvt. Ltd.',
      'footer.address': 'Hyderabad, Telangana, India',
      'footer.tagline': 'Transforming homes into intelligent living spaces.',
    }
  },
  te: {
    translation: {
      'nav.home': 'హోమ్',
      'nav.about': 'మా గురించి',
      'nav.solutions': 'పరిష్కారాలు',
      'nav.caseStudies': 'కేస్ స్టడీస్',
      'nav.blog': 'బ్లాగ్',
      'nav.contact': 'సంప్రదించండి',
      'nav.requestDemo': 'డెమో అభ్యర్థించండి',
      'hero.title': 'కనెక్టెడ్ హోమ్స్, స్మార్ట్ లివింగ్',
      'hero.subtitle': 'AI-శక్తితో కూడిన ఆటోమేషన్ సొల్యూషన్లతో మీ ఇంటిని మార్చండి. స్మార్ట్ లైటింగ్, అధునాతన భద్రత మరియు పూర్తి హోమ్ ఇంటిగ్రేషన్.',
      'footer.company': 'స్మార్ట్‌లైఫ్ సొల్యూషన్స్ ప్రైవేట్ లిమిటెడ్',
      'footer.address': 'హైదరాబాద్, తెలంగాణ, భారతదేశం',
      'footer.tagline': 'ఇళ్లను తెలివైన జీవన ప్రదేశాలుగా మార్చడం.',
    }
  },
  hi: {
    translation: {
      'nav.home': 'होम',
      'nav.about': 'हमारे बारे में',
      'nav.solutions': 'समाधान',
      'nav.caseStudies': 'केस स्टडीज',
      'nav.blog': 'ब्लॉग',
      'nav.contact': 'संपर्क करें',
      'nav.requestDemo': 'डेमो का अनुरोध करें',
      'hero.title': 'कनेक्टेड होम्स, स्मार्ट लिविंग',
      'hero.subtitle': 'AI-संचालित ऑटोमेशन समाधानों के साथ अपने घर को बदलें। स्मार्ट लाइटिंग, उन्नत सुरक्षा, और पूर्ण होम इंटीग्रेशन।',
      'footer.company': 'स्मार्टलाइफ सॉल्यूशंस प्राइवेट लिमिटेड',
      'footer.address': 'हैदराबाद, तेलंगाना, भारत',
      'footer.tagline': 'घरों को बुद्धिमान रहने की जगह में बदलना।',
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;