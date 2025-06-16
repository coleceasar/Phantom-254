import React from 'react';
import { Zap, Thermometer, FileText, Settings, Shield, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automated Dispensing",
      description: "Fully automated beer dispensing system that operates with precision and consistency, eliminating human error and ensuring perfect pours every time."
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: "Temperature Control",
      description: "Advanced temperature management system maintains optimal beer temperature, preserving taste and quality while preventing flatness."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Record Keeping",
      description: "Comprehensive data logging and analytics system tracks dispensing patterns, inventory levels, and system performance metrics."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Electrical Integration",
      description: "Sophisticated electrical components ensure reliable operation with smart sensors, automated controls, and real-time monitoring."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enhanced Hygiene",
      description: "Contactless operation and automated cleaning cycles maintain the highest hygiene standards, reducing contamination risks."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Self-Service Ready",
      description: "User-friendly interface enables customers to serve themselves efficiently, reducing wait times and improving satisfaction."
    }
  ];

  const objectives = [
    "Automation of processes",
    "Improving efficiency",
    "Improving hygiene", 
    "Improving accessibility"
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Features & Objectives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our automated beer dispensing system combines cutting-edge technology with practical solutions 
            to revolutionize the beverage service industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-amber-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-2xl p-8 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Our Core Objectives</h3>
              <ul className="space-y-4">
                {objectives.map((objective, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-lg">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <img 
                src="/image2.jpg" 
                alt="Beer dispensing technology" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;