import React from "react";
import { Button } from "react-bootstrap";
import Categories from "../../Components/Home/Categories";
import Footer from "../../Components/Home/Footer";

import Newsletter from "../../Components/Home/Newsletter";
import Products from "../../Components/Home/Products";
import Slider from "../../Components/Home/Slider";
import Navbar1 from "./../../Components/Home/Navbar";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  

  return (
    <div className="w-full h-full">
      <Navbar1 />
      <ToastContainer/>

      <div className="">
        <Slider style={{ margin: "80px" }} />

        <Categories />

        <Products />
        <Newsletter />
       
      </div>
      <Footer />
    </div>
  );
};

export default Home;
