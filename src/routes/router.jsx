
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import CategoryNews from "../Pages/CategoryNews";
import Loading from "../Pages/Loading";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
import NewsDetails from "../Pages/NewsDetails";

 

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
         path: "/login",
         Component: Login
      },
      {
         path: "/signup",
         Component: Register
      },
      {
        path: "/category/:plantId",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/treeData.json"),
         hydrateFallbackElement: <Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <Login></Login>,
      },
      {
        path: '/auth/register',
        element: <Register></Register>,
      }
    ]
  },
  {
    path: "/news-details/:plantId",
    element: <PrivateRoute>
               <NewsDetails></NewsDetails>
            </PrivateRoute>,
    loader: () => fetch('/treeData.json'),
    hydrateFallbackElement: <Loading></Loading>
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);

export default router;
