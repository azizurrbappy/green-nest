import React from 'react';
import { DotLoader } from 'react-spinners';

const Loading = ({ className }) => {
  return (
    <>
      <div className={`flex justify-center items-center my-30 ${className}`}>
        <DotLoader color="#65A15A" />
      </div>
    </>
  );
};

export default Loading;
