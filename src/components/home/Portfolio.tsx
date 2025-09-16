import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Shooting Corporate',
      category: 'Photographie',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      type: 'image',
    },
    {
      id: 2,
      title: 'Événement d\'Entreprise',
      category: 'Événementiel',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      type: 'image',
    },
    {
      id: 3,
      title: 'Clip Promotionnel',
      category: 'Vidéo',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      type: 'video',
    },
    {
      id: 4,
      title: 'Vue Aérienne Drone',
      category: 'Drone',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      type: 'video',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Aperçu de notre Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations qui témoignent de notre savoir-faire 
            et de notre passion pour l'excellence créative.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-floatUpDown"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Play Button for Videos */}
                {project.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-8 w-8 text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="text-sm text-yellow-400 mb-1">{project.category}</div>
                <h3 className="font-semibold text-lg">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/realisations"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
          >
            Voir toutes nos réalisations
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
