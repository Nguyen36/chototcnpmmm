import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

import {  useState } from "react";
import { axiosClient as axios } from '../../../api';



const Widget = ({ type }) => {
  let data;

  //temporary
  
  const diff = 20;

  const [userState,setUserState]=useState()
  const getLength=async() => {
    try{
        
      const  res= await axios.get("/user/getLength")
      setUserState(res.data)
    
   }catch(err){
     return err
   }
  }

  const getLengthProduct=async() =>{
    
    try{
        
        const res= await axios.get("/product/getLength")
        setUserState(res.data)
         
    }catch(err){
      return err
    }
  }
  const getLengthOder=async() =>{
    
    try{
        
        const res= await axios.get("/oder/getLength")
        setUserState(res.data)

    }catch(err){
      return err
    }
 }
 const getEarning=async() =>{
    
  try{
      
    const res= await axios.get("/oderdetail/all")
    const data = res.data
    let plus = data?.reduce(function (total, currentValue) {
      return total + currentValue.unit_price*currentValue.quantity
      }, 0);
    // console.log(plus)
      setUserState(plus)
  }catch(err){
    return err
  }
}

  switch (type) {
    case "user":
      getLength()
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
        amount:{userState}
      };
      break;
    case "order":
      getLengthOder()
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      getEarning()
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "balance":
      getLengthProduct()
      data = {
        title: "PRODUCTS",
        isMoney: false,
        link: "See details",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "VNĐ"} {userState}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
