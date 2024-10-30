import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { X } from 'lucide-react';

const CookieConsent = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const messages = {
    de: {
      text: 'Diese Website verwendet Cookies, um Ihr Browsing-Erlebnis zu verbessern.',
      accept: 'Akzeptieren'
    },
    en: {
      text: 'This website uses cookies to enhance your browsing experience.',
      accept: 'Accept'
    },
    es: {
      text: 'Este sitio web utiliza cookies para mejorar su experiencia de navegación.',
      accept: 'Aceptar'
    },
    pl: {
      text: 'Ta strona używa plików cookie, aby ulepszyć Twoje doświadczenie.',
      accept: 'Akceptuj'
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 p-4 z-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-center sm:text-left">
            {messages[language].text}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={handleAccept}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
            >
              {messages[language].accept}
            </button>
            <button
              onClick={handleAccept}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
              aria-label="Close"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;