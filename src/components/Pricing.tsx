import React from 'react';
import { Check, Star } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      price: "KES 1,699,000",
      description: "Perfect for small bars and restaurants",
      features: [
        "2-tap dispensing system",
        "Basic temperature control",
        "Standard record keeping",
        "Email support",
        "1-year warranty",
        "Basic installation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "KES 3,249,000",
      description: "Ideal for medium-sized establishments",
      features: [
        "4-tap dispensing system",
        "Advanced temperature control",
        "Comprehensive analytics",
        "Priority phone support",
        "2-year warranty",
        "Professional installation",
        "Staff training included",
        "Remote monitoring"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "KES 5,979,000",
      description: "For large venues and chains",
      features: [
        "8-tap dispensing system",
        "Premium temperature control",
        "Advanced analytics & reporting",
        "24/7 dedicated support",
        "3-year warranty",
        "White-glove installation",
        "Comprehensive training",
        "Remote monitoring & maintenance",
        "Custom branding options",
        "Multi-location management"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Product Overview & Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect BABLAZ SIPJOINT system for your business needs. 
            All plans include our core automation technology with varying levels of features and support.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'border-amber-500 transform scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star size={16} />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-amber-600 mb-2">{plan.price}</div>
                  <p className="text-gray-500">One-time investment</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                    plan.popular 
                      ? 'bg-amber-600 hover:bg-amber-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Custom Solutions Available</h3>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
              Need a tailored solution for your unique requirements? Our engineering team can design 
              custom configurations to meet specific operational needs and space constraints.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;