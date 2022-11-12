import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../../redux/apiRequest";
import "./navbar.scss";

import {
  AppBar,
  Toolbar
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
  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
  const [show,setShow] = useState(false)
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken);
  };
  const handleNavigate=(name)=>{
    let url=window.location.hostname
    return navigate(`${url}/${name}`)
  }
  const cart = useSelector((state) => state.cart.carts?.allCart);
  return (
    // {`ROLE: ${user?.role === "2" ? "seller" : "customer"}`}
    <div style={{ position: "fixed", zIndex: "10", width: "100%" }}>
      <AppBar
        position="static"
        style={{background:"#ffba00"}}
      >
        <Toolbar className="flex justify-between p-3">
          <div className="flex gap-4 items-center" 
          style={{marginLeft:40,textDecoration:"none"}}>
            <div className="w-[100px] h[100px] ">
              <img
                className="object-fill w-full h-full rounded-md"
                alt=""
                src="https://res.cloudinary.com/dddmdgm0w/image/upload/v1668259219/tiki_avatar/senki-low-resolution-logo-white-on-transparent-background_hgzk0k.png"
              ></img>
            </div>
            {/* <Typography variant="h5" classnames="select-none">
              Chợ tốt
            </Typography> */}
          </div>
          <div className="ml-[20px] flex justify-between gap-10" 
          style={{marginRight:100
          }}>
            <Link to="/" className="text-[20px]"
            style={{textDecoration:"none",color:'white !important'}}>
              Trang chủ
            </Link>
            
            <Link to="/cart" className="text-[20px]" style={{textDecoration:"none"}}>
              <ShoppingCart></ShoppingCart>
              Giỏ hàng

            </Link>
            {user.username ? (
          
              <div className="relative flex items-center" onMouseEnter={(e)=> setShow(true)} onMouseLeave={(e)=> setShow(false)}>
                
                <div className = "w-[24px] h-[24px]">
                  <img src='https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-hai-1.jpg?ssl=1' className="w-full h-full rounded-full"></img>
                </div>
                {show && (

                <div className ="w-[200px] h-auto absolute top-8 right-0 rounded-lg z-10 bg-[#11101D]">
                    <Link to={`/myprofile/${user?.slug}`} 
                    style={{ textDecoration: "none" }}
                    className="text-[17px] flex m-2  hover:opacity-60 rounded-lg">
                      {" "}
                      Thông tin cá nhân
                    </Link>
                    <Link to={`/myorder/${user?.slug}`} 
                    style={{ textDecoration: "none" }}
                    className="text-[17px] flex m-2  hover:opacity-60 rounded-lg">
                      {" "}
                      Quản lý đơn mua
                    </Link>
                    <Link to={`/seller/products/new`}
                    style={{textDecoration:"none"}}
                    className="text-[17px] flex m-2  hover:opacity-60 rounded-lg">
                      Đăng tin
                    </Link>
                    <Link
                      to="/logout"
                      onClick={handleLogout}
                      className="text-[17px] flex m-2  hover:opacity-60 rounded-lg text-gray-400" 
                      style={{ textDecoration: "none" }}
                    >
                      Đăng xuất
                    </Link>
                </div>
                )}
              </div>
            ) : (
              <div>
                <Link to={`/login`} className="text-[20px] no-underline">
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
