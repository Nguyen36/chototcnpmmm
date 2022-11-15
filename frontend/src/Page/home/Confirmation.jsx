import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { direct, loginUser } from "../../redux/apiRequest";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: gray;
  background-size: cover;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: auto%;
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
  margin-top: 20px;
  font-size: 20px;
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

  return (
    <Container>
      <Wrapper>
        <FontAwesomeIcon
          icon={faEnvelopeOpenText}
          style={{ width: "100px", height: "100px", marginBottom: "30px" }}
        />
        <Title>ACCOUNT CONFIRMATION</Title>
        <Detail>
          An email with your account confirmation link has been sent to your
          email.
        </Detail>
        <Detail>Please check your email and comeback to login.</Detail>

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
