import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  return (
    <>
      <section className="flex flex-col h-screen">
        <Navbar></Navbar>
        <section className="flex-1 mt-15">
          <Outlet></Outlet>
        </section>
        <Footer></Footer>
      </section>
    </>
  );
};

export default MainLayout;
