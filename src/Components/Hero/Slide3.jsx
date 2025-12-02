import React from 'react';

const Slide3 = () => {
  return (
    <>
      <div className="bg-[#EEEEEE] h-[615px] lg:p-20 p-10 flex justify-between items-center flex-col lg:flex-row gap-5">
        <div className="space-y-2 ">
          <p className="uppercase font-semibold text-[#65A15A]">
            GreenNest Best Collection
          </p>
          <h1 className="text-5xl font-bold">
            Inspiration <br /> Plants
          </h1>
          <p className="text-gray-600 text-xl">
            New Price:{' '}
            <span className="text-2xl text-[#65A15A] font-semibold">৳2500</span>
          </p>
        </div>

        <div className="">
          <img
            src="https://www.beardsanddaisies.co.uk/cdn/shop/files/BD_ZZ_FAMILY_1000x1100_5d75a883-2430-46b4-831e-402659b3e3b0_grande.jpg?v=1711115361"
            alt=""
            className="lg:w-80 w-65 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Slide3;
