import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Login from './page/Login.jsx';
import Footer from './component/Footer.jsx';
import Nav from './component/Nav.jsx';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path: "/login",
    element:<Login />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
