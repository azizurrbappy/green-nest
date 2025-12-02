import React from 'react';
import { ArrowLeft, Home, Search, Leaf } from 'lucide-react';
import { Link } from 'react-router';

const PageNotFound = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          {/* Big 404 with plant illustration */}
          <div className="mb-8 relative">
            <h1 className="text-[180px] md:text-[240px] font-bold text-green-600 opacity-20 leading-none">
              404
            </h1>

            {/* Cute plant in the middle */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <Leaf className="w-24 h-24 md:w-32 md:h-32 text-green-600 animate-pulse" />
                <div className="absolute -top-4 -right-4 text-6xl rotate-12">
                  🌱
                </div>
              </div>
            </div>
          </div>

          {/* Main message */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! This tree is lost.
          </h2>

          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            It seems you are looking for a leaf that we don't have in our
            garden. Don't worry, we have many more beautiful plants! 🌿
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              <Home className="w-5 h-5" />
              Return to home page
            </Link>

            <Link
              to="/plants"
              className="inline-flex items-center gap-2 border-2 border-green-600 text-green-600 hover:bg-green-50 font-semibold py-4 px-8 rounded-full transition-all"
            >
              <Search className="w-5 h-5" />
              View all trees
            </Link>
          </div>

          {/* Footer note */}
          <p className="mt-10 text-gray-500 text-sm">
            Please contact us if you have any problems: azizurr.bappy@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default PageNotFound;
