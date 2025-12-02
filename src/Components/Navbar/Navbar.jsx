import React, { useContext } from 'react';
import { RiMenu2Line } from 'react-icons/ri';
import Container from '../Container/Container';
import { Link, NavLink } from 'react-router';
import GreenNest from '../../assets/green-nest.png';
import { AuthContext } from '../../AuthContext/AuthContext';
import AsideProfile from './AsideProfile';

const Navbar = () => {
  const { user, loading } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/plants">Plants</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );

  return (
    <>
      <div className="bg-base-100 shadow-sm w-full fixed top-0 z-50">
        <Container className="navbar max-sm:px-4">
          <div className="navbar-start">
            <div className="dropdown space-x-3">
              <div
                tabIndex={0}
                role="button"
                className="cursor-pointer lg:hidden"
              >
                <RiMenu2Line size={19} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow nav-links font-semibold space-y-3"
              >
                {links}
              </ul>
            </div>
            <Link to="/" className="flex items-center gap-1.5">
              <img src={GreenNest} alt="" className="w-10" />
              <h2 className="text-xl font-bold">
                <span className="text-[#65A15A]">Green</span>Nest
              </h2>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-3.5 px-1 font-semibold nav-links">
              {links}
            </ul>
          </div>
          <div className="navbar-end">
            {loading ? (
              <div className="skeleton h-10 w-10 rounded-full"></div>
            ) : user ? (
              <AsideProfile></AsideProfile>
            ) : (
              <Link
                to="/auth/login"
                className="btn bg-[#65A15A] text-white border-0 font-medium px-6 h9"
              >
                Login
              </Link>
            )}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
