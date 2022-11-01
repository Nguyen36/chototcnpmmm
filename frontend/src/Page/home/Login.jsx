import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {} from "react-bootstrap";

import { useState } from "react";
import { direct, loginUser } from "../../redux/apiRequest";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.2)
    ),
    url("https://www.farmersalmanac.com/wp-content/uploads/2021/04/Pink-forget-me-not-flower_as246441750-950x631.jpeg");
  background-size: cover;
  transform: scaleX(-1);
  position: absolute;
`;

const Wrapper = styled.div`
  width: 25%;
  transform: scaleX(-1);
  padding: 40px;
  background-color: rgba(216, 234, 243, 0.8);
  border-radius: 16px;
  border: 1px solid transparent;
  position: relative;
  top: 180px;
  right: -150px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  color: #3a7bd5;
`;

const Form = styled.form`
  text-align: center;
`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid #3a7bd5;
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
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border: 1px solid transparent;
  text-transform: uppercase;
`;
const Url = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  display: block;
  cursor: pointer;
  text-decoration: none;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const newUser = {
      username: username,
      password: password,
    };

    loginUser(newUser, dispatch, navigate);
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <ContainerButton>
            <Button type="submit">LOGIN</Button>
          </ContainerButton>
          <Url href="/register">CREATE A NEW ACCOUNT</Url>
          <Url>Do you not you remember the password</Url>
          <h1 className="text-center" style={{color:'blue'}} onClick={() => navigate("/")}>
            {" "}
            Trở về trang chủ
          </h1>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
