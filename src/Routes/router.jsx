import { createBrowserRouter } from 'react-router';
import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import PlantDetails from '../Pages/PlantDetails';
import Plants from '../Pages/Plants';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import PrivetRoute from '../PrivetRoute/PrivetRoute';
import Profile from '../Pages/Profile';
import AboutUs from '../Pages/AboutUs';
import Services from '../Pages/Services';
import ContactUs from '../Pages/ContactUs';
import PageNotFound from '../Pages/PageNotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: '/plant/:id',
        element: (
          <PrivetRoute>
            <PlantDetails></PlantDetails>
          </PrivetRoute>
        ),
      },
      {
        path: '/plants',
        element: <Plants></Plants>,
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
      {
        path: '/services',
        element: <Services></Services>,
      },
      {
        path: '/contact-us',
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound></PageNotFound>,
  },
]);
