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
import { ShoppingCart } from "@material-ui/icons";
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
      <AppBar
        position="static"
        className="bg-gradient-to-r from-pink-500 to-yellow-500"
      >
        <Toolbar className="flex justify-between p-3">
          <div className="flex gap-4 items-center" style={{marginLeft:40}}>
            <div className="w-[100px] h[100px] ">
              <img
                className="object-fill w-full h-full rounded-md"
                alt=""
                src="https://static.chotot.com/storage/default/transparent_logo.webp"
              ></img>
            </div>
            {/* <Typography variant="h5" classnames="select-none">
              Chợ tốt
            </Typography> */}
          </div>
          <div className="ml-[20px] flex justify-between gap-10" style={{marginRight:80}}>
            <Link to="/" className="text-[20px]">
              Trang chủ
            </Link>
            
            <Link to="/cart" className="text-[20px]">
              <ShoppingCart></ShoppingCart>
              Giỏ hàng
            </Link>
            {user ? (
              <div>
                <Link to={`/myprofile/${user?.slug}`} className="text-[20px]">
                  {" "}
                  My Profile
                </Link>
                <Link to={`/myorder/${user?.slug}`} className="text-[20px]">
                  {" "}
                  My Orders
                </Link>
                <Link
                  to="/logout"
                  onClick={handleLogout}
                  style={{ textDecoration: "none" }}
                >
                  Logout
                </Link>
              </div>
            ) : (
              <div>
                <Link to={`/myprofile/${user?.slug}`} className="text-[20px]">
                  Đăng nhập
                </Link>
              </div>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar1;
