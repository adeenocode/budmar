import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const partnerLogos = [
  { name: 'DEPENBROCK', url: 'https://res.cloudinary.com/das743qa2/image/upload/f_auto,q_auto/v1/partners/ikvzkwndphpzn53kwjbc' },
  { name: 'B&O BAU', url: 'https://res.cloudinary.com/das743qa2/image/upload/f_auto,q_auto/v1/partners/w3p6w8uqbmglukhgb8zx' },
  { name: 'GOLDBECK', url: 'https://res.cloudinary.com/das743qa2/image/upload/f_auto,q_auto/v1/partners/ognp6roi89anfmpfrqnb' },
  { name: 'PANATTONI', url: 'https://res.cloudinary.com/das743qa2/image/upload/f_auto,q_auto/v1/partners/nkbthsyu3www9aliaz28' },
  { name: 'BREMER', url: 'https://res.cloudinary.com/das743qa2/image/upload/f_auto,q_auto/v1/partners/i4aoeesfayeef4nrn0hq' }
];

const Partners = () => {
  const { t } = useLanguage();

  return (
    <section id="wspolprace" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42 / 0.04)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' 
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
            {t('partners.title')}
          </span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center">
          {partnerLogos.map((partner, index) => (
            <div 
              key={partner.name} 
              className={`flex justify-center transform hover:scale-105 transition-transform duration-300 ${
                index === partnerLogos.length - 1 ? 'col-span-2 md:col-span-1' : ''
              }`}
            >
              <img 
                src={partner.url}
                alt={partner.name}
                className="h-12 object-contain rounded hover:shadow-lg transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;