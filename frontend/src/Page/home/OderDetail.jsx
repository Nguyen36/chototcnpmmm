import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams} from "react-router-dom";

import {  removeFormCart } from "../../redux/cart";
import { getFull } from "../../redux/apiOder";

import List from "../../Components/admin/table/Table";
import { Typography } from "@material-ui/core";
const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 150px;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  color: #1fa5ea;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: 3px solid #3a7bd5;
  background: #fff;
  border-radius: 10px;
  color: #3a7bd5;
  transition: all 0.3s;
  &:hover {
    background: #3a7bd5;
    color: #fff;
  }
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  font-weight: 550;
  &:hover {
    color: #3a7bd5;
  }
`;

const Bottom = styled.div``;

const VinhKhang = styled.div`
  display: flex;
  padding: 30px;
`;

const Vinh = styled.div`
  flex: 3;
  margin-right: 30px;
`;

const Khang = styled.div`
  flex: 1;
`;

const Info = styled.div``;

const Product = styled.div``;

const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
  position: sticky;
  top: 80px;
  height: 30px;
  background: #fff;
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 160px;
  cursor: pointer;
`;

const Details = styled.div`
  text-align: center;
`;

const ProductName = styled.div`
  color: #3a7bd5;
  font-weight: 700;
  font-size: 20px;
`;

const Hr = styled.hr`
  background-color: #3a7bd5;
`;

const CheckOut = styled.div`
  border-radius: 10px;
  border: 2px solid #3a7bd5;
  padding: 10px;
  position: sticky;
  top: 90px;
`;

const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
`;

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
    #1fa5ea 50%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
`;

const Text = styled.div`
  margin: 15px 0px;
  font-size: 16px;
  font-weight: 600;
`;

const FreeShip = styled.div`
  margin: 10px 0px;
  font-size: 12px;
  color: #808089;
`;

const Cart = () => {
  const dispatch = useDispatch();
 
  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
  const cart = useSelector((state) => state.cart.carts?.allCart);
  
 
  const Sum = cart?.reduce( (total, currentValue) => {
    return total + currentValue?.price*currentValue?.quantity
    }, 0)

  const selectedOder = useSelector((state) => state.oder.full?.detail)
  const {id} = useParams()

  
  const a=selectedOder
  let plus = a?.reduce(function (total, currentValue) {
  return total + currentValue.product_id.price*currentValue.quantity
  }, 0);

  //Load trang
  useEffect(()=>{
      
    if(user?.accessToken){
      getFull(user?.accessToken,dispatch,id)
      // getAllUsers(user?.accessToken,dispatch)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 
  const [status, setStatus] = useState(selectedOder[0]?.oder_id?.status)
  const handleEdit = ()=>{
    console.log('1')
  }
  const currencyFormat = (num) => {
    return num?.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  const shortDateFormat = (date) => {
    return date?.slice(0,10)
  }
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title className="!uppercase !text-lg">Chi tiết đơn hàng</Title>
        <Link to={`/myorder/${user?.slug}`} className="link !text-black">
             {`<`} Quay lại
        </Link> 
        <div>
    {selectedOder? (
      <>
     <div className="single">

      <div className="singleContainer">
       
        <div className="top">
          <div className="left ">
           
            <h1 className="title !text-black">Thông tin khách hàng</h1>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dddmdgm0w/image/upload/v1670228976/tiki_avatar/icons8-customer-256_f5r4qh.png"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <div className="detailItem">
                  <span className="itemKey">Customer:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id.customer_id?.fullname}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id.customer_id?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id.customer_id?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                  {selectedOder[0]?.oder_id?.address}
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Receiver:</span>
                  <span className="itemValue">{selectedOder[0]?.oder_id?.receiver}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="left">
            <div className="editButton" onClick={handleEdit}>Edit</div>
            <h1 className="title !text-black">Thông tin đơn hàng </h1>
            <div className="item">
              <img
                src="https://res.cloudinary.com/dddmdgm0w/image/upload/v1670229124/tiki_avatar/icons8-purchase-order-192_t49vym.png"
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
                  <span className="itemValue">{shortDateFormat(selectedOder[0]?.oder_id.buy_date)}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Status:</span>
                  <select className="a" onChange={(e)=>setStatus(e.target.value)} value ={status} > 
                    <option value="1" >Chờ xác nhận</option>
                    <option value="4" >Huỷ đơn</option>
                  </select>
                
                </div>
                <h1 className="itemTitle !text-rose-400">Total: {currencyFormat(plus)} đ</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
        <h1 className="title">List of items</h1>
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

  
     
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
