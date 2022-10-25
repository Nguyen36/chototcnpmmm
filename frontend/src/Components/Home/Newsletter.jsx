import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: auto;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 60px 150px;
`;
const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
  color: #3a7bd5;
  font-weight: bold;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.form`
  display: flex;
  border-radius: 0.5rem;
  box-shadow: 0 0 60px 0 rgb(0 0 0 / 10%);
  width: 50%;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 15px;
  font-weight: 400;
  color: #888;
  background: white;
  flex: 1 1 auto;
  border-radius: 16px 0 0 16px;
  border: 1px solid white;
  transition: all 0.5s;
  &: hover {
    border: 1px solid #3a7bd5;
  } ;
`;

const Button = styled.button`
  padding: 10px 35px;
  font-size: 20px;
  background-image: linear-gradient(
    to right,
    #00d2ff 0,
    #1fa5ea 51%,
    #3a7bd5 100%
  );
  border-radius: 0 16px 16px 0;
  transition: all 0.5s;
  color: white;
  border-color: transparent;
  cursor: pointer;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
