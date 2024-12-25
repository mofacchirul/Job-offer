import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout/MainLayout';
import Resistance from './pages/Resistance/Resistance';
import AuthContext from './AuthContext/AuthContext';
import SIngIn from './pages/SIngIn/SIngIn';
import Home from './pages/Home/Home';
import { HelmetProvider } from 'react-helmet-async';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:"/resistance",
        element:<Resistance></Resistance>
      },
      {
        path:"/singIn",
        element:<SIngIn></SIngIn>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

<HelmetProvider>
<AuthContext>
<RouterProvider router={router} />
</AuthContext>
</HelmetProvider>

  </StrictMode>,
)
