import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Users from "../components/Users";
import Users2 from "../components/Users2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(" https://coffee-store-server-chi-lime.vercel.app/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            ` https://coffee-store-server-chi-lime.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () =>
          fetch(" https://coffee-store-server-chi-lime.vercel.app/users"),
      },
      {
        path: "/users2",
        element: <Users2 />,
        
      },
    ],
  },
]);
export default router;


// https://coffee-store-server-chi-lime.vercel.app
