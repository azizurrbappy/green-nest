import React from 'react';

const Aside1 = () => {
  return (
    <>
      <div className="2xl:w-full bg-[#EEEEEE] flex-1 h-[297px] p-6 flex items-center justify-between gap-5">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Spider Plant</h2>
          <p className="text-gray-500 mt-3">
            An attractive plant that helps remove indoor toxins and grows baby
            offshoots.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://www.satvai.com/wp-content/uploads/2022/04/spider-plant-white-ceramic-indoor-bonayon-500x539-1.jpg"
            alt=""
            className="2xl:w-40 w-50 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Aside1;
