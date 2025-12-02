import React from 'react';
import { Link } from 'react-router';

const TopRatedPlant = ({ image, title, price, rating, id }) => {
  return (
    <>
      <div className="card bg-base-100 w-[296px] shadow-sm">
        <figure
          style={{ backgroundImage: `url(${image})` }}
          className={`h-[295px] bg-cover bg-center`}
        ></figure>
        <div className="card-body py-5 px-4">
          <h2 className="card-title mx-auto uppercase text-base">{title}</h2>
          <div className="font-semibold flex justify-between items-center">
            <p>
              Price: <span className="text-[#65A15A]">৳{price}</span>
            </p>
            <p className="text-right">Rating: {rating}</p>
          </div>
          <div className="card-actions justify-end">
            <Link
              to={`/plant/${id}`}
              className="btn w-full bg-[#65A15A] border-0 text-white font-medium mt-2"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRatedPlant;
