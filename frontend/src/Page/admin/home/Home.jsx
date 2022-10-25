import Sidebar from "../../../Components/admin/sidebar/Sidebar";
import Navbar from "../../../Components/admin/navbar/Navbar";
import Widget from "../../../Components/admin/widget/Widget";
import Featured from "../../../Components/admin/featured/Feature";
import Chart from "../../../Components/admin/chart/Chart";
import Table from "../../../Components/admin/table/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import React from "react";
import "./home.scss";

const Home = () => {
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);

  // const notify = () => {

  //   toast.success("Success Notification !", {

  //   });

  //   toast.error("Error Notification !", {

  //   });

  // }
  useEffect(() => {
    if (user === null || user?.role !== "1") {
      navigate("/");
    }
  });
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {/* <button onClick={notify}>Notify !</button> */}

        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
