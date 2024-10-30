import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Wrench, Hammer, Lightbulb, Factory, Leaf, Settings } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Wrench className="h-6 w-6" />,
      title: t('services.items.plumbing'),
    },
    {
      icon: <Hammer className="h-6 w-6" />,
      title: t('services.items.sanitary'),
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: t('services.items.heating'),
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: t('services.items.ventilation'),
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: t('services.items.ecological'),
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: t('services.items.technological'),
    }
  ];

  return (
    <section id="oferta" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-grid-slate-100"
          style={{ 
            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42 / 0.04)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")',
            maskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)'
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
            {t('services.title')}
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-start space-x-4 p-6 rounded-xl bg-white hover:bg-blue-50 transition-colors duration-300"
            >
              <div className="p-3 rounded-lg bg-blue-600 text-white">
                {service.icon}
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;