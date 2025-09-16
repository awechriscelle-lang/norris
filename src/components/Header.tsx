import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // fermer le menu lors du changement de route
    setIsMenuOpen(false);
  }, [location]);

  // Optional: empêcher le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Nos Services', href: '/services' },
    { name: 'Nos Réalisations', href: '/realisations' },
    { name: 'Formations', href: '/formations' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Barre drapeau du Bénin */}
      <div className="fixed top-0 w-full z-50 h-1 flex">
        <div className="flex-1 bg-green-600"></div>
        <div className="flex-1 bg-yellow-400"></div>
        <div className="flex-1 bg-red-600"></div>
      </div>
      
      <header className="fixed w-full z-50 bg-white shadow-md" style={{ top: '4px' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="https://i.ibb.co/W4hGwkF2/LOGO-GOD-S-EYE-JPEG.jpgg" alt="Logo" className="h-10 w-auto object-contain" />
            <span className="text-2xl font-bold text-black"></span>
          </Link>

          {/* Desktop nav & CTA (inchangés) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href}
                    className={`relative font-medium text-black hover:text-yellow-500 transition-colors duration-300 ${
                      location.pathname === item.href ? 'text-yellow-500' : ''
                    }`}>
                {item.name}
                {location.pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full shadow-lg">
              Demander un devis
            </Link>
          </div>

          {/* Bouton mobile */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 rounded-md text-black hover:text-yellow-500">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* --- Mobile menu (remplacer l'ancien bloc par celui-ci) --- */}
      <div className="lg:hidden">
        {isMenuOpen && (
          <>
            {/* Backdrop — clic dessus ferme le menu */}
            <div
              className="fixed inset-0 z-30 bg-black/20"
              onClick={() => setIsMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Menu dropdown (au-dessous du header) */}
            <div className="absolute left-4 right-4 top-full z-40 transition-all duration-200">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Scrollable content — hauteur max : viewport - hauteur header (h-20 = 5rem) */}
                <div
                  className="max-h-[calc(100vh-5rem)] overflow-y-auto"
                  style={{ WebkitOverflowScrolling: 'touch' }}
                >
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-4 py-3 text-black font-medium hover:text-yellow-600 hover:bg-yellow-50 transition-all duration-200 ${
                        location.pathname === item.href ? 'text-yellow-600 bg-yellow-50' : ''
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}

                  <div className="px-4 pt-4 pb-6">
                    <Link
                      to="/contact"
                      className="block w-full text-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full"
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;
