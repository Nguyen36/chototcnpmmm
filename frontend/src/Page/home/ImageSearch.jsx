import { Slider } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Image } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../../Components/Home/Footer";
import ImageForm from "../../Components/Home/ImageForm";
import Navbar1 from "../../Components/Home/Navbar";
import Products from "../../Components/Home/Products";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 100px 150px;
`;

const ImageSearch = () => {

  return (
    <Container>
      <Navbar1 />
      <Wrapper>
        <ImageForm />
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ImageSearch;
