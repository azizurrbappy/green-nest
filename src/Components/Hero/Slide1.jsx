import React from 'react';

const Slide1 = () => {
  return (
    <>
      <div className="bg-[#EEEEEE] h-[615px] lg:p-20 p-10 flex justify-between items-center flex-col lg:flex-row gap-5">
        <div className="space-y-2 ">
          <p className="uppercase font-semibold text-[#65A15A]">
            sale up to 40% off
          </p>
          <h1 className="text-5xl font-bold">
            Plant For <br /> Your House
          </h1>
          <p className="text-gray-600 text-xl">
            New Price:{' '}
            <span className="text-2xl text-[#65A15A] font-semibold">৳1800</span>
          </p>
        </div>

        <div className="">
          <img
            src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1716209064-81SXDZveAL.jpg?crop=0.534xw:1.00xh;0.0849xw,0&resize=980:*"
            alt=""
            className="lg:w-80 w-65 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Slide1;
