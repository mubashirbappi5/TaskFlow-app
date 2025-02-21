import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/AddTask";


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
      },
      {
        path:'/add-task',
        element:<PrivateRoute><AddTask/></PrivateRoute>

      }
    ]
    },

  ]);

  export default MainRoute;