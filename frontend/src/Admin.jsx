

import {  Route, Routes} from "react-router-dom";

//import NavBar from "./Components/NavBar/NavBar";
//import { useState } from "react";

import Home from "./Page/admin/home/Home";
import List from'./Page/admin/list/List'
import ListOder from'./Page/admin/list/ListOder'
import ListProduct from'./Page/admin/list/ListProduct'
import Single from'./Page/admin/single/Single'
import SingleOder from'./Page/admin/single/SingleOder'

import New from'.//Page/admin/new/New'
import NewProduct from'.//Page/admin/new/NewProduct'
import {userInputs,productInputs} from './formSource'

const Admin = () => {
  return (
    
        <Routes>
          <Route path="/">
              <Route index element={<Home />} />
    
              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route
                  path="new"
                  element={<New  title="Add New User" action='new' />}
                />
                <Route
                  path="edit/:id"
                  element={<New  title="Update User" action='edit' />}
                />
              </Route>
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
export default Admin;