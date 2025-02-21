import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";


  const MainRoute = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path:'/',
        element:<PrivateRoute><Home/></PrivateRoute>
      },
      {
        path:'/login',
        element:<Login/>
      }
    ]
    },
  ]);

  export default MainRoute;