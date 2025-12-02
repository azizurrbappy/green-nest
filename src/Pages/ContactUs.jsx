import React from 'react';
import { MessageCircle, Clock, ChevronRight } from 'lucide-react';
import GreenNest from '../assets/green-nest.png';

const ContactUs = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="grid md:grid-cols-2 min-h-screen">
          <div className="bg-gradient-to-br from-emerald-700 via-green-600 to-teal-600 p-12 flex flex-col justify-center text-white">
            <div className="max-w-md">
              <img src={GreenNest} alt="" className="w-25 mb-2" />
              <h1 className="text-5xl font-bold mb-6">Green Nest</h1>
              <p className="text-xl mb-8 text-emerald-100">
                Building sustainable solutions for a better tomorrow. Reach out
                and let's make an impact together.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Live Chat Available</p>
                    <p className="text-sm text-emerald-100">
                      Sun-Thu, 10AM-6PM
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Quick Response Time</p>
                    <p className="text-sm text-emerald-100">
                      We reply within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-12 flex flex-col justify-center bg-white">
            <div className="max-w-md mx-auto w-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Contact Us
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form and our team will get back to you shortly.
              </p>

              <div className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none text-gray-600">
                    <option>Select a topic</option>
                    <option>General Inquiry</option>
                    <option>Partnership</option>
                    <option>Support</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Your message..."
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-emerald-500 focus:outline-none"
                  ></textarea>
                </div>
                <button className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition font-semibold flex items-center justify-center gap-2">
                  Submit Message
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                  Or email us directly at{' '}
                  <span className="text-emerald-600 font-semibold">
                    azizurr.bappy@gmail.com
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
