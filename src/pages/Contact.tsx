import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    serviceType: '',
    eventDate: '',
    location: '',
    budget: '',
    isQuoteRequest: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        serviceType: '',
        eventDate: '',
        location: '',
        budget: '',
        isQuoteRequest: false,
      });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone / WhatsApp',
      value: '+229 01 69 97 43 81',
      href: 'tel:+229169974381',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@noriscod.com',
      href: 'mailto:contact@noriscod.com',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MapPin,
      title: 'Localisation',
      value: 'Cotonou, Bénin',
      href: '#map',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const serviceTypes = [
    'Photographie événementielle',
    'Production audiovisuelle',
    'Pilotage de drone',
    'Immobilier - Vente de parcelles',
    'Immobilier - Location',
    'Immobilier - Construction',
    'Communication & événementiel',
    'Formation',
    'Autre',
  ];

  const budgetRanges = [
    'Moins de 100,000 FCFA',
    '100,000 - 300,000 FCFA',
    '300,000 - 500,000 FCFA',
    '500,000 - 1,000,000 FCFA',
    'Plus de 1,000,000 FCFA',
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-500" />
          </div>
          <h2 className="text-3xl font-bold text-black mb-4">Message envoyé !</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-md mx-auto">
            Merci pour votre message. Nous vous contacterons dans les plus brefs délais.
          </p>
          <div className="animate-spin w-8 h-8 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden" style={{ paddingTop: '7rem' }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid gap-6 p-10 rounded-2xl border-2 border-yellow-500 text-center animate-zoomPulse max-w-3xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Contactez</span>-nous
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        Prêt à donner vie à votre projet ? Notre équipe est là pour vous accompagner 
        et répondre à toutes vos questions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
        <a
          href="tel:+229169974381"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
        >
          Appeler maintenant
        </a>
        <a
          href="mailto:contact@noriscod.com"
          className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
        >
          Envoyer un email
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                className="group bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-600 group-hover:text-black transition-colors duration-300">
                  {method.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-black mb-8">
                Envoyez-nous un message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Quote Request Toggle */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      name="isQuoteRequest"
                      checked={formData.isQuoteRequest}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-yellow-600 rounded focus:ring-yellow-500"
                    />
                    <span className="ml-3 text-black font-medium">
                      Demande de devis personnalisé
                    </span>
                  </label>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-black mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-black mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-black mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                  />
                </div>

                {/* Quote Request Fields */}
                {formData.isQuoteRequest && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="serviceType" className="block text-sm font-medium text-black mb-2">
                          Type de prestation
                        </label>
                        <select
                          id="serviceType"
                          name="serviceType"
                          value={formData.serviceType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Sélectionnez un service</option>
                          {serviceTypes.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-black mb-2">
                          Date souhaitée
                        </label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="location" className="block text-sm font-medium text-black mb-2">
                          Lieu / Localisation
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-black mb-2">
                          Budget estimatif
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200"
                        >
                          <option value="">Sélectionnez un budget</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    Message / Cahier des charges *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors duration-200 resize-none"
                    placeholder="Décrivez votre projet, vos attentes, et tous les détails importants..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Envoyer le message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-black mb-6">
                  Nos coordonnées
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Téléphone / WhatsApp</h4>
                      <p className="text-gray-600">+229 01 69 97 43 81</p>
                      <p className="text-sm text-gray-500">Disponible 7j/7 de 8h à 20h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Email</h4>
                      <p className="text-gray-600">contact@noriscod.com</p>
                      <p className="text-sm text-gray-500">Réponse sous 24h</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black mb-1">Localisation</h4>
                      <p className="text-gray-600">Cotonou, Bénin</p>
                      <p className="text-sm text-gray-500">Interventions sur tout le territoire</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div id="map" className="bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63426.65661176826!2d2.390837!3d6.401395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10235cb6b33dc045%3A0x991ff70ea7d0c1a3!2sCotonou%2C%20Benin!5e0!3m2!1sen!2s!4v1643825200000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation GOD'S EYE"
                ></iframe>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-white text-center">
                <h3 className="text-xl font-bold mb-4">Besoin d'une réponse rapide ?</h3>
                <p className="text-gray-300 mb-6">
                  Contactez-nous directement via WhatsApp pour une réponse immédiate.
                </p>
                <a
                  href="https://wa.me/229169974381"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Ouvrir WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;