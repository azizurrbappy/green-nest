import React from 'react';
import Container from '../Container/Container';
import GreenNest from '../../assets/green-nest.png';
import Facebook from '../../assets/facebook.png';
import Instagram from '../../assets/instagram.png';
import Pinterest from '../../assets/pinterest.png';

const Footer = () => {
  return (
    <>
      <footer className="bg-[#F3F3F3] text-base-content p-10">
        <Container className="footer sm:footer-horizontal">
          <aside>
            <img src={GreenNest} alt="" className="w-14" />
            <p className="text-[#777]">
              In general, dracaena care is relatively simple. <br /> Use our
              comprehensive care guide to discover <br /> more growing tips and
              tricks!
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
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </Container>
      </footer>
      <div className="footer sm:footer-horizontal footer-center bg-[#2A2A2A] text-white p-4">
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
