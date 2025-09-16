import React from 'react';
import { Camera, Video, Plane, Users, Clock, MapPin, Award, CheckCircle, Star } from 'lucide-react';

const Formations = () => {
  const formations = [
    {
      id: 1,
      icon: Camera,
      title: 'Formation Photographie',
      level: 'Débutant à Avancé',
      duration: '40 heures',
      format: 'Présentiel + Pratique',
      price: '150,000 FCFA',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      description: 'Maîtrisez les techniques de photographie professionnelle, de la composition à la post-production.',
      modules: [
        'Bases techniques de la photographie',
        'Composition et esthétique',
        'Éclairage naturel et artificiel',
        'Photographie de portrait',
        'Photographie événementielle',
        'Post-production avec Lightroom'
      ],
      color: 'from-blue-500 to-blue-600',
    },
    {
      id: 2,
      icon: Video,
      title: 'Formation Vidéo & Montage',
      level: 'Intermédiaire',
      duration: '50 heures',
      format: 'Présentiel + Pratique',
      price: '200,000 FCFA',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      description: 'Apprenez à réaliser des vidéos professionnelles, du tournage au montage final.',
      modules: [
        'Prise de vue vidéo professionnelle',
        'Techniques d\'éclairage pour la vidéo',
        'Prise de son et audio',
        'Montage avec Premiere Pro',
        'Étalonnage et correction colorimétrique',
        'Effets spéciaux et motion design'
      ],
      color: 'from-red-500 to-red-600',
    },
    {
      id: 3,
      icon: Plane,
      title: 'Formation Pilotage de Drone',
      level: 'Débutant',
      duration: '30 heures',
      format: 'Théorie + Pratique terrain',
      price: '120,000 FCFA',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      description: 'Formation complète au pilotage de drone avec certification officielle.',
      modules: [
        'Réglementation aérienne',
        'Bases du pilotage de drone',
        'Sécurité et procédures d\'urgence',
        'Prise de vues aériennes',
        'Maintenance et entretien',
        'Passage de l\'examen officiel'
      ],
      color: 'from-green-500 to-green-600',
    },
    {
      id: 4,
      icon: Users,
      title: 'Formation Communication Événementielle',
      level: 'Tous niveaux',
      duration: '35 heures',
      format: 'Présentiel + Cas pratiques',
      price: '100,000 FCFA',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      description: 'Maîtrisez l\'art d\'organiser et de communiquer autour d\'événements réussis.',
      modules: [
        'Stratégie de communication événementielle',
        'Planification et logistique',
        'Gestion des parties prenantes',
        'Communication digitale et réseaux sociaux',
        'Budget et négociation',
        'Évaluation et reporting post-événement'
      ],
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const practicalInfo = [
    {
      icon: Clock,
      title: 'Horaires flexibles',
      description: 'Sessions en semaine et week-end disponibles',
    },
    {
      icon: MapPin,
      title: 'Lieux multiples',
      description: 'Cotonou, Porto-Novo et formations sur site',
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Attestation reconnue à la fin de chaque formation',
    },
    {
      icon: Users,
      title: 'Groupes réduits',
      description: 'Maximum 8 participants par session',
    },
  ];

  const testimonials = [
    {
      name: 'Amélie Kouassi',
      formation: 'Formation Photographie',
      content: 'Formation exceptionnelle ! J\'ai pu démarrer mon activité de photographe événementiel grâce aux compétences acquises.',
      rating: 5,
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
    },
    {
      name: 'Marc Tchibozo',
      formation: 'Formation Drone',
      content: 'Instructeurs compétents, matériel de qualité. J\'ai obtenu ma certification du premier coup !',
      rating: 5,
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
    },
    {
      name: 'Sophie Mensah',
      formation: 'Formation Vidéo',
      content: 'Une formation complète qui m\'a permis de maîtriser tous les aspects de la production vidéo.',
      rating: 5,
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden" style={{ paddingTop: '7rem' }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid gap-6 p-8 sm:p-10 rounded-2xl border-2 border-yellow-500 text-center animate-zoomPulse max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Formations</span>
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed mb-8">
        Développez vos compétences créatives avec nos formations professionnelles 
        dispensées par des experts passionnés du secteur audiovisuel.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#formations"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105"
        >
          Découvrir nos formations
        </a>
        <a
          href="/contact"
          className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
        >
          Demander des informations
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">
            Investissez dans votre avenir créatif
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nos formations sont conçues pour vous donner les compétences pratiques 
            et théoriques nécessaires pour exceller dans le domaine de la création 
            audiovisuelle et de la communication événementielle.
          </p>
        </div>
      </section>

      {/* Formations Catalog */}
      <section id="formations" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-6">
              Catalogue de Formations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choisissez la formation qui correspond à vos objectifs professionnels
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formations.map((formation) => (
              <div
                key={formation.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                {/* Image Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-r ${formation.color} flex items-center justify-center`}>
                    <formation.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                    {formation.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-black mb-4">
                    {formation.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {formation.description}
                  </p>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      {formation.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      {formation.format}
                    </div>
                  </div>

                  {/* Modules */}
                  <h4 className="font-semibold text-black mb-3">Programme :</h4>
                  <ul className="space-y-2 mb-6">
                    {formation.modules.slice(0, 3).map((module, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {module}
                      </li>
                    ))}
                    {formation.modules.length > 3 && (
                      <li className="text-sm text-yellow-600 font-medium">
                        +{formation.modules.length - 3} autres modules
                      </li>
                    )}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-black">{formation.price}</span>
                    </div>
                    <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105">
                      S'inscrire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">
              Informations Pratiques
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur nos modalités de formation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {practicalInfo.map((info, index) => (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="font-semibold text-black mb-2">{info.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Modalités d'inscription</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Inscription en ligne ou sur place
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Paiement en 1 à 3 fois sans frais
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Remise de 15% pour les étudiants
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Formation continue possible
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-black mb-4">Ce qui est inclus</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Matériel professionnel fourni
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Support de cours numérique
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Suivi personnalisé pendant 3 mois
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    Certificat de fin de formation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-black mb-6">
              Témoignages & Success Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les retours de nos anciens apprenants qui ont transformé 
              leur passion en carrière professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-black">{testimonial.name}</h4>
                    <p className="text-yellow-600 text-sm">{testimonial.formation}</p>
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
            Prêt à développer vos talents ?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté d'apprenants et transformez votre passion 
            en compétences professionnelles recherchées.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              S'inscrire maintenant
            </a>
            <a
              href="tel:+229169974381"
              className="inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm text-black font-semibold rounded-full border border-black/20 hover:bg-white/30 transition-all duration-300"
            >
              Nous appeler
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formations;