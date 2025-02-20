import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";


  const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path:'/',
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
    },
  ]);

  export default MainRoute;