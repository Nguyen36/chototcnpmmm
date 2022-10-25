import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

import {  removeFormCart } from "../../redux/cart";
import IncDecCounterCart from "../../Components/Home/IncDecCounterCart";
import Datatable from "../../Components/Home/DatatableOder";

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
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const cart = useSelector((state) => state.cart.carts?.allCart);
 
  const Sum = cart?.reduce( (total, currentValue) => {
            return total + currentValue?.price*currentValue?.quantity
            }, 0)
  

  useEffect(()=>{


    if(user===null){
        navigate('/login')
    }
    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>MY ORDERS</Title>
       

     
          <Datatable/>
     
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
