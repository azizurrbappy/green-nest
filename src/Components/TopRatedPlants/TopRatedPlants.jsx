import React, { useEffect, useState } from 'react';
import TopRatedPlant from './TopRatedPlant';
import Loading from '../Loading/loading';
import useAxios from '../../Hooks/useAxios';

const TopRatedPlants = () => {
  const axios = useAxios();
  const [plants, setPlants] = useState();

  useEffect(() => {
    axios(`/plants`).then(res => setPlants(res.data));
  }, []);

  return (
    <>
      <div className="w-fit mx-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 ">
        {plants ? (
          plants
            .slice(0, 8)
            .map((plant, index) => (
              <TopRatedPlant key={index} plant={plant}></TopRatedPlant>
            ))
        ) : (
          <Loading className="col-span-full"></Loading>
        )}
      </div>
    </>
  );
};

export default TopRatedPlants;
