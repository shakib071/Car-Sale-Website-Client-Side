import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRouter from '../PrivateRouter/PrivateRouter';
import AvailableCars from '../AvailableCars/AvailableCars';
import MyCars from "../MyCars/MyCars";
import AddCar from "../AddCar/AddCar";
import MyBooking from "../MyBooking/MyBooking";
import Loading from "../Loading/Loading";
import CarDetails from "../CarDetails/CarDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    HydrateFallback: <Loading></Loading>,
    children: [
      {
        index: true ,
        element: <Home></Home>,
        HydrateFallback: <Loading></Loading>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
        HydrateFallback: <Loading></Loading>,
      },
      {
        path: 'available-cars',
        element: <AvailableCars></AvailableCars>,
        HydrateFallback: <Loading></Loading>,
      },
      {
        path: 'my-cars',
        element: <PrivateRouter><MyCars></MyCars></PrivateRouter>,
        HydrateFallback: <Loading></Loading>,
      },
      {
        path: 'add-car',
        element: <PrivateRouter><AddCar></AddCar></PrivateRouter>,
        HydrateFallback: <Loading></Loading>,
      },
      {
        path: 'my-booking',
        element: <PrivateRouter><MyBooking></MyBooking></PrivateRouter>,
        HydrateFallback: <Loading></Loading>,
      },
      {
        path: 'available-cars/car-details',
        element: <PrivateRouter><CarDetails></CarDetails></PrivateRouter>
      }
    ]
  },

  {
    path:'*',
    element: <Error></Error>,
  }
]);


export default router;