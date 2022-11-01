import "./single.scss";

import Sidebar from "../../../Components/seller/sidebar/Sidebar";
import Navbar from "../../../Components/seller/navbar/Navbar";

import List from "../../../Components/seller/table/Table";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { getFull } from "../../../redux/apiOder";




const Single = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const user = useSelector((state) => state.auth.login?.currentUser)
  const selectedOder = useSelector((state) => state.oder.full?.detail)
  const {orderId} = useParams()
 // console.log(userId)
 const [status, setStatus] = useState(selectedOder[0]?.oder_id.status)
 const a=selectedOder
 let plus = a?.reduce(function (total, currentValue) {
  return total + currentValue.product_id.price*currentValue.quantity
  }, 0);

  //Load trang
  useEffect(()=>{
     
    if(user?.accessToken){
      getFull(user?.accessToken,dispatch,orderId)
     // getAllUsers(user?.accessToken,dispatch)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 
  const handleEdit = ()=>{
    
  }

  return (
    <div>
    {selectedOder? (
      <>
     <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
           
            <h1 className="title">Information Customer</h1>
            <div className="item">
              <img
                src={selectedOder[0]?.oder_id.customer_id.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{selectedOder[0].oder_id.customer_id?.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{selectedOder[0].oder_id.customer_id?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{selectedOder[0].oder_id.customer_id?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {selectedOder[0].oder_id?.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Receiver:</span>
                  <span className="itemValue">{selectedOder[0].oder_id?.receiver}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="editButton" onClick={handleEdit}>Edit</div>
            <h1 className="title">Information Order </h1>
            <div className="item">
              <img
                src={selectedOder?.image}
                alt=""
                className="itemImg"
              />
              <div className="details">
                
                <div className="detailItem">
                  <span className="itemKey">Order Id:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Date:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id.buy_date}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <select className="a" onChange={(e)=>setStatus(e.target.value)} value ={status} > 
                    <option value="1" >Chờ xác nhận</option>

                    <option value="4" >Đã hủy</option>
                  </select>
                
                </div>
                <br/>
                <h1 className="itemTitle">Total: {plus} VNĐ</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">Last</h1>
          <List/>
        </div>
      </div>
      </div>
      </>
    ) : (    
      <>
  
    </>
    )}
    
    </div>
  );
};

export default Single;
