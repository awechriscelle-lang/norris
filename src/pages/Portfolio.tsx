import React, { useState } from 'react';
import { Play, Filter, Eye } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'Tous', count: 24 },
    { id: 'photo', name: 'Photographie', count: 12 },
    { id: 'video', name: 'Vidéo', count: 8 },
    { id: 'drone', name: 'Drone', count: 6 },
    { id: 'event', name: 'Événementiel', count: 10 },
  ];

  const projects = [
    {
      id: 1,
      title: 'Mariage Sarah & David',
      category: 'photo',
      type: 'image',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Mariage', 'Portrait', 'Cérémonie'],
    },
    {
      id: 2,
      title: 'Clip Musical - Artist XYZ',
      category: 'video',
      type: 'video',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Clip', 'Musique', 'Artistique'],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 3,
      title: 'Vue aérienne - Complexe hôtelier',
      category: 'drone',
      type: 'video',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Immobilier', 'Aérien', 'Commercial'],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 4,
      title: 'Conférence Tech Summit 2024',
      category: 'event',
      type: 'image',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Conférence', 'Corporate', 'Business'],
    },
    {
      id: 5,
      title: 'Shooting Mode - Collection Automne',
      category: 'photo',
      type: 'image',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Mode', 'Fashion', 'Commercial'],
    },
    {
      id: 6,
      title: 'Documentaire - Artisans locaux',
      category: 'video',
      type: 'video',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Documentaire', 'Culture', 'Reportage'],
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    },
    {
      id: 7,
      title: 'Inspection drone - Infrastructure',
      category: 'drone',
      type: 'image',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Inspection', 'Infrastructure', 'Technique'],
    },
    {
      id: 8,
      title: 'Gala de Charité 2024',
      category: 'event',
      type: 'image',
      image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
      tags: ['Gala', 'Charité', 'Événementiel'],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const featuredProject = {
    title: 'Projet Phare - Festival International de Musique',
    description: 'Couverture complète du plus grand festival de musique de la région. Une production audiovisuelle d\'envergure impliquant 5 caméras, 3 drones, et une équipe de 12 professionnels sur 3 jours.',
    image: 'https://i.ibb.co/WvK4TnRM/769fa10e-4fee-4337-9cb6-2c4973229227.jpg',
    stats: [
      { label: 'Spectateurs', value: '50,000+' },
      { label: 'Heures de tournage', value: '72h' },
      { label: 'Équipe', value: '12 personnes' },
      { label: 'Matériel', value: '5 caméras + 3 drones' },
    ],
    tags: ['Festival', 'Musique', 'Live', 'Multi-caméras', 'Drone'],
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden" style={{ paddingTop: '7rem' }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div
      className="grid gap-6 p-8 sm:p-10 rounded-2xl border-2 border-yellow-500 text-center animate-zoomPulse max-w-4xl mx-auto"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Réalisations</span>
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        Découvrez notre portfolio de projets créatifs qui illustrent notre savoir-faire 
        et notre passion pour l'excellence visuelle.
      </p>
    </div>
  </div>
</section>


      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Un portfolio diversifié qui raconte des histoires
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chaque projet est unique et reflète notre approche personnalisée. 
            De la photographie événementielle aux productions vidéo complexes, 
            découvrez comment nous transformons les visions en réalité.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <div className="flex flex-wrap justify-center gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{filter.name}</span>
                    <span className="text-sm opacity-75">({filter.count})</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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

                  {/* View Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Eye className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-yellow-500/80 text-black text-xs rounded-full font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 2 && (
                      <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                        +{project.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                Projet Phare
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                {featuredProject.title}
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {featuredProject.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {featuredProject.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white/10 text-white text-sm rounded-full border border-white/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <Play className="h-10 w-10 text-white ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Votre projet mérite notre attention
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Chaque réalisation commence par une idée. Partagez la vôtre avec nous 
            et découvrez comment nous pouvons la transformer en succès.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Démarrer mon projet
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-black font-semibold rounded-full border border-black/20 hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
            >
              Voir nos services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;