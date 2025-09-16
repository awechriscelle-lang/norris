import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-28" style={{ paddingTop: '6rem' }}>
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Grid */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
        <div
          className="grid gap-6 p-8 sm:p-10 rounded-2xl border-2 border-yellow-500/80 
                     bg-white/10 backdrop-blur-sm text-center text-white shadow-2xl 
                     animate-zoomPulse w-full max-w-4xl"
        >
          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            Donnez vie à votre image
            <span className="block text-lg sm:text-xl lg:text-2xl font-normal text-yellow-400 mt-2">
              avec Norris CODJO - Photographe professionnel
            </span>
          </h1>

          {/* Sub Title */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed font-light">
            Production audiovisuelle, Communication, Événementiel & Immobilier<br />
            au service de vos projets et de votre développement au Bénin.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              aria-label="Demander un devis"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 
                         bg-gradient-to-r from-yellow-400 to-yellow-600 text-black 
                         font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 
                         transition-all duration-300 transform hover:scale-105 
                         shadow-lg hover:shadow-xl group"
            >
              Demander un devis
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>

            <Link
              to="/realisations"
              aria-label="Voir le portfolio"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 
                         bg-white/10 backdrop-blur-sm text-white font-semibold 
                         rounded-full border border-white/30 hover:bg-white/20 
                         transition-all duration-300 transform hover:scale-105"
            >
              Voir Portfolio
            </Link>

            <a
              href="https://wa.me/229169974381"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 
                         bg-green-600 text-white font-semibold rounded-full 
                         hover:bg-green-700 transition-all duration-300 transform hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
