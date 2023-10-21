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
import Gucci from './Components/Gucci.jsx';
// import Prada from './Components/Prada.jsx';
// import LV from './Components/LV.jsx';
// import Chanel from './Components/Chanel.jsx';
// import Versace from './Components/Versace.jsx';
// import Dior from './Components/Dior.jsx';


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
      // {
      //   path: "/brands/:brand",
      //   element: <Gucci></Gucci>,
      //   loader: () => fetch("http://localhost:5000/brands")
      // },
      // {
      //   path: "/prada",
      //   element: <Prada></Prada>,
      //   loader: () => fetch("http://localhost:5000/brands")
      // },
      // {
      //   path: "/lv",
      //   element: <LV></LV>,
      //   loader: () => fetch("http://localhost:5000/brands")
      // },
      // {
      //   path: "/chanel",
      //   element: <Chanel></Chanel>,
      //   loader: () => fetch("http://localhost:5000/brands")
      // },
      // {
      //   path: "/versace",
      //   element: <Versace></Versace>,
      //   loader: () => fetch("http://localhost:5000/brands")
      // },
      // {
      //   path: "/dior",
      //   element: <Dior></Dior>,
      //   loader: () => fetch("http://localhost:5000/brands")
      // },
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
