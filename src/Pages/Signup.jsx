import React, { useContext, useState } from 'react';
import Container from '../Components/Container/Container';
import { Link, useNavigate } from 'react-router';
import GreenNest from '../assets/green-nest.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../AuthContext/AuthContext';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
  const [passShow, setPassShow] = useState(false);
  const { createUser, updateUserProfile, googleSignIn, user } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const handelSignup = e => {
    e.preventDefault();
    const displayName = e.target.fullName.value;
    const photoURL = e.target.photoUrl.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Email and Password validation RegEx
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!emailRegex.test(email)) {
      return toast.error('Please enter a valid email address');
    }

    if (!passwordRegex.test(password)) {
      return toast.error(
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character'
      );
    }

    createUser(email, password)
      .then(res => {
        const user = res.user;

        updateUserProfile(user, displayName, photoURL);
        toast.success('Account has been created!');
        e.target.reset();
        navigate('/');
      })
      .catch(err => {
        return toast.error(err.message);
      });
  };

  const handleGoogleSignup = () => {
    googleSignIn()
      .then(res => {
        navigate('/');
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  return (
    <>
      <Container className="py-20 flex justify-center items-center">
        <div className="w-sm rounded-xl">
          <Link to="/" className="flex items-center gap-1.5 mx-auto w-fit">
            <img src={GreenNest} alt="" className="w-10" />
            <h2 className="text-xl font-bold">
              <span className="text-[#65A15A]">Green</span>Nest
            </h2>
          </Link>

          <form onSubmit={handelSignup}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 mt-3">
              <legend className="fieldset-legend text-base">Sign Up</legend>

              <label className="label">Full Name</label>
              <input
                type="text"
                required
                name="fullName"
                className="input outline-0 mb-2"
                placeholder="Type your name..."
              />

              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photoUrl"
                className="input outline-0 mb-2"
                placeholder="Paste photo url"
              />

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                required
                className="input outline-0 mb-2"
                placeholder="Email"
              />

              <label className="label">Password</label>
              <div className="relative">
                <input
                  type={passShow ? 'text' : 'password'}
                  name="password"
                  required
                  className="input outline-0 pr-10"
                  placeholder="Password"
                />
                <span
                  onClick={() => setPassShow(!passShow)}
                  className="absolute top-3 right-3.5 z-50 cursor-pointer text-gray-500"
                >
                  {passShow ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                </span>
              </div>

              <button className="btn btn-neutral mt-4 bg-[#65A15A] border-0 shadow-none text-white font-medium rounded-full mb-2">
                Signup
              </button>

              <Link
                to="/auth/login"
                className="text-center hover:underline text-sm"
              >
                Already have an account?{' '}
                <span className="text-[#65A15A]">Login</span>
              </Link>
            </fieldset>
          </form>

          <div className="flex w-xs mx-auto flex-col">
            <div className="divider text-gray-400">or</div>

            <button
              onClick={handleGoogleSignup}
              className="btn bg-white text-black border-[#e5e5e5] rounded-full"
            >
              <FcGoogle size={21} />
              Signup with Google
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;
