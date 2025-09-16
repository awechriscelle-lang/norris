import React from 'react';
import { Camera, Video, Calendar, Home } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: 'Communication & Branding',
      description: 'Valorisation de l’image des particuliers, entreprises et organisations par Norris CODJO, à travers des stratégies de communication ciblées et impactantes.',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: Video,
      title: 'Audiovisuel & Multimédia',
      description: 'Photographie, vidéo et pilotage de drones par Norris CODJO : contenus visuels professionnels pour événements, clips et documentaires.',
      color: 'from-red-400 to-red-600',
    },
    {
      icon: Calendar,
      title: 'Événementiel',
      description: 'Conception, organisation et gestion d’événements uniques au Bénin par Norris CODJO, transformant vos idées en expériences mémorables.',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Home,
      title: 'Immobilier',
      description: 'Construction, location et vente de parcelles à Cotonou, accompagnement complet de vos projets immobiliers par Norris CODJO.',
      color: 'from-purple-400 to-purple-600',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Nos Domaines d'Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos quatre pôles clés qui font de GOD'S EYE votre partenaire idéal pour tous vos projets créatifs, événementiels et immobiliers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-floatUpDown flex flex-col items-center text-center md:items-start md:text-left"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="p-8 relative z-10 flex flex-col items-center text-center md:items-start md:text-left">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
