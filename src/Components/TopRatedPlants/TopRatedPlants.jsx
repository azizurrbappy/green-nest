import React from 'react';
import TopRatedPlant from './TopRatedPlant';
import Loading from '../Loading/loading';
import { useLoaderData } from 'react-router';

const TopRatedPlants = () => {
  const data = useLoaderData();

  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 ">
        {data ? (
          data
            .slice(0, 8)
            .map(plant => (
              <TopRatedPlant
                key={plant.plantId}
                image={plant.image}
                title={plant.plantName}
                price={plant.price}
                rating={plant.rating}
                id={plant.plantId}
              ></TopRatedPlant>
            ))
        ) : (
          <Loading className="col-span-full"></Loading>
        )}
      </div>
    </>
  );
};

export default TopRatedPlants;
