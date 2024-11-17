import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const projectImages = [
  'lfbd257dqucchfribrhq', 'bolvm5mql1hpv5yjlpko', 'mqofaqds7ugfzjj7twmh', 
  'mzpzbuzghaocotcjjyen', 'zg1vkaj7gd5crpznwty0', 'k5jjtatsruzqwwgcpbrc', 
  'unm49rra94qsaougopoy', 'wl09ngqwxnmzjes3kdcs', 'x7voceqglnhwu7kwuryd', 
  'qczgammq7nmorkqrxurp', 'c6kyvgoncawvttkwxz7y', 'bgfdbhrvwbgbab4x6xp8', 
  'nnlbuw3ilco7twqypilt', 'sjnyfjspjoumaufglagc', 'lygykids7fxldhx0mzmy', 
  'cvhhbvamhqcd6s5nbm29', 'kyrfmybcl7nwphgyoqae', 'wbxh8co5pkyyqpo1tmwc', 
  'rpcbowmzxwyutmd8polv', 'fpve4xpllud3rbxreqo9', 'zvwfx45k5zwswp93bqxj', 
  'qpdmivbsswb1utfrhbfi', 'qjvxkobee0fir9vtcrid', 'kbgasbtho2rfr1qphixx', 
  'fky0g7jueihc0vbg8vqx', 'ri1byhr7kk81hxgjpvkl', 'cej3bisze4yqey7tku9n', 
  'kwn2khxkarudbtqh3ldn', 'fh3cfjax1db9atjqv55u', 'lqtdd315nwqa8mnweemk', 
  'dkraffjnvgl2vvgbltpb', 'jslbnddbsiwb1fmthwop', 'f46yllabpxx9xggbisjj', 
  'pxg4136eaf4lmjg6mqmm', 'tfvsbi5lkk5vo81n9bgt', 
  'heocwdxkay4wyiphtmhm', 'yr4ewcqj4wbyfzbssr8k', 'ur2dyhybze03cmfsob7c', 
  'kvoy2zpguiz8ljnjauxc', 'evyrfxbrvpvwhjenjrc0', 
  'cwvyeee5meklhf0chcog', 'vdyx0jldnx9h4d05eu1h', 
  'l9hhd1ty2t547styzumr', 'a9w3shofpcdlqcew5mv9', 
  'xijcfxdpvswvo0w5gbpm', 'qcstb2lqqqn5aqynz6jt', 'fgf4xc8wudzqmbmkwd8e',
  'jbelq2gwxyvcxpbtisb1', 'n6guh5k7mcstaibwqgaz', 
  'u4bbyddym0pfogzagwh6', 'ebobxqneod90tguvq5cu', 'k4bu4vxquyawlni0ible'
].map(id => ({
  id,
  url: (width = '800') => `https://res.cloudinary.com/das743qa2/image/upload/c_scale,w_${width}/realizacje/${id}.jpg`
}));

const Projects = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setIsLoading(true);
    setCurrentSlide((prev) => (prev + 1) % projectImages.length);
  };

  const prevSlide = () => {
    setIsLoading(true);
    setCurrentSlide((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  const handleSlideChange = (index: number) => {
    if (index !== currentSlide) {
      setIsLoading(true);
      setCurrentSlide(index);
    }
  };

  const getVisibleThumbnails = () => {
    const maxVisible = windowWidth < 640 ? 5 : 9;
    const halfVisible = Math.floor(maxVisible / 2);
    let start = currentSlide - halfVisible;
    let end = currentSlide + halfVisible + 1;

    if (start < 0) {
      end = Math.min(maxVisible, projectImages.length);
      start = 0;
    } else if (end > projectImages.length) {
      start = Math.max(0, projectImages.length - maxVisible);
      end = projectImages.length;
    }

    return projectImages.slice(start, end);
  };

  return (
    <section id="nasze-realizacje" className="py-20 relative overflow-hidden bg-gray-50">
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
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
            {t('projects.title')}
          </span>
        </h2>
        
        <div className="relative">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl aspect-video relative shadow-2xl mb-8">
              <img
                src={projectImages[currentSlide].url('1920')}
                alt={`Project ${currentSlide + 1}`}
                className={`w-full h-full object-cover transition-all duration-700 ease-out ${
                  isLoading ? 'opacity-50 scale-105' : 'opacity-100 scale-100'
                }`}
                onLoad={() => setIsLoading(false)}
              />
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-white/20 backdrop-blur-sm">
                  <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
            
            <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none px-4">
              <button
                onClick={prevSlide}
                className="pointer-events-auto bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 backdrop-blur-md"
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={nextSlide}
                className="pointer-events-auto bg-white/90 hover:bg-white text-gray-800 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-20 backdrop-blur-md"
              >
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="h-24 sm:h-32">
            <div className="flex justify-center items-center gap-2 sm:gap-4 h-full">
              {getVisibleThumbnails().map((image) => (
                <button
                  key={image.id}
                  onClick={() => handleSlideChange(projectImages.findIndex(img => img.id === image.id))}
                  className={`relative rounded-lg overflow-hidden transition-all duration-300 ${
                    currentSlide === projectImages.findIndex(img => img.id === image.id)
                      ? 'ring-4 ring-blue-600 ring-offset-2 ring-offset-white' 
                      : 'ring-2 ring-gray-200 hover:ring-blue-400'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-24 sm:h-24">
                    <img
                      src={image.url('192')}
                      alt={`Project thumbnail`}
                      className={`w-full h-full object-cover transition-transform duration-300 ${
                        currentSlide === projectImages.findIndex(img => img.id === image.id) 
                          ? 'scale-110' 
                          : 'hover:scale-110'
                      }`}
                      loading="lazy"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;