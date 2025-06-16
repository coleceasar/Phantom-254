import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-20 min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionary
                <span className="text-amber-600 block">Beer Dispensing</span>
                System
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Experience the future of automated beer dispensing with BABLAZ SIPJOINT. 
                Our cutting-edge system ensures perfect temperature control, hygiene, and 
                consistent quality while reducing manual labor and promoting self-service operations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105">
                <span>Get Started</span>
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-gray-300 hover:border-amber-600 text-gray-700 hover:text-amber-600 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-200">
                <Play size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50%</div>
                <div className="text-gray-600">Labor Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">24/7</div>
                <div className="text-gray-600">Operation</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="/image1.jpg" 
                alt="Automated Beer Dispensing System" 
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-amber-200 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;