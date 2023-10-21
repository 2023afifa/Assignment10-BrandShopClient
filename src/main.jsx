import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from './ErrorElement/ErrorElement.jsx';
import Home from './Components/Home.jsx';
import AddProduct from './Components/AddProduct.jsx';
import AddCards from './Components/AddCards.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Details from './Components/Details.jsx';
import MyCart from './Components/MyCart.jsx';
import Update from './Components/Update.jsx';
import PrivateRoute from './Routes/PrivetRoute.jsx';


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
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/brands"),
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/brands/${params.id}`),
      },
      {
        path: "/mycart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/cart"),
      },
      {
        path: "/addproduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
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
