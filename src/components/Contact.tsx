import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mail, Phone, Building2, Loader2, Send } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const values = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'c5dc2c89-9f7f-41ce-bc48-bba73dac1ee3',
          ...values,
          from_name: `${values.firstName} ${values.lastName}`,
          subject: 'Nowa wiadomość z formularza na stronie BUD-MAR'
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Network response was not ok');
      }
      
      if (data.success) {
        setSuccess(true);
        setError(false);
        formRef.current?.reset();
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      setSuccess(false);
      setError(true);
      setErrorMessage(err instanceof Error ? err.message : 'An unexpected error occurred');
      console.error('Form submission error:', {
        message: err instanceof Error ? err.message : 'Unknown error',
        error: err
      });
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" aria-hidden="true" />,
      title: 'Email',
      content: 'kontakt@bud-mar.de',
      href: 'mailto:kontakt@bud-mar.de'
    },
    {
      icon: <Phone className="h-5 w-5" aria-hidden="true" />,
      title: t('contact.phone'),
      content: '+48 504 060 266',
      href: 'tel:+48504060266'
    },
    {
      icon: <Building2 className="h-5 w-5" aria-hidden="true" />,
      title: t('contact.office'),
      content: <>
        BUD-MAR BIS Marek Kuligowski<br />
        03-111 Warszawa, ul. Gladioli 17<br />
        NIP: 774-174-108<br />
        REGON: 610420195
      </>
    }
  ];

  return (
    <section id="kontakt" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 32 32\' width=\'32\' height=\'32\' fill=\'none\' stroke=\'rgb(15 23 42 / 0.04)\'%3E%3Cpath d=\'M0 .5H31.5V32\'/%3E%3C/svg%3E")' }} 
          aria-hidden="true"
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <h2 className="text-3xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-transparent bg-clip-text">
            {t('contact.title')}
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {success && !error && (
                <div className="p-4 rounded-xl bg-green-50 text-green-800 border border-green-200" role="alert">
                  {t('contact.form.success')}
                </div>
              )}

              {error && !success && (
                <div className="p-4 rounded-xl bg-red-50 text-red-800 border border-red-200" role="alert">
                  {errorMessage || t('contact.form.error')}
                </div>
              )}
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.firstName')}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contact.form.lastName')}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  aria-required="true"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300 resize-none"
                  aria-required="true"
                />
              </div>
              
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center space-x-2"
                aria-label={loading ? t('contact.form.sending') : t('contact.form.send')}
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" aria-hidden="true" />
                    <span>{t('contact.form.send')}</span>
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="grid gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group flex items-start space-x-4 p-6 rounded-xl bg-white hover:bg-blue-50 transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-blue-600 text-white" aria-hidden="true">
                  {info.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {info.title}
                  </h3>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                      aria-label={`${info.title}: ${info.content}`}
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;