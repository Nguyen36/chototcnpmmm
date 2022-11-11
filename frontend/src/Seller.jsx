

import {  Route, Routes} from "react-router-dom";

//import NavBar from "./Components/NavBar/NavBar";
//import { useState } from "react";

import Home from "./Page/seller/home/Home";

import ListOder from'./Page/seller/list/ListOder'
import ListProduct from'./Page/seller/list/ListProduct'
import Single from'./Page/seller/single/Single'
import SingleOder from'./Page/seller/single/SingleOder'

import NewProduct from'./Page/seller/new/NewProduct'

const Seller = () => {
  return (
    
        <Routes>
          <Route path="/">
              <Route index element={<Home />} />
                 
              <Route path="products">
                <Route index element={<ListProduct />} />
                <Route path=":productId" element={<Single />} />
                <Route
                  path="new"
                  element={<NewProduct   title="Add New Product" action='new'/>}
                />
                <Route
                  path="edit/:productid"
                  element={<NewProduct  title="Update Product" action='edit' />}
                />
              </Route>
              <Route path="orders">
                <Route index element={<ListOder />} />
                <Route path=":orderId" element={<SingleOder />} />
                <Route
                  path="new"
                  element={<NewProduct   title="Add New Order" action='new'/>}
                />
                <Route
                  path="edit/:orderid"
                  element={<NewProduct  title="Update Order" action='edit' />}
                />
              </Route>
            </Route>
        </Routes>
      
       
  )
}
export default Seller;