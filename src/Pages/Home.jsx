import React from 'react';
import Slider from '../Components/Hero/Slider';
import Container from '../Components/Container/Container';
import Aside1 from '../Components/Hero/Aside/Aside1';
import Aside2 from '../Components/Hero/Aside/Aside2';
import TopRatedPlants from '../Components/TopRatedPlants/TopRatedPlants';
import PlantCareTips from '../Components/PlantCareTips/PlantCareTips';
import GreenExperts from '../Components/GreenExperts/GreenExperts';
import { Link } from 'react-router';
import ContactUs from '../Components/ContactUs/ContactUs';

const Home = () => {
  return (
    <>
      <Container>
        <section className="mt-10 grid grid-cols-12 gap-5 px-4 lg:px-0 ">
          <div className="2xl:col-span-9 col-span-full">
            <Slider></Slider>
          </div>

          <aside className="2xl:col-span-3 col-span-full flex 2xl:flex-col justify-center flex-wrap gap-5 max-sm:flex-col">
            <Aside1></Aside1>

            <Aside2></Aside2>
          </aside>
        </section>

        <section className="mt-20">
          <div className="mb-12">
            <h2 className="text-center text-3xl font-bold mb-3">
              Top Rated Indoor Plants
            </h2>
            <div className="w-30 mx-auto border-3 border-[#65A15A] rounded-full"></div>
          </div>

          <div>
            <TopRatedPlants></TopRatedPlants>
          </div>

          <div className="mt-15 mx-auto w-fit">
            <Link
              to="/plants"
              className="border-2 border-[#65a15a] px-3.5 py-2 rounded-full font-semibold hover:bg-[#65a15a] hover:text-white duration-200"
            >
              See All
            </Link>
          </div>
        </section>

        <PlantCareTips></PlantCareTips>

        <GreenExperts></GreenExperts>
      </Container>
      <ContactUs></ContactUs>
    </>
  );
};

export default Home;
