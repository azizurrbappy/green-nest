import React from 'react';
import useFetch from '../../Hooks/useFetch';

const GreenExperts = () => {
  const { data } = useFetch('../experts.json');

  return (
    <>
      <section className="py-12 px-4">
        <div className="mb-10 text-center">
          <h2 className="text-center text-3xl font-bold mb-3">
            Meet Our Green Experts
          </h2>
          <p className="text-gray-600 my-2">
            Our plant care professionals are here to guide your green journey 🌿
          </p>
          <div className="w-30 mx-auto border-3 border-[#65A15A]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16">
          {data
            ? data.map(expert => (
                <div
                  key={expert.id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 text-center"
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-green-700">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {expert.specialization}
                  </p>
                </div>
              ))
            : ''}
        </div>
      </section>
    </>
  );
};

export default GreenExperts;
