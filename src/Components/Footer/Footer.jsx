import React from 'react';
import Container from '../Container/Container';
import GreenNest from '../../assets/green-nest.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Pinterest from '../../assets/pinterest.png';
import { Link } from 'react-router';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F3F3F3] text-base-content p-10">
        <Container className="footer sm:footer-horizontal">
          <aside>
            <Link to="/" className="flex items-center gap-1.5">
              <img src={GreenNest} alt="" className="w-13" />
              <h2 className="text-2xl font-bold">
                <span className="text-[#65A15A]">Green</span>Nest
              </h2>
            </Link>

            <p className="text-[#777] w-80">
              Green Nest is your peaceful corner of nature, designed to bring
              calm and freshness into your everyday life. From cozy plant setups
              to easy-care greens, it's where comfort and nature beautifully
              meet.
            </p>
            <div className="flex items-center gap-6 mt-2">
              <a href="https://instagram.com">
                <img src={Instagram} alt="Instagram" className="w-7" />
              </a>
              <a href="https://facebook.com">
                <img src={Facebook} alt="Facebook" className="w-7" />
              </a>
              <a href="https://youtube.com">
                <img src={Pinterest} alt="Youtube" className="w-7" />
              </a>
            </div>
          </aside>
          <nav>
            <h6 className="footer-title text-green-800">Quick Links</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/plants" className="link link-hover">
              All Plants
            </Link>
            <Link to="/about-us" className="link link-hover">
              About Us
            </Link>
            <Link to="/about-us" className="link link-hover">
              Services
            </Link>
            <Link to="/about-us" className="link link-hover">
              Contact Us
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title text-green-800">Contact</h6>
            <Link to="/about-us" className="link link-hover">
              About Us
            </Link>
            <Link to="/about-us" className="link link-hover">
              Contact Us
            </Link>
          </nav>
          <nav className="max-w-50">
            <h6 className="footer-title text-green-800">Get In Touch</h6>
            <div className="flex items-start gap-2">
              <div className="p-1.5 h-fit border border-[#65a15a] rounded-full">
                <MapPin color="#65a15a" size={18} />
              </div>
              <p>
                393/1 Insaf Rosevally, Baganbari Rd, Thakurpara, Comilla - 3500,
                Bangladesh
              </p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 h-fit border border-[#65a15a] rounded-full">
                <Mail color="#65a15a" size={18} />
              </div>
              <p>azizurr.bappy@gmail.com</p>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-1.5 h-fit border border-[#65a15a] rounded-full">
                <Phone color="#65a15a" size={18} />
              </div>
              <p>+880 1805116310</p>
            </div>
          </nav>
        </Container>
      </footer>
      <div className="footer sm:footer-horizontal footer-center bg-[#2a2a2aed] text-white p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            GreenNest
          </p>
        </aside>
      </div>
    </>
  );
};

export default Footer;
