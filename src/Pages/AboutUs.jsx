import {
  Award,
  Globe,
  Heart,
  Sprout,
  Target,
  TreePine,
  Users,
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import GreenNest from '../assets/green-nest.png';

const AboutUs = () => {
  return (
    <>
      <div className="bg-white">
        {/* Split Hero */}
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Left Side - Content */}
          <div className="flex items-center justify-center p-12 bg-white">
            <div className="max-w-lg">
              <Link to="/" className="flex items-center gap-1.5 mb-5">
                <img src={GreenNest} alt="" className="w-13" />
                <h2 className="text-2xl font-bold">
                  <span className="text-[#65A15A]">Green</span>Nest
                </h2>
              </Link>
              <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Where Nature Meets Design
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                For over 15 years, we've been pioneering sustainable living
                solutions that don't compromise on style, comfort, or
                functionality.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Certified green building experts',
                  '500+ sustainable projects delivered',
                  'Award-winning eco-friendly designs',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link
                to="/plants"
                className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium text-lg"
              >
                Explore Our Work
              </Link>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-700 flex items-center justify-center p-12">
            <div className="text-white text-center max-w-md">
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <TreePine className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">10K+</div>
                  <div className="text-sm text-green-100">Trees Planted</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Users className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">1.2K+</div>
                  <div className="text-sm text-green-100">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Globe className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">12</div>
                  <div className="text-sm text-green-100">Countries</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Award className="w-12 h-12 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-1">25+</div>
                  <div className="text-sm text-green-100">Awards Won</div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <p className="text-lg italic mb-4">
                  "Green Nest transformed our vision into reality. They created
                  a home that's beautiful, sustainable, and truly ours."
                </p>
                <p className="text-green-100 font-medium">
                  — Jennifer Martinez, Homeowner
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Content */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Green Nest?
            </h2>
            <p className="text-xl text-gray-600">
              We're more than builders—we're environmental stewards
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Sprout,
                title: 'Sustainable Materials',
                desc: 'We source eco-friendly, renewable materials that minimize environmental impact without sacrificing quality.',
              },
              {
                icon: Heart,
                title: 'Client-Centered',
                desc: 'Your vision guides our work. We listen, collaborate, and deliver spaces that reflect your unique lifestyle.',
              },
              {
                icon: Target,
                title: 'Future-Proof Design',
                desc: 'Our designs adapt to changing needs and incorporate technology for long-term sustainability and efficiency.',
              },
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
