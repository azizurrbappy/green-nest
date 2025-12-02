import React from 'react';

const PlantCareTips = () => {
  return (
    <>
      <section className="mt-20 px-4">
        <div className="mb-12">
          <h2 className="text-center text-3xl font-bold mb-3">
            Plant Care Tips
          </h2>
          <div className="w-30 mx-auto border-3 border-[#65A15A] rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl shadow hover:scale-105 transition">
              <span className="text-4xl">💧</span>
              <h3 className="text-xl font-semibold mt-3 mb-2">
                Proper Watering
              </h3>
              <p className="text-gray-600">
                Water when the top inch of soil feels dry. Avoid over watering.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:scale-105 transition">
              <span className="text-4xl">☀️</span>
              <h3 className="text-xl font-semibold mt-3 mb-2">
                Right Sunlight
              </h3>
              <p className="text-gray-600">
                Keep in bright, indirect sunlight for healthy growth.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow hover:scale-105 transition">
              <span className="text-4xl">🌿</span>
              <h3 className="text-xl font-semibold mt-3 mb-2">
                Fertilizing Care
              </h3>
              <p className="text-gray-600">
                Feed every 4–6 weeks during growth seasons for better health.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PlantCareTips;
