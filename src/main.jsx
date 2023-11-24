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
import Provider from './Provider/Provider.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';


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
        path: "all_properties/details/:id",
        element: <Details></Details>,
        loader: ({ params }) => fetch(`http://localhost:5000/property/${params.id}`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
