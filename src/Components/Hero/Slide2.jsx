import React from 'react';

const Slide2 = () => {
  return (
    <>
      <div className="bg-[#EEEEEE] h-[615px] lg:p-20 p-10 flex justify-between items-center flex-col lg:flex-row gap-5">
        <div className="space-y-2 ">
          <p className="uppercase font-semibold text-[#65A15A]">Take a plant</p>
          <h1 className="text-5xl font-bold">
            Get 20% Off <br /> Order Now
          </h1>
          <p className="text-gray-600 text-xl">
            New Price:{' '}
            <span className="text-2xl text-[#65A15A] font-semibold">৳2200</span>
          </p>
        </div>

        <div className="">
          <img
            src="https://wcjungle.com/cdn/shop/products/ScreenShot2021-10-27at2.37.29PM.png?v=1635370664&width=2048"
            alt=""
            className="lg:w-80 w-65 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Slide2;
