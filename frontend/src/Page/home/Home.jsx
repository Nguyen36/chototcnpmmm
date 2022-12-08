import React, { useEffect } from "react";
import Categories from "../../Components/Home/Categories";
import Footer from "../../Components/Home/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Newsletter from "../../Components/Home/Newsletter";
import Products from "../../Components/Home/Products";
import Slider from "../../Components/Home/Slider";
import Navbar1 from "./../../Components/Home/Navbar";
import { loginUserGoogle } from "../../redux/apiRequest";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // useEffect(()=>{
  //   fetch('http://localhost:8000/login/auth').then((res)=>console.log(res)).catch((err)=>{})
  // },[])
  return (
    <div className="w-full h-full">
      <Navbar1 />
      <ToastContainer/>
      <div className="">
        <Slider style={{ margin: "80px" }} />
        <Categories />
        <Products />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
