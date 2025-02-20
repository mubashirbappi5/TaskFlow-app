import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";


  const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path:'/',
        element:<Home/>
      }]
    },
  ]);

  export default MainRoute;