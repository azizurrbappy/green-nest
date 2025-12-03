import React, { useEffect, useState } from 'react';
import Container from '../Components/Container/Container';
import { ListFilter, Search } from 'lucide-react';
import useAxios from '../Hooks/useAxios';
import Plant from '../Components/Plant/Plant';

const Plants = () => {
  const categories = [
    'Air Purifier',
    'Flowering Plant',
    'Low Light Plant',
    'Medicinal Plant',
    'Foliage Plant',
    'Hanging Plant',
    'Trailing Plant',
    'Tropical Plant',
    'Foliage Plant',
    'Succulent',
    'Foliage Plant',
    'Tropical Plant',
    'Foliage Plant',
  ];

  const axios = useAxios();
  const [categoryValue, setCategoryValue] = useState([]);
  const [plants, setPlants] = useState();

  useEffect(() => {
    axios(`/plants?category=${categoryValue}`).then(res => setPlants(res.data));
  }, [categoryValue]);

  console.log(plants);

  return (
    <>
      {/* Filter Drawer */}
      <div className="drawer drawer-end z-50">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-5"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-[#f0f3f0] min-h-full w-80 p-4">
            {/* Sidebar Content */}

            <form className="flex items-center gap-4 mb-4">
              <label className="input outline-0 rounded-full bg-transparent">
                <Search size={18} className="text-gray-500"></Search>
                <input type="search" placeholder="Search plants" />
              </label>
            </form>

            <aside className="bg-[#f0f3f0] rounded-md">
              <h4 className="px-4 text-[17px] text-center font-medium">
                Category
              </h4>

              <div className="border-b border-gray-200 my-3.5"></div>

              <section className="px-4">
                <form className="flex flex-col gap-2.5">
                  {categories.map((category, index) => (
                    <label key={index} className="label text-[15px] text-black">
                      <input
                        value={category}
                        onChange={e => setCategoryValue(e.target.value)}
                        type="checkbox"
                        value={category}
                        className="checkbox checkbox-xs rounded-full text-[#65a15a]"
                      />
                      {category}
                    </label>
                  ))}
                </form>
              </section>
            </aside>
          </ul>
        </div>
      </div>

      <Container className="my-10 px-4 lg:px-0">
        <section>
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-3">
              All Plants ({plants?.length})
            </h2>
            <div className="w-16 border-3 border-[#65A15A] rounded-full"></div>
          </div>
        </section>

        <section className="grid grid-cols-12 gap-10">
          <aside className="bg-[#f0f3f0] rounded-md py-4 col-span-3 hidden lg:block h-fit">
            <h4 className="px-4 text-[17px] text-center font-medium">
              Category
            </h4>

            <div className="border-b border-gray-200 my-3.5"></div>

            <section className="px-4">
              <form className="flex flex-col gap-2.5">
                {categories.map((category, index) => (
                  <label key={index} className="label text-[15px] text-black">
                    <input
                      type="checkbox"
                      value={category}
                      onChange={e => {
                        const value = e.target.value;
                        const checked = e.target.checked;

                        if (checked) {
                          setCategoryValue(value);
                        } else {
                          setCategoryValue([]);
                        }
                      }}
                      className="checkbox checkbox-xs rounded-full text-[#65a15a]"
                    />
                    {category}
                  </label>
                ))}
              </form>
            </section>
          </aside>

          <section className="col-span-full lg:col-span-9">
            <div className="bg-[#f0f3f0] p-4 rounded-md flex justify-between items-center">
              <form className="flex items-center gap-4">
                <label
                  htmlFor="my-drawer-5"
                  className="drawer-button btn border-0 bg-[#00a63e] text-white rounded-md lg:hidden "
                >
                  <ListFilter /> Filter
                </label>

                <label className="input input-sm outline-0 rounded-full bg-transparent hidden lg:flex">
                  <Search size={18} className="text-gray-500"></Search>
                  <input type="search" placeholder="Search plants" />
                </label>
              </form>

              <div className="">
                <p className="text-gray-600 font-medium text-sm">Sort by:</p>
              </div>
            </div>

            {/* Content */}
            <section className="mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-2 gap-4">
              {plants
                ? plants.map((plant, index) => (
                    <Plant plant={plant} key={index}></Plant>
                  ))
                : ''}
            </section>
          </section>
        </section>
      </Container>
    </>
  );
};

export default Plants;
