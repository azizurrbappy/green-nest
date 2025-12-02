import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import PlantDetails from '../Pages/PlantDetails';
import Plants from '../Pages/Plants';
import Loading from '../Components/Loading/loading';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import Profile from '../Pages/Profile';
import AboutUs from '../Pages/AboutUs';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        HydrateFallback: Loading,
        loader: async () => {
          const res = await fetch('../plants.json');
          return res.json();
        },
      },
      {
        path: '/plant/:id',
        element: (
          <PrivetRoute>
            <PlantDetails></PlantDetails>
          </PrivetRoute>
        ),
        HydrateFallback: Loading,
        loader: async () => {
          const res = await fetch('../plants.json');
          return res.json();
        },
      },
      {
        path: '/plants',
        element: <Plants></Plants>,
        HydrateFallback: Loading,
        loader: async () => {
          const res = await fetch('../plants.json');
          return res.json();
        },
      },
      {
        path: '/auth/signup',
        element: <Signup></Signup>,
      },
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/profile',
        element: (
          <PrivetRoute>
            <Profile></Profile>
          </PrivetRoute>
        ),
      },
      {
        path: '/about-us',
        element: <AboutUs></AboutUs>,
      },
    ],
  },
]);
