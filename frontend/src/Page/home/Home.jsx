import React from "react";
import Categories from "../../Components/Home/Categories";
import Footer from "../../Components/Home/Footer";

import Newsletter from "../../Components/Home/Newsletter";
import Products from "../../Components/Home/Products";
import Slider from "../../Components/Home/Slider";
import Navbar1 from './../../Components/Home/Navbar';

const Home = () => {
  return (
    <div className="w-full h-full">
      <Navbar1 />
      <div className="">
        <Slider style={{ margin: "80px" }} />
        {/* <Categories /> */}
        <Products />
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
