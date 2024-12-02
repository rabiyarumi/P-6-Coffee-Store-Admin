import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Users from "../components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/coffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/signup",
        element: <SignUp/>
      },
      {
        path: "/users",
        element: <Users/>,
        loader: () => fetch("http://localhost:5000/users")
      }
    ],
  },
]);
export default router;
