import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/AddTask";
import UpdateTask from "../Pages/UpdateTask";


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

      },
      {
        path:'/updateTask/:id',
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/tasks/${params.id}`
          ),
        element:<PrivateRoute><UpdateTask/></PrivateRoute>

      }
    ]
    },

  ]);

  export default MainRoute;