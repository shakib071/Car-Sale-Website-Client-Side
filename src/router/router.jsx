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
        HydrateFallback: Loading,
      },
      {
        path: 'available-cars',
        element: <AvailableCars></AvailableCars>,
        loader: async () => await fetch('https://car-sale-web-server.vercel.app/allCars') ,
        HydrateFallback: Loading,
      },
      {
        path: 'my-cars/:id',
        element: <PrivateRouter><MyCars></MyCars></PrivateRouter>,
        loader: async ({params}) => await fetch(`https://car-sale-web-server.vercel.app/myCars/${params.id}`),
        HydrateFallback: Loading,
      },
      {
        path: 'add-car',
        element: <PrivateRouter><AddCar></AddCar></PrivateRouter>,
        HydrateFallback: Loading,
      },
      {
        path: 'my-booking',
        element: <PrivateRouter><MyBooking></MyBooking></PrivateRouter>,
        HydrateFallback: Loading,
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