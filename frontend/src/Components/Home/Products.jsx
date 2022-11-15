import styled from "styled-components";
import { popularProducts } from "../../data";
import Product from "./Product";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTop5Product } from "../../redux/apiProduct";

const Container = styled.div`
  padding: 20px 150px;
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  box-sizing: border-box;
`;

const ContainerItem = styled.div`
  padding: 20px;
  width: 25%;
  height: auto;
`;

const Name = styled.h5`
  font-size: 16px;
  text-align: center;
`;

const Price = styled.h5`
  font-size: 16px;
  text-align: center;
  color: #f55f8d;
  font-weight: bold;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Products = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const productList = useSelector((state) => state.product.one?.product);

  // const selectedProduct = useSelector(
  //   (state) => state.product.products?.allProduct
  // );

  // const [file, setFile] = useState(selectedProduct?.image);

  const { id } = useParams();

  //Load trang
  useEffect(() => {
    getTop5Product(dispatch);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
  };
  const formatCurrency = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  };
  return (
    <Container>
      {productList?.map((product) => (
        <ContainerItem>
          <Link to={`/product/${product?.slug}`}>
            <Image src={product?.image[0]} />
          </Link>
          <Name>{product?.name}</Name>
          <Price>{formatCurrency(product?.price)}</Price>
        </ContainerItem>
      ))}
    </Container>
  );
};

export default Products;
