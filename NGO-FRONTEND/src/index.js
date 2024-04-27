import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import Home from "./Components/Home/Home"
import ErrorPage from "./error-page";
// import App from "./App";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Donate from "./Components/Donate/Donate";
import NextPage from "./Components/NextPage";
import '@fortawesome/fontawesome-free/css/all.css';
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import Services from "./Components/Services/Services";
import Gallery from "./Components/Gallery/Gallery";
import VolunteerForm from "./Components/VolunteerForm/VolunteerForm"
import DonationForm from "./Components/DonationForm/Form";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<ErrorPage />
  },
  {
    path:"/DonationForm",
    element:<DonationForm />
  },
  {
    path:"/About",
    element:<About />
  },
  {
    path:"/Contact",
    element:<Contact />
  },
  {
    path:"/Donate",
    element:<Donate />
  },
  {
    path:"/Nextpage",
    element:<NextPage />
  },
  {
    path:"/Footer",
    element:<Footer />
  },
  {
    path:"/Blog",
    element:<Blog />
  },
  {
    path:"/Services",
    element:<Services />
  },
  {
    path:"/Gallery",
    element:<Gallery />
  },
  {
    path:"/VolunteerForm",
    element:<VolunteerForm />
  }


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);