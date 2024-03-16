import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from './ErrorElement/ErrorElement.jsx';
import Home from './Components/Home/Home.jsx';
import AddProduct from './Components/AddProduct/AddProduct.jsx';
import AddCards from './Components/AddCards/AddCards.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Details from './Components/Details/Details.jsx';
import MyCart from './Components/MyCart/MyCart.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import Popular from './Components/PopularItems/Popular.jsx';
import 'alpinejs';
// import Update from './Components/Update.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/brands/:brand",
        element: <AddCards></AddCards>,
        loader: () => fetch("https://brand-server-nine.vercel.app/brands"),
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://brand-server-nine.vercel.app/brands/${params.id}`),
      },
      // {
      //   path: "/update/:id",
      //   element: <PrivateRoute><Update></Update></PrivateRoute>,
      //   loader: ({ params }) => fetch(`https://brand-server-nine.vercel.app/brands/${params.id}`),
      // },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("https://brand-server-nine.vercel.app/cart"),
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/loved",
        element: <Popular></Popular>,
        loader: () => fetch("https://brand-server-nine.vercel.app/cart"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
