import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  
  // Mock article data - in a real app, this would be fetched based on slug
  const article = {
    title: 'Les tendances 2025 en photographie événementielle',
    content: `
      <p>La photographie événementielle évolue constamment, et 2025 promet d'être une année riche en innovations et nouvelles tendances. En tant que professionnels du secteur, nous observons des changements significatifs dans les attentes des clients et les techniques utilisées.</p>

      <h2>1. L'authenticité avant tout</h2>
      <p>Les clients recherchent de plus en plus l'authenticité dans leurs photos d'événements. Fini les poses figées et artificielles ! La tendance est aux moments spontanés, aux émotions vraies et aux interactions naturelles entre les participants.</p>

      <h2>2. La diversité des formats</h2>
      <p>Avec l'essor des réseaux sociaux, nous constatons une demande croissante pour des formats variés : photos carrées pour Instagram, formats verticaux pour les stories, et même des clichés optimisés pour TikTok.</p>

      <h2>3. L'éco-responsabilité</h2>
      <p>Les clients sont de plus en plus sensibles aux questions environnementales. Cela se traduit par une préférence pour les livraisons numériques, l'utilisation d'équipements durables et la réduction des déplacements.</p>

      <h2>4. L'intégration de nouvelles technologies</h2>
      <p>L'intelligence artificielle commence à faire son apparition dans le post-traitement, permettant des retouches plus rapides et plus précises. Les drones deviennent également un standard pour les événements en extérieur.</p>

      <p>Chez GOD'S EYE, nous nous adaptons continuellement à ces évolutions pour offrir à nos clients des prestations qui répondent aux attentes actuelles tout en anticipant les besoins de demain.</p>
    `,
    author: 'Équipe GOD\'S EYE',
    date: '15 Janvier 2025',
    readTime: '8 min',
    category: 'Photographie',
    image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg24960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop',
    tags: ['Photographie', 'Tendances', 'Événementiel', '2025'],
  };

  const relatedPosts = [
    {
      title: '10 conseils pour réussir son shooting photo corporate',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      slug: 'conseils-shooting-photo-corporate',
    },
    {
      title: 'Comment organiser un événement mémorable en 2025',
      image: 'https://i.ibb.co/0pyM3DdV/453762b8-c549-4879-a79d-bd4d6f2a19b0.jpg',
      slug: 'organiser-evenement-memorable-2025',
    },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: '6rem' }}>
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/blog"
          className="inline-flex items-center text-gray-600 hover:text-yellow-600 transition-colors duration-200"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Retour au blog
        </Link>
      </div>

      {/* Hero Image */}
      <section className="relative">
        <div className="relative h-96 overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </section>

      {/* Article Content */}
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="lg:w-2/3">
              {/* Header */}
              <header className="mb-8">
                <div className="flex items-center mb-4">
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                  {article.title}
                </h1>

                <div className="flex items-center justify-between text-gray-500 pb-8 border-b">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {article.readTime}
                    </div>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center space-x-3">
                    <span className="text-sm mr-2">Partager :</span>
                    <button className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors duration-200">
                      <Facebook className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                      <Twitter className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-blue-800 text-white rounded-full flex items-center justify-center hover:bg-blue-900 transition-colors duration-200">
                      <Linkedin className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </header>

              {/* Article Body */}
              <div 
                className="prose prose-lg max-w-none prose-headings:text-black prose-headings:font-bold prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-yellow-600 hover:prose-a:text-yellow-700"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t">
                <div className="flex flex-wrap gap-2">
                  <span className="text-gray-600 mr-2">Tags :</span>
                  {article.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm hover:bg-yellow-100 hover:text-yellow-700 transition-colors duration-200 cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-24 space-y-8">
                {/* Author Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-black mb-4">À propos de l'auteur</h3>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4">
                      <span className="text-black font-bold text-lg">G</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">{article.author}</h4>
                      <p className="text-gray-500 text-sm">Experts en audiovisuel</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    L'équipe GOD'S EYE partage son expertise et ses conseils pour vous aider 
                    à réussir vos projets créatifs et événementiels.
                  </p>
                </div>

                {/* Related Posts */}
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-black mb-6">Articles similaires</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={`/blog/${post.slug}`}
                        className="group flex gap-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="font-medium text-black group-hover:text-yellow-600 transition-colors duration-200 leading-tight">
                            {post.title}
                          </h4>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-xl p-6 text-black text-center">
                  <h3 className="text-lg font-bold mb-4">Besoin de nos services ?</h3>
                  <p className="mb-6 text-sm">
                    Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-gray-900 transition-colors duration-200"
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;