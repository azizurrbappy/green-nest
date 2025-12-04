import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Container from '../Components/Container/Container';
import { toast } from 'react-toastify';
import useAxios from '../Hooks/useAxios';
import { DotLoader } from 'react-spinners';

const PlantDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [plantDetails, setPlantDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios(`/plants`).then(res => {
      const plantDetails = res.data.find(plant => plant._id === id);
      setPlantDetails(plantDetails);
      setLoading(false);
    });
  }, []);

  const {
    image,
    plantName,
    price,
    regularPrice,
    availableStock,
    productCode,
    providerName,
    keyFeatures,
    description,
    rating,
  } = plantDetails;

  return (
    <>
      <Container className="my-10">
        {loading ? (
          <div
            className={`col-span-full flex items-center justify-center h-100`}
          >
            <DotLoader color="#65A15A" />
          </div>
        ) : plantDetails ? (
          <section className="flex items-start flex-col lg:flex-row gap-8 lg:max-w-7xl mx-auto px-4 lg:px-0">
            <div className="max-md:mx-auto">
              {image ? (
                <img src={image} alt="" className="rounded-lg max-h-[400px]" />
              ) : (
                <div className="skeleton h-[300px] w-[420px]"></div>
              )}
            </div>

            <div className="space-y-3 flex-1">
              {/* Plant Title */}
              <h1 className="text-2xl font-bold">{plantName}</h1>

              {/* -------- */}
              <ul className="flex items-center gap-2 flex-wrap">
                <li className="text-sm bg-[#f0f3f0] w-fit px-3 py-1.5 rounded-full text-gray-600 font-medium">
                  Price:{' '}
                  <span className="font-semibold text-black">৳{price}</span>
                </li>
                <li className="text-sm bg-[#f0f3f0] w-fit px-3 py-1.5 rounded-full text-gray-600 font-medium">
                  Regular Price:{' '}
                  <span className="font-semibold text-black">
                    ৳{regularPrice}
                  </span>
                </li>
                <li className="text-sm bg-[#f0f3f0] w-fit px-3 py-1.5 rounded-full text-gray-600 font-medium">
                  Stock:{' '}
                  <span className="font-semibold text-black">
                    {availableStock > 0 ? 'In Stock' : ''}
                  </span>
                </li>
                <li className="text-sm bg-[#f0f3f0] w-fit px-3 py-1.5 rounded-full text-gray-600 font-medium">
                  Plant Code:{' '}
                  <span className="font-semibold text-black">
                    {productCode}
                  </span>
                </li>
                <li className="text-sm bg-[#f0f3f0] w-fit px-3 py-1.5 rounded-full text-gray-600 font-medium">
                  Provider:{' '}
                  <span className="font-semibold text-black">
                    {providerName}
                  </span>
                </li>
              </ul>

              {/* Key  Features*/}
              <div className="mt-5">
                <h3 className="text-lg font-semibold">Key Features</h3>

                <ul className="mt-2">
                  {keyFeatures?.map(feature => (
                    <li className="my-1.5 text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Btn */}
          </section>
        ) : (
          ''
        )}
      </Container>
    </>
  );
};

export default PlantDetails;
