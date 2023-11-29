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
import DashboardLayout from './DashboardLayout/DashboardLayout.jsx';
// import tanstack 
import {
  QueryClient,
  QueryClientProvider,
  // useQuery,
} from '@tanstack/react-query'
import Wishlist from './DashboardLayout/Dash_Pages/UserDashboard/Wishlist/Wishlist.jsx';
import MakeAnOffer from './DashboardLayout/Dash_Pages/MakeAnOffer/MakeAnOffer.jsx';
import Property_bought from './DashboardLayout/Dash_Pages/UserDashboard/Property_bought/Property_bought.jsx';
import UserProfile from './DashboardLayout/Dash_Pages/UserDashboard/userProfile/userProfile.jsx';
import ManageUsers from './DashboardLayout/Dash_Pages/AdminDashboard/ManageUsers/ManageUsers.jsx';
import AddFood from './DashboardLayout/Dash_Pages/AgentDashboard/AddProperty/AddProperty.jsx';
import AddProperty from './DashboardLayout/Dash_Pages/AgentDashboard/AddProperty/AddProperty.jsx';
import AdminRoute from './PrivateRoutes/AdminRoute.jsx';
import MyAddedProperties from './DashboardLayout/Dash_Pages/AgentDashboard/MyAddedProperties/MyAddedProperties.jsx';
import UpdateProperty from './DashboardLayout/Dash_Pages/AgentDashboard/MyAddedProperties/UpdateProperty.jsx';
import RequestedProperties from './DashboardLayout/Dash_Pages/AgentDashboard/RequestedProperties/RequestedProperties.jsx';
import Payment from './DashboardLayout/Dash_Pages/Pyment/Payment.jsx';
import ManageProperties from './DashboardLayout/Dash_Pages/AdminDashboard/ManageProperties/ManageProperties.jsx';
import MyReviews from './DashboardLayout/Dash_Pages/UserDashboard/MyReviews/MyReviews.jsx';
import ManageReviews from './DashboardLayout/Dash_Pages/AgentDashboard/ManageReviews/ManageReviews.jsx';

const queryClient = new QueryClient()


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
  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: 'wishlist',
        element:<Wishlist></Wishlist>
      },
      {
        path: 'wishlist/makeOffer/:id',
        element: <MakeAnOffer></MakeAnOffer>
      },
      {
        path: 'property_bought',
        element: <Property_bought></Property_bought>
      },
      {
        path: 'user_profile',
        element: <UserProfile></UserProfile>
      },
      {
        path: 'property_bought/payment/:id',
        element: <Payment></Payment>
      },

      // Agent routes starts here
      {
        path: 'add_property',
        element: <AddProperty></AddProperty>
      },
      {
        path: 'myAddedProperties',
        element: <MyAddedProperties></MyAddedProperties>
      },
      {
        path: 'myAddedProperties/updateProperty/:id',
        element: <UpdateProperty></UpdateProperty>
      },
      {
        path: 'requestedProperties',
        element: <RequestedProperties></RequestedProperties>
      },
      // Admin routes starts here
      {
        path: 'manage_users',
        element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        // element: <ManageUsers></ManageUsers>
      },
      {
        path: 'manageProperties',
        element: <ManageProperties></ManageProperties>
      },
      {
        path: 'myReviews',
        element: <MyReviews></MyReviews>
      },
      {
        path: 'manageReviews',
        element: <ManageReviews></ManageReviews>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
)
