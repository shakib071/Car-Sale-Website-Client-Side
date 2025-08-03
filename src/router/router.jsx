import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";

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
      }
    ]
  },

  {
    path:'*',
    element: <Error></Error>,
  }
]);


export default router;