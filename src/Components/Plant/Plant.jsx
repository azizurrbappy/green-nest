import React from 'react';
import { Link } from 'react-router';
import { Rating, Star } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Plant = ({ plant }) => {
  const ratingStyle = {
    itemShapes: Star,
    activeFillColor: '#65a15a',
    inactiveFillColor: '#d1d5db',
  };

  const { _id, image, plantName, description, rating, price } = plant;

  return (
    <>
      <div className="card bg-base-100 shadow-sm">
        <figure
          style={{ backgroundImage: `url(${image})` }}
          className={`h-[230px] bg-cover bg-center`}
        ></figure>
        <div className="card-body py-5 px-4 ">
          <div className="flex justify-between items-center">
            <h2 className="card-title uppercase text-base">{plantName}</h2>

            <h4 className="text-[#65A15A] card-title">৳{price}</h4>
          </div>

          <div className="flex justify-between items-center gap-1">
            <Rating
              style={{ maxWidth: 110, gap: '6px' }}
              value={Number(rating)}
              itemStyles={ratingStyle}
              readOnly
            />

            <p className="text-sm font-semibold">({rating})</p>
          </div>

          <p>{description}</p>

          {/* <div className="font-semibold flex justify-between items-center">
            <p>
              Price: <span className="text-[#65A15A]">৳{price}</span>
            </p>
            <p className="text-right">Rating: {rating}</p>
          </div> */}

          <div className="card-actions justify-end">
            <Link
              to={`/plant/${_id}`}
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

export default Plant;
