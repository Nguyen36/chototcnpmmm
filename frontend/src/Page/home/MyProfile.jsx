import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { editUser, get1 } from "../../redux/apiRequest";
import New from "../../Components/Home/New";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 150px;
`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
  color: #1fa5ea;
`;

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    // let UserToken = {}
  let UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;

  useEffect(() => {
    
    if (user === null) {
      navigate("/login");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>MY PROFILE</Title>
        <New />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
