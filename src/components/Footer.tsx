import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Réalisations', href: '/realisations' },
    { name: 'Formations', href: '/formations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Slogan */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4 group">
              <img
                src="https://i.ibb.co/W4hGwkF2/LOGO-GOD-S-EYE-JPEG.jpg" // <-- mets ici le lien réel de ton logo
                alt="GOD'S EYE Logo"
                className="w-12 h-12 rounded-[5px] object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="text-2xl font-bold group-hover:text-yellow-400 transition-colors duration-300">
                
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Production audiovisuelle, Communication, Événementiel & Immobilier au service de vos projets et de votre développement.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Liens rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-yellow-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+229169974381"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                <Phone className="h-4 w-4" />
                <span>+229 01 69 97 43 81</span>
              </a>
              <a
                href="mailto:contact@noriscod.com"
                className="flex items-center space-x-3 text-gray-300 hover:text-yellow-500 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
                <span>contact@noriscod.com</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4" />
                <span>Cotonou, Bénin</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-500">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Restez informé de nos dernières actualités et projets.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-l-lg border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors duration-200"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-r-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300">
                S'abonner
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 GOD'S EYE. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/mentions-legales" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-200">
                Mentions légales
              </Link>
              <Link to="/politique-confidentialite" className="text-gray-400 text-sm hover:text-yellow-500 transition-colors duration-200">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
