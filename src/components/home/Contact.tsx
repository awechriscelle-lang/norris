import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Téléphone',
      value: '+229 01 69 97 43 81',
      href: 'tel:+229169974381',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Chat direct',
      href: 'https://wa.me/22969974381',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@noriscod.com',
      href: 'mailto:contact@noriscod.com',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Floating Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500 rounded-full blur-3xl animate-floatUpDown"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-yellow-500 rounded-full blur-3xl animate-floatUpDown"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Entrons en contact
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vous avez un projet créatif ? Discutons-en et trouvons ensemble la meilleure solution pour donner vie à votre image.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group block animate-floatUpDown"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 border border-white/10 shadow-lg">
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                  {method.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {method.value}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Formulaire simple */}
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl animate-floatUpDown">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Envoyez-nous un message</h3>
          <form className="grid gap-4">
            <input
              type="text"
              placeholder="Nom complet"
              className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Votre message"
              rows={4}
              className="px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
