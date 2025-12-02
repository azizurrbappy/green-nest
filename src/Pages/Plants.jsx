import React from 'react';
import Container from '../Components/Container/Container';
import { useLoaderData } from 'react-router';
import PlantsCard from '../Components/PlantsCard/PlantsCard';
import Loading from '../Components/Loading/Loading';

const Plants = () => {
  const data = useLoaderData();

  return (
    <>
      <Container className="my-10 px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3">Plants</h2>
          <div className="w-10 border-3 border-[#65A15A]"></div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 w-fit mx-auto">
          {data ? (
            data.map(plant => (
              <PlantsCard
                key={plant.plantId}
                id={plant.plantId}
                image={plant.image}
                title={plant.plantName}
                price={plant.price}
                rating={plant.rating}
              ></PlantsCard>
            ))
          ) : (
            <Loading className="col-span-full"></Loading>
          )}
        </div>
      </Container>
    </>
  );
};

export default Plants;
