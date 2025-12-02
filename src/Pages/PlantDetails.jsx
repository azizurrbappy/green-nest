import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import Loading from '../Components/Loading/loading';

const PlantDetails = () => {
  const getPlantId = useParams();
  const plantId = Number(getPlantId.id);
  const data = useLoaderData();

  const [plantDetails, setPlantDetails] = useState({});

  useEffect(() => {
    const plantDetails = data.find(plant => plant.plantId === plantId);
    return setPlantDetails(plantDetails);
  }, [data]);

  const { plantName, description, image, price, rating, availableStock } =
    plantDetails;

  const handleBookConsultation = e => {
    e.preventDefault();
    e.target.reset();
    toast.success('Your consultation has been booked.');
  };

  return (
    <>
      <Container className="my-10">
        {plantDetails ? (
          <section className="flex items-center flex-col lg:flex-row gap-8 lg:w-[896px] container mx-auto px-4 lg:px-0">
            <div className="flex-1">
              <img src={image} alt="" className="rounded-xl" />
            </div>

            <div className="space-y-3 flex-1">
              <h1 className="text-2xl font-bold">{plantName}</h1>
              <p className="text-gray-500">{description}</p>
              <p className="text-xl font-semibold text-[#65A15A]">৳{price}</p>
              <div className="flex items-center gap-2">
                Rating:
                <p className="text-sm font-medium">({rating})</p>
              </div>

              <p className="text-sm">
                Availability:{' '}
                <span
                  className={`text-base font-semibold ${
                    availableStock <= 5 ? 'text-red-700' : 'text-[#65A15A]'
                  }`}
                >
                  {availableStock} In stock
                </span>
              </p>

              <h2 className="font-semibold mt-8 mb-2">Book Consultation: </h2>
              <form onSubmit={handleBookConsultation}>
                <div className="space-y-3 flex gap-3">
                  <input
                    type="text"
                    required
                    name="name"
                    placeholder="Name"
                    className="input font-medium outline-none placeholder:text-gray-500 flex-1"
                  />

                  <input
                    type="text"
                    required
                    name="email"
                    placeholder="Email"
                    className="input font-medium outline-none placeholder:text-gray-500 flex-1"
                  />
                </div>

                <input
                  className="btn w-full bg-[#65A15A] font-medium text-white"
                  type="submit"
                  value="BOOK NOW"
                />
              </form>
            </div>
          </section>
        ) : (
          <Loading></Loading>
        )}
      </Container>
    </>
  );
};

export default PlantDetails;
