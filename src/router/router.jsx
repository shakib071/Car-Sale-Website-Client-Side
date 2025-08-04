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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true ,
        element: <Home></Home>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'available-cars',
        element: <PrivateRouter><AvailableCars></AvailableCars></PrivateRouter>,
      },
      {
        path: 'my-cars',
        element: <PrivateRouter><MyCars></MyCars></PrivateRouter>
      },
      {
        path: 'add-car',
        element: <PrivateRouter><AddCar></AddCar></PrivateRouter>
      },
      {
        path: 'my-booking',
        element: <PrivateRouter><MyBooking></MyBooking></PrivateRouter>
      }
    ]
  },

  {
    path:'*',
    element: <Error></Error>,
  }
]);


export default router;