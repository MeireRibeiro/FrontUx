import React from 'react'
import ReactDOM from 'react-dom/client'
import PageHome from './pages/PageHome'
import PagePost from './pages/PagePost'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <PageHome />,
  },
  {
    path: "/post/:slug",
    element:  <PagePost />,
  }
]);
 
import 'bootstrap/dist/css/bootstrap.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>,
)
