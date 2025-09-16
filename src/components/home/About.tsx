import React from 'react';
import { CheckCircle, Users, Award, Zap } from 'lucide-react';

const About = () => {
  const features = [
    { icon: Users, title: 'Équipe Experte', description: 'Professionnels passionnés' },
    { icon: Award, title: 'Qualité Premium', description: 'Excellence garantie' },
    { icon: Zap, title: 'Innovation', description: 'Technologies de pointe' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Qui sommes-nous ?
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong>GOD'S EYE</strong>, dirigée par <strong className="text-yellow-600">Norris CODJO</strong>, photographe professionnel, est une agence multisectorielle spécialisée en communication, audiovisuel, 
              événementiel et immobilier. Nous accompagnons particuliers, entreprises et organisations 
              au Bénin dans la valorisation de leur image à travers la photographie, la vidéo, le pilotage de 
              drone, la gestion d'événements et le développement immobilier à Cotonou et dans tout le pays.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              <strong className="text-yellow-600">Notre mission :</strong> transformer vos idées en expériences 
              mémorables et impactantes au Bénin, tout en contribuant au développement territorial à travers nos 
              projets immobiliers innovants. Norris CODJO et son équipe mettent leur expertise au service de votre réussite.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center group animate-floatUpDown">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-floatUpDown">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg"
                alt="Équipe God's Eye"
                className="w-full h-96 object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl animate-floatUpDown">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <div>
                  <div className="text-2xl font-bold text-black">50+</div>
                  <div className="text-sm text-gray-600">Projets réalisés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
