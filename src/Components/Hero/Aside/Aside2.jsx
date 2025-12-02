import React from 'react';

const Aside2 = () => {
  return (
    <>
      <div className="2xl:w-full bg-[#EEEEEE] flex-1 h-[297px] p-6 flex items-center justify-between gap-5">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Aloe Vera</h2>
          <p className="text-gray-500 mt-3">
            A soothing succulent known for its skin-healing gel and
            air-purifying qualities.
          </p>
        </div>
        <div className="flex-1">
          <img
            src="https://d2rbyiw1vv51io.cloudfront.net/web/ikea4/images/688/1368841_PE957973_S5.jpg?v=revamp202506111017"
            alt=""
            className="2xl:w-40 w-50 rounded-2xl"
          />
        </div>
      </div>
    </>
  );
};

export default Aside2;
