import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Partners from './components/Partners';
import Stats from './components/Stats';
import Services from './components/Services';
import DetailedServices from './components/DetailedServices';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';

const App = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Partners />
      <Stats />
      <DetailedServices />
      <Services />
      <Projects />
      <Contact />
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default App;