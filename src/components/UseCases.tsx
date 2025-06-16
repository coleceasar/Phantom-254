import React from 'react';
import { Building, Utensils, Music, Plane, Film, Trophy, ShoppingBag, MapPin } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Bars and Pubs",
      description: "Perfect for high-volume establishments requiring consistent quality and reduced wait times.",
      benefits: ["Faster service", "Consistent pours", "Reduced labor costs"]
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Restaurants",
      description: "Enhance dining experience with automated beer service that complements your culinary offerings.",
      benefits: ["Seamless integration", "Quality assurance", "Staff efficiency"]
    },
    {
      icon: <Music className="w-8 h-8" />,
      title: "Night Clubs",
      description: "Handle peak-hour demands with automated systems that keep the party going.",
      benefits: ["High-volume capacity", "Quick service", "Reduced bottlenecks"]
    },
    {
      icon: <Plane className="w-8 h-8" />,
      title: "Airports & Travel Lounges",
      description: "Provide travelers with quick, quality refreshments during their journey.",
      benefits: ["24/7 operation", "Minimal staffing", "Traveler convenience"]
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Cinemas & Theaters",
      description: "Enhance the entertainment experience with convenient beverage service.",
      benefits: ["Quiet operation", "Quick intermission service", "Enhanced experience"]
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Sports Complexes & Stadiums",
      description: "Serve large crowds efficiently during sporting events and competitions.",
      benefits: ["Mass service capability", "Crowd management", "Event enhancement"]
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Shopping Malls",
      description: "Attract shoppers with convenient refreshment stations throughout retail spaces.",
      benefits: ["Foot traffic increase", "Customer retention", "Revenue generation"]
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Supermarkets",
      description: "Expand beverage offerings with automated dispensing in grocery environments.",
      benefits: ["Product differentiation", "Customer attraction", "Additional revenue"]
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Versatile Applications
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            BABLAZ SIPJOINT adapts to diverse environments, bringing automated beer dispensing 
            to various industries and expanding accessibility to untapped markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <div className="text-amber-600 mb-4">
                {useCase.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {useCase.description}
              </p>
              <div className="space-y-2">
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                    <span className="text-xs text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Expanding Beer Accessibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission extends beyond automation – we're opening new markets and making quality beer 
              accessible in previously untapped locations. From corporate offices to educational institutions, 
              BABLAZ SIPJOINT is revolutionizing where and how people enjoy their favorite beverages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;