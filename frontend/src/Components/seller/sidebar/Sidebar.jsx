import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

//import { useContext } from "react";O
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate,useHistory } from "react-router-dom";
import { logOut } from "../../../redux/apiRequest";
const Sidebar = () => {
  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken
  const accessToken = user?.accessToken;
  const id = user?._id;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    logOut(dispatch, id, navigate, accessToken);
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">SENKI</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <Link to="/seller" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/seller/users" style={{ textDecoration: "none" }}></Link>
          <Link to="/seller/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Mặt hàng đăng bán</span>
            </li>
          </Link>
          <Link to="/seller/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Đơn bán</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <Link to={`/myprofile/${user?.slug}`}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Thông tin cá nhân</span>
            </li>
          </Link>

          <Link
            to="/"
            onClick={handleLogout}
            style={{ textDecoration: "none" }}
          >
            <li>
              <ExitToAppIcon className="icon" />
              <span>Đăng xuất</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
