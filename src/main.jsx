import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/layout.jsx';
import Home from './layout/Pages/Home/Home.jsx';
import AllProperties from './layout/Pages/AllProperties/AllProperties.jsx';
import Details from './layout/Pages/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "all_properties",
        element: <AllProperties></AllProperties>
      },
      {
        path: "details/:id",
        element: <Details></Details>,
        // loader: ({params}) => fetch('property.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
