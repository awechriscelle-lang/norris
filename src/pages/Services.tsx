import React, { useState } from 'react';
import { Camera, Video, Plane, Users, X, Star, CheckCircle } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Camera,
      title: 'Photographie événementielle',
      shortDescription: 'Immortalisez vos moments les plus précieux avec notre expertise photographique.',
      fullDescription: 'Notre service de photographie événementielle couvre tous types d\'événements : mariages, événements d\'entreprise, conférences, spectacles et célébrations privées. Nous utilisons un équipement professionnel de pointe pour capturer chaque instant avec une qualité exceptionnelle.',
      features: [
        'Shooting mariage et événements privés',
        'Photographie d\'entreprise et corporate',
        'Couverture d\'événements sportifs',
        'Portraits professionnels',
        'Photographie de produits',
        'Retouche et post-production incluses'
      ],
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      title: 'Production audiovisuelle',
      icon: Video,
      shortDescription: 'Créez des contenus vidéo percutants qui marquent les esprits.',
      fullDescription: 'De la conception à la post-production, nous réalisons vos projets audiovisuels avec créativité et professionnalisme. Clips musicaux, films d\'entreprise, documentaires, publicités - nous donnons vie à vos idées.',
      features: [
        'Réalisation de clips musicaux',
        'Films d\'entreprise et institutionnels',
        'Documentaires et reportages',
        'Publicités et contenus promotionnels',
        'Captation d\'événements en direct',
        'Montage et étalonnage professionnel'
      ],
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      color: 'from-red-500 to-red-600',
    },
    {
      id: 3,
      title: 'Pilotage drone & prises de vues aériennes',
      icon: Plane,
      shortDescription: 'Explorez de nouveaux horizons avec nos prises de vues aériennes spectaculaires.',
      fullDescription: 'Nos pilotes certifiés vous offrent des perspectives uniques grâce à nos drones professionnels. Parfait pour l\'immobilier, l\'événementiel, la publicité ou simplement pour capturer des vues à couper le souffle.',
      features: [
        'Pilotage par des professionnels certifiés',
        'Prises de vues aériennes 4K',
        'Inspection technique par drone',
        'Cartographie et topographie',
        'Couverture d\'événements en hauteur',
        'Respect total de la réglementation'
      ],
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      title: 'Immobilier & Développement Territorial',
      icon: Users,
      shortDescription: 'Développez votre patrimoine immobilier avec nos solutions complètes.',
      fullDescription: 'Notre division immobilière propose des solutions complètes de développement territorial. De l\'acquisition de terrains à la construction, en passant par la vente et la location, nous accompagnons vos projets immobiliers avec expertise et professionnalisme.',
      features: [
        'Vente de parcelles viabilisées',
        'Location de terrains et propriétés',
        'Construction clé en main',
        'Développement de lotissements',
        'Conseil en investissement immobilier',
        'Gestion locative et administrative'
      ],
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      color: 'from-purple-500 to-purple-600',
    },
    {
      id: 5,
      title: 'Communication & gestion événementielle',
      icon: Users,
      shortDescription: 'Organisez des événements mémorables avec notre expertise complète.',
      fullDescription: 'De la conceptualisation à la réalisation, nous gérons tous les aspects de vos événements. Notre équipe s\'occupe de la logistique, de la communication et de la coordination pour que votre événement soit un succès total.',
      features: [
        'Organisation complète d\'événements',
        'Stratégie de communication événementielle',
        'Gestion de la logistique',
        'Coordination des prestataires',
        'Animation et protocole',
        'Suivi post-événement et reporting'
      ],
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      color: 'from-orange-500 to-orange-600',
    },
  ];

  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Directrice Marketing, TechCorp',
      content: 'GOD\'S EYE a transformé notre événement de lancement. Leur professionnalisme et leur créativité ont dépassé toutes nos attentes.',
      rating: 5,
    },
    {
      name: 'Jean-Paul Mensah',
      role: 'Entrepreneur',
      content: 'Le shooting corporate réalisé par l\'équipe était parfait. Les photos reflètent parfaitement l\'image de notre entreprise.',
      rating: 5,
    },
    {
      name: 'Fatou Kone',
      role: 'Organisatrice d\'événements',
      content: 'Collaboration exceptionnelle ! Ils ont géré notre mariage de A à Z avec une attention aux détails remarquable.',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden" style={{ paddingTop: '7rem' }}>
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg')]"></div>
  </div>

  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div
      className="grid gap-6 p-8 sm:p-10 rounded-2xl border-2 border-yellow-500/80 
                 bg-white/10 backdrop-blur-sm text-center shadow-2xl animate-zoomPulse max-w-4xl mx-auto"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Services</span>
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        Découvrez notre gamme complète de services professionnels conçus pour 
        répondre à tous vos besoins en matière de création visuelle et d'événementiel.
      </p>
    </div>
  </div>
</section>


      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col"
              >
                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                  <div className={`absolute top-6 left-6 w-12 h-12 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed flex-1">
                    {service.shortDescription}
                  </p>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                  >
                    + Détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
              Témoignages Clients
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez ce que nos clients disent de notre travail et de notre engagement 
              à offrir des services d'exception.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins et recevoir 
            un devis personnalisé gratuit.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Demander un devis personnalisé
          </a>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              {/* Header Image */}
              <div className="relative h-64 overflow-hidden rounded-t-2xl">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40"></div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-6 right-6 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                >
                  <X className="h-5 w-5" />
                </button>
                <div className={`absolute bottom-6 left-6 w-16 h-16 rounded-full bg-gradient-to-r ${selectedService.color} flex items-center justify-center`}>
                  <selectedService.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {selectedService.title}
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {selectedService.fullDescription}
                </p>

                <h3 className="text-2xl font-bold text-black mb-6">
                  Ce qui est inclus :
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <a
                    href="/contact"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
                  >
                    Demander un devis pour ce service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;