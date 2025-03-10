import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import PrivateRoute from "./PrivateRoute";
import AddTask from "../Pages/AddTask";
import UpdateTask from "../Pages/UpdateTask";
import Profile from "../Pages/Profile";
import Settings from "../Pages/Settings";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/add-task",
        element: (
          <PrivateRoute>
            <AddTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTask/:id",
        loader: ({ params }) =>
          fetch(`https://task-flow-server-theta.vercel.app/tasks/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateTask />
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",

        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/settings",
        element: (
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default MainRoute;
