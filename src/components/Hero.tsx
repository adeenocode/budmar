import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 80; // Height of the fixed navigation bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="relative h-screen pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://res.cloudinary.com/das743qa2/image/upload/w_1800/q_auto/content/zsq3mzyichdh2hhacrjm")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              {t('hero.highlight')}
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#wspolprace"
              onClick={(e) => handleScroll(e, '#wspolprace')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 text-center"
            >
              {t('hero.learnMore')}
            </a>
            <a 
              href="#kontakt"
              onClick={(e) => handleScroll(e, '#kontakt')}
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 text-center"
            >
              {t('hero.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;