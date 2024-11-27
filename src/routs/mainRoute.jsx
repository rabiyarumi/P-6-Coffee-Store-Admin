import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddCoffee from "../components/AddCoffee";
import UpdateCoffee from "../components/UpdateCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
        {
            path: "/addCoffee",
            element: <AddCoffee />,
        },
        {
            path: "/updateCoffee",
            element: <UpdateCoffee />,
        },
    ]
  },
]);
export default router;
