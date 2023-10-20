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


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
    element: <App></App>,
    loader: () => fetch("http://localhost:5000/brands"),
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
        path: "/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      }
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
