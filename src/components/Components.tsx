import React from 'react';
import { Cpu, Thermometer, Droplets, Zap, Gauge, Wifi } from 'lucide-react';

const Components = () => {
  const components = [
    {
      icon: <Cpu className="w-8 h-8" />,
      name: "Smart Control Unit",
      description: "Advanced microprocessor-based control system that manages all dispensing operations with precision timing and flow control.",
      specifications: ["ARM Cortex-M4 Processor", "Real-time OS", "256MB RAM", "Ethernet & WiFi connectivity"]
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      name: "Temperature Management System",
      description: "Precision cooling system with multiple temperature zones to maintain optimal beer temperature across different varieties.",
      specifications: ["±0.5°C accuracy", "Multi-zone cooling", "Energy efficient compressor", "Automatic defrost cycle"]
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      name: "Flow Control Valves",
      description: "High-precision solenoid valves with flow sensors ensure accurate dispensing volumes and prevent waste.",
      specifications: ["Stainless steel construction", "Food-grade materials", "0.1ml accuracy", "Self-cleaning mechanism"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      name: "Power Management",
      description: "Efficient power distribution system with backup capabilities and energy monitoring for optimal performance.",
      specifications: ["220V/110V compatibility", "UPS backup system", "Power monitoring", "Surge protection"]
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      name: "Pressure Regulation",
      description: "Automated CO2 pressure management system maintains optimal carbonation levels for perfect beer quality.",
      specifications: ["Digital pressure sensors", "Automatic regulation", "CO2 monitoring", "Leak detection"]
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      name: "IoT Connectivity",
      description: "Cloud-connected system enables remote monitoring, diagnostics, and over-the-air updates for seamless operation.",
      specifications: ["4G/WiFi connectivity", "Cloud dashboard", "Remote diagnostics", "OTA updates"]
    }
  ];

  return (
    <section id="components" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Automation Components
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our system integrates cutting-edge components to deliver reliable, efficient, 
            and intelligent beer dispensing automation that sets new industry standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {components.map((component, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-amber-600 bg-amber-100 p-3 rounded-lg">
                  {component.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {component.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {component.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-gray-900">Key Specifications:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {component.specifications.map((spec, specIndex) => (
                        <li key={specIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-amber-600 rounded-full"></div>
                          <span className="text-sm text-gray-700">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Integration Excellence
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Every component in our system is carefully selected and integrated to work in perfect harmony. 
                Our proprietary software orchestrates all hardware elements to deliver consistent, reliable performance 
                that exceeds industry standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">99.9% system reliability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Real-time monitoring and alerts</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Predictive maintenance capabilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Seamless software updates</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-8 text-center">
                <div className="text-6xl font-bold text-amber-600 mb-2">24/7</div>
                <div className="text-xl text-gray-700 mb-4">Continuous Operation</div>
                <p className="text-gray-600">
                  Our robust component integration ensures uninterrupted service 
                  with automatic failover and self-diagnostic capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Components;