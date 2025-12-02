import React, { useContext, useState } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { Link } from 'react-router';

const AsideProfile = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    userSignOut();
  };

  return (
    <>
      {user ? (
        <div className="relative">
          {user.photoURL ? (
            <img
              onClick={() => setToggle(!toggle)}
              src={user.photoURL}
              alt=""
              className="w-10 h-10 rounded-full border-2 border-[#65A15A] cursor-pointer"
            />
          ) : (
            <div className="skeleton h-10 w-10 rounded-full"></div>
          )}

          <ul
            className={`w-52 py-3 px-3 z-50 bg-[#F8F8F8] shadow-md absolute right-0 top-14 rounded-md space-y-2 ${
              toggle || 'hidden'
            }`}
          >
            <p className="text-sm text-center text-[#013720] font-medium">
              {user.displayName}
            </p>
            <li>
              <Link
                to="/profile"
                className="text-sm font-medium hover:text-[#65A15A] duration-100"
              >
                Profile
              </Link>
            </li>
            <li>
              <Link
                onClick={handleLogout}
                className="text-sm font-medium hover:text-[#65A15A] duration-100"
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="skeleton h-10 w-10 rounded-full"></div>
      )}
    </>
  );
};

export default AsideProfile;
