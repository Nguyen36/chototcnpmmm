import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { logOut } from "../../redux/apiRequest";
import "./navbar.scss";
import Form from "react-bootstrap/Form";
import { loginUser } from "../../redux/apiRequest";
import { AppBar, Icon, Toolbar } from "@material-ui/core";
import { PhotoCamera, ShoppingCart } from "@material-ui/icons";
import { useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { styled as styled1, alpha } from "@material-ui/core/styles";
import { InputBase } from "@material-ui/core";
import { IconButton, Button } from "@material-ui/core";
const Search = styled1("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white !important",
  "&:hover": {
    backgroundColor: "white !important",
  },
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled1("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled1(InputBase)(({ theme }) => ({
  color: "inherit",
  backgroundColor: "white",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

// const Button = styled.button`
//   padding: 10px 25px;
//   font-size: 15px;
//   font-weight: 500;
//   color: #ffffff;
//   cursor: pointer;
//   border-radius: 10px;
//   background-image: linear-gradient(
//     to right,
//     #00d2ff 0,
//     #1fa5ea 51%,
//     #3a7bd5 100%
//   );
//   border: 1px solid transparent;
//   text-transform: uppercase;
// `;

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.2);
`;

const Navbar1 = () => {
  const UserToken = JSON.parse(localStorage.getItem("userInfo")) || {};
  const user =
    useSelector((state) => state.auth.login.currentUser) || UserToken;
  const [show, setShow] = useState(false);
  const [keyword, setKeyword] = useState();
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken);
  };
  const handleNavigate = (name) => {
    let url = window.location.hostname;
    return navigate(`${url}/${name}`);
  };
  const handleSearch = (key) => {
    navigate(`/search?query=${key}`);
  };
  const cart = useSelector((state) => state.cart.carts?.allCart);
  return (
    // {`ROLE: ${user?.role === "2" ? "seller" : "customer"}`}
    <div style={{ position: "fixed", zIndex: "10", width: "100%" }}>
      <AppBar position="static" style={{ background: "#000" }}>
        <Toolbar className="flex justify-between p-3">
          <div
            className="flex gap-4 items-center"
            style={{ marginLeft: 40, textDecoration: "none" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="w-[100px] h[100px] ">
                <img
                  className="object-fill w-full h-full rounded-md"
                  alt=""
                  src="https://res.cloudinary.com/dddmdgm0w/image/upload/v1668259219/tiki_avatar/senki-low-resolution-logo-white-on-transparent-background_hgzk0k.png"
                ></img>
              </div>
            </Link>
            <Search
              className="!bg-white !rounded-md "
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate(`/search?query=${keyword}`);
                }
              }}
            >
              <StyledInputBase
                onInput={(e) => {
                  setKeyword(e.target.value);
                  console.log(e.target.value);
                }}
                placeholder="Search..."
                inputProps={{
                  "aria-label": "search",
                  style: {
                    paddingLeft: "10px",
                    color: "black",
                    opacity: "0.7",
                  },
                }}
              ></StyledInputBase>
              <IconButton
                aria-label="search"
                onClick={() => {
                  navigate(`/search?query=${keyword}`);
                }}
              >
                <SearchIcon style={{ color: "black" }} />
              </IconButton>
            </Search>
            <IconButton
              onClick={() => {
                navigate("/imagesearch");
              }}
            >
              <PhotoCamera style={{ color: "white" }} />
            </IconButton>
            {/* <Typography variant="h5" classnames="select-none">
              Chợ tốt
            </Typography> */}
          </div>

          <div
            className="ml-[20px] flex justify-between gap-10"
            style={{ marginRight: 100 }}
          >
            <Link
              to="/"
              className="text-[20px]"
              style={{ textDecoration: "none", color: "white !important" }}
            >
              Trang chủ
            </Link>

            <Link
              to="/cart"
              className="text-[20px]"
              style={{ textDecoration: "none" }}
            >
              <ShoppingCart></ShoppingCart>
              Giỏ hàng
            </Link>
            {user.username ? (
              <div
                className="relative flex items-center"
                onMouseEnter={(e) => setShow(true)}
                onMouseLeave={(e) => setShow(false)}
              >
                <div className="w-[24px] h-[24px]">
                  <img
                    src={user.image ? user.image : 'https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-hai-1.jpg?ssl=1'}
                    className="w-full h-full rounded-full"
                    alt=""
                  ></img>
                </div>
                {show && (
                  <div className="w-[200px] h-auto absolute top-8 right-0 rounded-lg z-10 bg-[#11101D]">
                    <Link
                      to={`/myprofile/${user?.slug}`}
                      style={{ textDecoration: "none" }}
                      className="text-[17px] flex m-2  hover:opacity-60 rounded-lg"
                    >
                      {" "}
                      Thông tin cá nhân
                    </Link>
                    <Link
                      to={`/myorder/${user?.slug}`}
                      style={{ textDecoration: "none" }}
                      className="text-[17px] flex m-2  hover:opacity-60 rounded-lg"
                    >
                      {" "}
                      Quản lý đơn mua
                    </Link>
                    <Link
                      to={`/seller/products/new`}
                      style={{ textDecoration: "none" }}
                      className="text-[17px] flex m-2  hover:opacity-60 rounded-lg"
                    >
                      Đăng tin
                    </Link>
                    <Link
                      to={`/myprofile/favorite/${user?.slug}`}
                      style={{ textDecoration: "none" }}
                      className="text-[17px] flex m-2  hover:opacity-60 rounded-lg"
                    >
                      Tin đăng đã lưu
                    </Link>
                    <div
                      onClick={handleLogout}
                      className="text-[17px] flex m-2  hover:opacity-60 rounded-lg !text-white cursor-pointer"
                      style={{ textDecoration: "none" }}
                    >
                      Đăng xuất
                    </div>
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
