import {
  ArrowRight,
  Droplet,
  Home,
  Leaf,
  Recycle,
  Sun,
  Wind,
} from 'lucide-react';
import React from 'react';
import GreenNest from '../assets/green-nest.png';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Eco Home Consulting',
      description:
        'Transform your living space into an environmentally sustainable haven',
    },
    {
      icon: <Sun className="w-8 h-8" />,
      title: 'Solar Installation',
      description:
        'Harness renewable energy with our expert solar panel solutions',
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: 'Waste Management',
      description:
        'Comprehensive recycling and composting programs for your home',
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: 'Water Conservation',
      description: 'Smart systems to reduce water usage and save resources',
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: 'Air Quality Solutions',
      description:
        'Improve indoor air with plants and natural purification systems',
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Green Landscaping',
      description: 'Native plants and sustainable garden design services',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white">
        <div className="grid lg:grid-cols-2 min-h-screen">
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 p-12 flex items-center justify-center">
            <div className="text-white">
              <img src={GreenNest} alt="" className="w-25 mb-2" />
              <h1 className="text-6xl font-bold mb-6">Green Nest Services</h1>
              <p className="text-2xl text-green-100">
                Building a sustainable tomorrow, today
              </p>
            </div>
          </div>

          <div className="p-12 overflow-y-auto">
            <div className="max-w-2xl mx-auto space-y-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-green-600 pl-6 py-4 hover:bg-green-50 transition-all cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-green-600 mt-1">{service.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                    <ArrowRight className="w-6 h-6 text-green-600 mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
