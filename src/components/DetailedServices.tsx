import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Lightbulb, Leaf, Settings, BarChart } from 'lucide-react';

const DetailedServices = () => {
  const { t } = useLanguage();

  const services = [
    {
      key: 'innovative',
      icon: <Lightbulb className="w-6 h-6" />,
      image: 'https://res.cloudinary.com/das743qa2/image/upload/w_600/q_auto/realizacje/lqtdd315nwqa8mnweemk.jpg'
    },
    {
      key: 'ecological',
      icon: <Leaf className="w-6 h-6" />,
      image: 'https://res.cloudinary.com/das743qa2/image/upload/w_600/q_auto/content/ybcskunlbkkmknuialt9'
    },
    {
      key: 'modernization',
      icon: <Settings className="w-6 h-6" />,
      image: 'https://res.cloudinary.com/das743qa2/image/upload/w_600/q_auto/content/mnlvtzaw7yhq5gcm2jzq'
    },
    {
      key: 'logistics',
      icon: <BarChart className="w-6 h-6" />,
      image: 'https://res.cloudinary.com/das743qa2/image/upload/w_600/q_auto/content/jkfh2jf2edj3d3fuqpjw'
    }
  ];

  return (
    <section id="szczegolowa-oferta" className="py-20 relative overflow-hidden bg-gray-50">
      {/* Background Pattern with gradient overlay */}
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
            {t('detailedServices.title')}
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.key}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={t(`detailedServices.items.${service.key}.title`)}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {t(`detailedServices.items.${service.key}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`detailedServices.items.${service.key}.description`)}
                </p>
              </div>

              <div className="px-8 pb-8">
                <div className="w-full h-1 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;