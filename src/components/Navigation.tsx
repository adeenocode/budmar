import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Building2, Hammer, Wrench } from 'lucide-react';

const Navigation = () => {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navItems = [
    { key: 'home', href: '#' },
    { key: 'about', href: '#wspolprace' },
    { key: 'services', href: '#szczegolowa-oferta' },
    { key: 'projects', href: '#nasze-realizacje' },
    { key: 'contact', href: '#kontakt' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    closeMenu();

    // If it's the home link, scroll to top with animation
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    // For other links, find the element and scroll to it
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-lg fixed w-full z-50 transition-all duration-300">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="relative">
                {/* Main building icon */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2.5 rounded-xl shadow-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                {/* Decorative tools */}
                <div className="absolute -top-1 -right-1 bg-yellow-500 p-1.5 rounded-full shadow-lg">
                  <Wrench className="h-3 w-3 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-blue-800 p-1.5 rounded-full shadow-lg">
                  <Hammer className="h-3 w-3 text-white" />
                </div>
              </div>
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-blue-600">BUD</span>
                <span className="text-gray-800">MAR</span>
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                {t(`navigation.${item.key}`)}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 top-[73px] bg-white/90 backdrop-blur-md transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-medium text-lg"
              >
                {t(`navigation.${item.key}`)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;