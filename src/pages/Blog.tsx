import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'Les tendances 2025 en photographie événementielle',
    excerpt: 'Découvrez les nouvelles techniques et styles qui vont marquer le secteur de la photographie événementielle cette année.',
    image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
    author: 'Équipe GOD\'S EYE',
    date: '15 Janvier 2025',
    category: 'Photographie',
    readTime: '8 min',
    slug: 'tendances-2025-photographie-evenementielle',
  };

  const recentNews = [
    {
      id: 1,
      title: 'Partenariat avec le Festival International de Cotonou',
      date: '10 Janvier 2025',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      type: 'Partenariat',
    },
    {
      id: 2,
      title: 'Nouveau matériel drone professionnel acquis',
      date: '8 Janvier 2025',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      type: 'Nouveauté',
    },
    {
      id: 3,
      title: 'Formation gratuite pour les jeunes entrepreneurs',
      date: '5 Janvier 2025',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      type: 'Formation',
    },
  ];

  const blogPosts = [
    {
      id: 2,
      title: '10 conseils pour réussir son shooting photo corporate',
      excerpt: 'Guide complet pour préparer et réaliser des photos d\'entreprise qui valorisent votre marque professionnelle.',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      author: 'Marc Tondossama',
      date: '12 Janvier 2025',
      category: 'Conseils',
      readTime: '6 min',
      slug: 'conseils-shooting-photo-corporate',
    },
    {
      id: 3,
      title: 'Comment organiser un événement mémorable en 2025',
      excerpt: 'Les clés d\'un événement réussi : de la planification à l\'exécution, découvrez nos secrets d\'organisation.',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      author: 'Sarah Adjovi',
      date: '10 Janvier 2025',
      category: 'Événementiel',
      readTime: '10 min',
      slug: 'organiser-evenement-memorable-2025',
    },
    {
      id: 4,
      title: 'L\'évolution de la vidéo aérienne par drone',
      excerpt: 'De simple gadget à outil professionnel incontournable, retour sur l\'évolution spectaculaire des drones.',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      author: 'David Kpomahou',
      date: '8 Janvier 2025',
      category: 'Technologie',
      readTime: '7 min',
      slug: 'evolution-video-aerienne-drone',
    },
    {
      id: 5,
      title: 'Les secrets d\'un bon éclairage en studio',
      excerpt: 'Maîtrisez les techniques d\'éclairage professionnel pour sublimer vos sujets en studio.',
      image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      author: 'Équipe GOD\'S EYE',
      date: '6 Janvier 2025',
      category: 'Technique',
      readTime: '9 min',
      slug: 'secrets-bon-eclairage-studio',
    },
    {
      id: 6,
      title: 'Budget événementiel : comment bien planifier ses dépenses',
      excerpt: 'Guide pratique pour établir et gérer le budget de votre événement sans mauvaises surprises.',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      author: 'Marie Akakpo',
      date: '4 Janvier 2025',
      category: 'Business',
      readTime: '5 min',
      slug: 'budget-evenementiel-planifier-depenses',
    },
  ];

  const categories = [
    { name: 'Photographie', count: 8 },
    { name: 'Vidéo', count: 6 },
    { name: 'Événementiel', count: 10 },
    { name: 'Conseils', count: 12 },
    { name: 'Technologie', count: 4 },
    { name: 'Business', count: 7 },
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
<section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden" style={{ paddingTop: '7rem' }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid gap-6 p-8 sm:p-10 rounded-2xl border-2 border-yellow-500 text-center animate-zoomPulse max-w-4xl mx-auto">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Actualités & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Blog</span>
      </h1>
      <p className="text-xl text-gray-300 leading-relaxed">
        Restez informé de nos dernières actualités et découvrez nos conseils d'experts 
        pour réussir vos projets créatifs et événementiels.
      </p>
    </div>
  </div>
</section>


      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-black mb-8 text-center">Article à la Une</h2>
            <Link to={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-80 lg:h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-2xl lg:text-3xl font-bold text-black mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                      {featuredPost.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {featuredPost.date}
                        </div>
                      </div>
                      <span className="bg-gray-100 px-2 py-1 rounded">{featuredPost.readTime}</span>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-yellow-600 font-semibold group-hover:text-yellow-700 transition-colors duration-300">
                      Lire l'article complet
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-12 text-center">Actualités Récentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <div key={news.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative overflow-hidden h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {news.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-black mb-3 hover:text-yellow-600 transition-colors duration-200">
                    {news.title}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {news.date}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold text-black mb-12">Articles du Blog</h2>
              <div className="space-y-8">
                {blogPosts.map((post) => (
                  <Link key={post.id} to={`/blog/${post.slug}`} className="group block">
                    <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Image */}
                        <div className="relative overflow-hidden md:col-span-1">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:col-span-2">
                          <div className="flex items-center mb-3">
                            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm font-medium">
                              {post.category}
                            </span>
                            <span className="ml-auto text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {post.excerpt}
                          </p>

                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {post.author}
                              </div>
                              <div className="flex items-center">
                                <Calendar className="h-4 w-4 mr-1" />
                                {post.date}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-black mb-6">Catégories</h3>
                  <ul className="space-y-3">
                    {categories.map((category, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="flex items-center justify-between text-gray-600 hover:text-yellow-600 transition-colors duration-200"
                        >
                          <span className="flex items-center">
                            <Tag className="h-4 w-4 mr-2" />
                            {category.name}
                          </span>
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                            {category.count}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-black">
                  <h3 className="text-xl font-bold mb-4">Newsletter</h3>
                  <p className="mb-6">
                    Recevez nos derniers articles et actualités directement dans votre boîte mail.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="w-full px-4 py-2 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-black/20"
                    />
                    <button className="w-full px-4 py-2 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors duration-200">
                      S'abonner
                    </button>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="bg-gray-900 rounded-xl p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-4">Une question ?</h3>
                  <p className="mb-6 text-gray-300">
                    Notre équipe est là pour vous accompagner dans vos projets.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full hover:from-yellow-500 hover:to-yellow-700 transition-all duration-300"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;