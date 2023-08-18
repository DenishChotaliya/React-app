import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Header from "./Comman/Header";
const Mainroutr = createBrowserRouter([
    {
        path : "/",
        element :<> <Home/><Header/></>
    },
    {
        path : "/About",
        element :<><About/><Header/></>
    },
    {
        path : "/Product",
        element : <><Product/><Header/></>
    }
])
export default Mainroutr;