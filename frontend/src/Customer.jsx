import { Route, Routes } from "react-router-dom";
import Login from "./Page/home/Login";
import Register from "./Page/home/Register";
//import Home from "./Page/home/Home";

//import NavBar from "./Components/NavBar/NavBar";
//import { Fragment, useState } from "react";
import Home from "./Page/home/Home";
import Cart from "./Page/home/Cart";
import CheckOut from "./Page/home/CheckOut";
import Product from "./Page/home/Product";
import ProductList from "./Page/home/ProductList";
import Caterogy1 from "./Page/home/Caterogy1";
import MyOder from './Page/home/MyOder'
import OderDetail from './Page/home/OderDetail'
import MyProfile from './Page/home/MyProfile'
import Confirmation from './Page/home/Confirmation'
import ConfirmEmail from './Page/home/ConfirmEmail'
import ImageSearch from "./Page/home/ImageSearch";

const Customer = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:slug" element={<Product />} />
      <Route path="/productlist" element={<ProductList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<CheckOut />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/category/:id" element={<Caterogy1 />} />
      <Route path="/myorder/:id" element={<MyOder />} />
      {/* <Route path="/myprofile/favorite/:id" element={} /> */}
      <Route path="/myorder/orderdetail/:id" element={<OderDetail />} />
      <Route path="/myprofile/:id" element={<MyProfile />} />
      <Route path="/confirm-email" element={<Confirmation />} />
      <Route path="/confirm-email/:id" element={<ConfirmEmail />} />
      <Route path="/imagesearch" element={<ImageSearch />} />

    </Routes>
  );
};
export default Customer;
