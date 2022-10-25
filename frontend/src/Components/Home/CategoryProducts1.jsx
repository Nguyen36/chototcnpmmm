import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getCategory1 } from "../../redux/apiProduct";

const Container = styled.div`
  padding: 0 150px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  margin-top: 40px;
`;

const ContainerItem = styled.div`
  padding: 20px;
  width: 100%;
  height: auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 0 60px 0 rgb(0 0 0 / 10%);
  transform: translateY(0);
  transition: all 0.5s;
  &:hover {
    transform: translateY(-20px);
  }
`;

const Name = styled.h5`
  font-size: 16px;
  text-align: right;
`;

const Price = styled.h5`
  font-size: 16px;
  text-align: right;
  color: #f55f8d;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CategoryProducts1 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const productList = useSelector((state) => state.product.one?.product);

  const { id } = useParams();
  let pid = 0;
  if (id === "xe-so") {
    pid = 1;
  } else if (id === "xe-tay-ga") {
    pid = 2;
  } else if (id === "xe-con-tay") {
    pid = 3;
  } else if (id === "xe-mo-to") {
    pid = 4;
  }
  //Load trang
  useEffect(() => {
    getCategory1(dispatch, pid);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      {productList?.map((product) => (
        <ContainerItem>
          <Link to={`/product/${product?.slug}`}>
            <Image src={product?.image} />
          </Link>
          <Name>{product?.name}</Name>
          <Price>{product?.price}</Price>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default CategoryProducts1;
