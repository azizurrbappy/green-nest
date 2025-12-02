import React, { useContext, useRef, useState } from 'react';
import Container from '../Components/Container/Container';
import { Link, useLocation, useNavigate } from 'react-router';
import GreenNest from '../assets/green-nest.png';
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext/AuthContext';

const Login = () => {
  const [passShow, setPassShow] = useState(false);
  const { userSignIn, forgetUser, googleSignIn, user } =
    useContext(AuthContext);
  const emailRef = useRef('');
  const location = useLocation();
  const from = location.state || '/';
  const navigate = useNavigate();

  // If user logged in
  // if (user) {
  //   return navigate('/');
  // }

  const handleSignIn = e => {
    e.preventDefault();

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

    userSignIn(email, password)
      .then(res => {
        e.target.reset();
        navigate(from);
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(res => {
        navigate(from);
      })
      .catch(err => {
        toast.error(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      return toast.error('Please enter a valid email address');
    }

    forgetUser(email)
      .then(() => {
        toast.success('Please check your email inbox or spam');
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

          <form onSubmit={handleSignIn}>
            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs mx-auto border p-4 mt-3">
              <legend className="fieldset-legend text-base">Login</legend>

              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                ref={emailRef}
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

                <button
                  type="button"
                  onClick={handleForgetPassword}
                  className="mt-2 text-right w-full cursor-pointer hover:text-[#65A15A]"
                >
                  Forget Password?
                </button>
              </div>

              <button
                type="submit"
                className="btn btn-neutral mt-4 bg-[#65A15A] border-0 shadow-none text-white font-medium rounded-full mb-2"
              >
                Login
              </button>

              <Link
                to="/auth/signup"
                className="text-center hover:underline text-sm"
              >
                Create an account?{' '}
                <span className="text-[#65A15A]">Signup</span>
              </Link>
            </fieldset>
          </form>
          <div className="flex w-xs mx-auto flex-col">
            <div className="divider text-gray-400">or</div>

            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-black border-[#e5e5e5] rounded-full"
            >
              <FcGoogle size={21} />
              Login with Google
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
