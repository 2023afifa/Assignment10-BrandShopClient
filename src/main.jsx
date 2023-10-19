import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorElement from './ErrorElement/ErrorElement.jsx';
import Home from './Components/Home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorElement></ErrorElement>,
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        // loader: 
      },
      {
        path: "/addproduct",
        // element: 
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
