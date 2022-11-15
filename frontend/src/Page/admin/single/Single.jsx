import "./single.scss";

import Sidebar from "../../../Components/admin/sidebar/Sidebar";
import Navbar from "../../../Components/admin/navbar/Navbar";
import Chart from "../../../Components/admin/chart/Chart";
import List from "../../../Components/admin/table/Table";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { get1 } from "../../../redux/apiRequest";

const Single = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
  const selectedUser = useSelector((state) => state.user.users?.allUsers);
  const { userId } = useParams();
  // console.log(userId)

  //Load trang
  useEffect(() => {
    if (user.role !== "1") {
      navigate("/");
    }
    if (user?.accessToken) {
      get1(user?.accessToken, dispatch, userId);
      // getAllUsers(user?.accessToken,dispatch)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={selectedUser.image} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{selectedUser.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{selectedUser.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{selectedUser.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
