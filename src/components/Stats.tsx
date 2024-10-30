import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, CheckCircle2, AreaChart, Users } from 'lucide-react';

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    { 
      value: '+226', 
      label: t('stats.projects'),
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-400'
    },
    { 
      value: '34', 
      label: t('stats.experience'),
      icon: <Building2 className="w-6 h-6" />,
      color: 'from-blue-500 to-blue-300'
    },
    { 
      value: '1 564 506 m²', 
      label: t('stats.area'),
      icon: <AreaChart className="w-6 h-6" />,
      color: 'from-blue-700 to-blue-500'
    },
    { 
      value: '31', 
      label: t('stats.specialists'),
      icon: <Users className="w-6 h-6" />,
      color: 'from-blue-800 to-blue-600'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group h-full"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300 self-start`}>
                  {stat.icon}
                </div>

                <div className="flex-grow flex flex-col justify-between">
                  {/* Value - Responsive text size */}
                  <div className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl leading-tight font-bold mb-2 bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent whitespace-nowrap">
                    {stat.value}
                  </div>

                  {/* Label */}
                  <div className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
              </div>

              {/* Background blur effect on hover */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl opacity-0 group-hover:opacity-15 blur transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;