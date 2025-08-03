import {
  createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Error from "../Error/Error";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>
  },

  {
    path:'*',
    element: <Error></Error>,
  }
]);


export default router;