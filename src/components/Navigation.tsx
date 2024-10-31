import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

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
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 511 522" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <mask id="mask0_164_32" style={{maskType:'luminance'}} maskUnits="userSpaceOnUse" x="38" y="2" width="436" height="518">
                    <path d="M441.107 260.702C506.662 344.34 469.609 519.401 332.516 519.401H38V410.437H313.468C365.682 410.437 369.128 318.234 313.468 318.234H38V203.17H313.468C368.606 203.17 366.348 110.967 313.468 110.967H38V2.00022H332.516C445.705 2.00022 495.06 124.754 465.676 216.189C460.217 233.185 452.02 248.02 441.107 260.702Z" fill="white"/>
                  </mask>
                  <g mask="url(#mask0_164_32)">
                    <path d="M332.516 519.401H38V410.437H139.793C180.594 419.461 218.217 432.216 255.032 444.971C308.711 463.572 360.693 482.169 418.389 489.204C396.409 507.824 367.771 519.401 332.516 519.401Z" fill="#355EAF"/>
                    <path d="M442.713 462.121C385.456 455.607 336.681 444.26 291.496 432.913C259.348 424.841 229.012 416.769 198.707 410.436H313.468C365.682 410.436 369.128 318.234 313.468 318.234H38V276.967C92.0353 282.002 144.66 290.915 198.399 299.829C254.471 309.128 311.74 318.429 373.077 323.325C403.453 331.604 435.987 338.642 471.81 343.138C475.587 384.504 465.849 428.453 442.713 462.121Z" fill="#3277C5"/>
                    <path d="M418.392 489.204C360.695 482.169 308.714 463.572 255.035 444.971C218.219 432.216 180.597 419.461 139.795 410.437H198.71C229.014 416.769 259.35 424.841 291.499 432.913C336.684 444.26 385.458 455.607 442.715 462.121C435.802 472.179 427.693 481.322 418.392 489.204Z" fill="#25489E"/>
                    <path d="M459.237 326.858C429.504 326.858 400.877 325.543 373.077 323.325C344.11 315.426 317.112 306.399 291.148 297.372C217.719 271.847 152.505 246.325 73.8917 246.325C62.2453 246.325 50.3037 246.886 38 248.091V203.169H171.998C197.611 210.502 222.201 218.9 246.439 227.297C312.429 250.162 375.845 273.023 450.47 274.403C459.786 290.071 466.152 307.974 469.586 326.804C466.118 326.841 462.676 326.858 459.237 326.858Z" fill="#3B96D9"/>
                    <path d="M373.077 323.325C311.74 318.429 254.472 309.127 198.399 299.829C144.66 290.915 92.0353 282.002 38 276.967V248.09C50.3037 246.886 62.2453 246.325 73.8917 246.325C152.505 246.325 217.719 271.847 291.148 297.372C317.112 306.399 344.11 315.426 373.077 323.325Z" fill="#2163B7"/>
                    <path d="M458.064 235.043C444.484 233.372 428.425 231.199 410.318 228.405C327.079 215.565 258.903 207.609 203.022 203.169H313.468C368.606 203.169 366.348 110.967 313.468 110.967H38V45.4845C104.405 49.3774 167.95 60.1891 233.129 70.9979C248.32 73.5195 263.603 76.0383 279.027 78.4721C280.2 78.8801 281.379 79.2909 282.555 79.6989C337.616 98.8404 397.302 117.982 470.68 126.36C476.338 156.239 474.822 187.734 465.676 216.188C463.554 222.801 461.016 229.085 458.064 235.043Z" fill="#51ADE5"/>
                    <path d="M450.474 274.404C375.849 273.024 312.432 250.162 246.443 227.298C222.204 218.9 197.615 210.503 172.002 203.17H203.026C258.906 207.61 327.083 215.566 410.321 228.406C428.429 231.199 444.487 233.373 458.067 235.044C453.432 244.402 447.78 252.953 441.11 260.702C444.507 265.034 447.63 269.616 450.474 274.404Z" fill="#1E81CD"/>
                    <path d="M462.778 97.5542C397.423 95.5709 337.208 87.6434 279.027 78.4722C207.026 53.361 142.654 28.6522 65.2987 28.6522C56.3861 28.6522 47.2888 28.9809 38 29.675V1.99981H332.516C398.885 1.99981 443.308 44.204 462.778 97.5542Z" fill="#77B7E7"/>
                    <path d="M279.027 78.4717C263.603 76.0379 248.32 73.5191 233.129 70.9975C167.95 60.1886 104.405 49.377 38 45.4841V29.6745C47.2888 28.9804 56.3861 28.6517 65.2987 28.6517C142.654 28.6517 207.026 53.3605 279.027 78.4717Z" fill="#2D91D7"/>
                  </g>
                </svg>
              </div>
              <div className="text-2xl font-black tracking-tight font-geologica">
                <span className="text-logo-blue">BUD</span>
                <span className="text-logo-blue-dark">MAR</span>
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