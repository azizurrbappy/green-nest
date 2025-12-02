import React from 'react';
import Container from '../Container/Container';
import { Link } from 'react-router';

const ContactUs = () => {
  return (
    <>
      <section className="mt-30 px-4 bg-[#f0f3f0] py-15">
        <Container className="text-center">
          <h2 className="text-2xl font-semibold mb-5">
            Transform Your Space with the Help of Our{' '}
            <br className="max-sm:hidden" /> Plant Experts
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Bring your home to life with expert guidance and handpicked greenery
            designed to suit your space and style. Whether you're refreshing a
            single room or creating a plant-filled sanctuary, we're here to help
            every step of the way.
          </p>
          <Link
            to="/contact-us"
            className="bg-[#65a15a] py-3 px-4 rounded-xl text-white font-medium"
          >
            Contact Us
          </Link>
        </Container>
      </section>
    </>
  );
};

export default ContactUs;
