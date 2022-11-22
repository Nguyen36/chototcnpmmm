import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-bootstrap";

import { useEffect, useState } from "react";
import {  editUser, loginUser } from "../../redux/apiRequest";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #39b449;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// url(
//   "https://swall.teahub.io/photos/small/16-160847_yamaha-yzf-r1-2020-bike-4k-wallpaper-yzf.jpg"
// );

const Wrapper = styled.div`
  width: 40%;
  height: auto;
  padding: 40px;
  background-color: rgba(216, 234, 243, 0.8);
  border-radius: 16px;
  border: 1px solid transparent;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #3a7bd5;
`;

const Detail = styled.h1`
  font-size: 20px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 25px;
  font-size: 15px;
  font-weight: 500;
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
  margin-top: 20px;
`;

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const newUser = {
      verify: true,
    };

    editUser(newUser, dispatch, navigate, id, "Bearer 3");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon
          icon={faCircleCheck}
          style={{
            width: "100px",
            height: "100px",
            marginBottom: "30px",
            color: "3a7bd5",
          }}
        />
        <Title>ACCOUNT CONFIRMATION</Title>
        <Detail>Email has been verify. Now you can login</Detail>

        <Button>
          <a href="/login" style={{ color: "#ffffff", textDecoration: "none" }}>
            LOGIN
          </a>
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Login;
