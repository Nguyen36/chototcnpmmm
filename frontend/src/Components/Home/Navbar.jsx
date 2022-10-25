import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  Nav,
  NavDropdown,
  Navbar,
  Form,
  FormControl,
  Container,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../../redux/apiRequest";

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import{ ShoppingCart} from "@material-ui/icons";
const Button = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  cursor: pointer;
  border-radius: 10px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
`;

const Navbar1 = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken);
  };

  const cart = useSelector((state) => state.cart.carts?.allCart);
  return (
    // {`ROLE: ${user?.role === "2" ? "seller" : "customer"}`}
    <div style={{ position: "fixed", zIndex: "10", width: "100%" }}>
      <AppBar position="static" className="bg-gradient-to-r from-pink-500 to-yellow-500">
       
        <Toolbar className="flex justify-around p-3">
          <div className="flex gap-4 items-center">
          <div className="w-[50px] h[50px] ">
              <img className="object-fill w-full h-full rounded-md" src="https://media.istockphoto.com/vectors/trading-financial-vector-logo-candlestick-trading-trading-stock-vector-id1312439382"></img>
            </div>       
            <Typography variant="h4" classnames="select-none">
              Chợ tốt</Typography>
          </div>
          <div className="ml-[20px] flex justify-between gap-10">
            <Link to = "/" className="text-[20px]">Home</Link>
            <Link to = "/category/xe-tay-ga" className="text-[20px]">Xe tay ga</Link>
            <Link to = "/category/xe-so" className="text-[20px]">Xe số</Link>
            <Link to = "/cart" className="text-[20px]">
              <ShoppingCart></ShoppingCart>
              Cart</Link>
              {user ? (
                <div>
                   <Link to = {`/myprofile/${user?.slug}`} className="text-[20px]"> My Profile</Link>
                   <Link to = {`/myorder/${user?.slug}`} className="text-[20px]"> My Orders</Link>
                   <Link to="/logout" onClick={handleLogout} style={{ textDecoration: "none" }}>Logout</Link>
                </div>
              ):(
      <div>
                  <Link to = {`/myprofile/${user?.slug}`} className="text-[20px]">Login</Link>
      </div>
              )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar1;
