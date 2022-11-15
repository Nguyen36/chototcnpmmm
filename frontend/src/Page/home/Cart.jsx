import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { removeFormCart } from "../../redux/cart";
import IncDecCounterCart from "../../Components/Home/IncDecCounterCart";

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

const CartDetail = styled.div`
  display: flex;
  padding: 30px;
`;

const CartProduct = styled.div`
  flex: 3;
  margin-right: 30px;
`;

const CartOrder = styled.div`
  flex: 1;
`;

const Info = styled.div``;

const Product = styled.div``;

const ProductHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr 0.5fr;
  align-items: center;
  position: sticky;
  top: 80px;
  height: 30px;
  background: #fff;
`;

const ProductDetail = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.5fr 1.5fr 1.5fr 0.5fr;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 160px;
  border-radius: 10px;
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
  console.log(user);
  let cart = useSelector((state) => state.cart.carts?.allCart);

  const Sum = cart?.reduce((total, currentValue) => {
    return total + currentValue?.price * currentValue?.quantity;
  }, 0);
  const formatCurrency = (num) => {
    if(num)
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  };
  const handleRemove = (id, e) => {

    removeFormCart(id, cart, dispatch);
  };
  return (
    <Container>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
      
      <Navbar />
      <Wrapper>
        <Title>MY CART</Title>
        <Top>
          <a href="/category/xe-so">
            <TopButton>CONTINUE SHOPPING</TopButton>
          </a>
          <TopTexts>
            <TopText>Shopping Bag ({cart?.length})</TopText>
          </TopTexts>
        </Top>

        <CartDetail>
          <CartProduct>
            <ProductHeader className="fw-bold">
              <Details></Details>
              <Details>Product</Details>
              <Details>Price</Details>
              <Details>Quantity</Details>
              <Details>Total amount</Details>
              <Details></Details>
            </ProductHeader>
            {cart?.map((product) => (
              <Bottom>
                <Info>
                  <Product>
                    <ProductDetail>
                      <Details className="text-center">
                        <Image src={product?.image} />
                      </Details>
                      <Details>
                        <ProductName>{product?.name}</ProductName>
                        <Details>
                          <b>Mục:</b> {product?.category_id?.name}
                        </Details>
                      </Details>
                      <Details>{formatCurrency(product?.price)}</Details>
                      <Details className="px-3">
                        <IncDecCounterCart product={product} />
                      </Details>
                      <Details className="text-danger">
                        {`${formatCurrency(product?.price * product?.quantity)}`}
                      </Details>
                      <FontAwesomeIcon
                        onClick={(e) => handleRemove(product?._id, e)}
                        icon={faTrashCan}
                        style={{
                          color: "#3a7bd5",
                          width: "24px",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      />
                    </ProductDetail>
                  </Product>
                  <Hr />
                </Info>
              </Bottom>
            ))}
          </CartProduct>
          <CartOrder>
            <CheckOut>
              <Text>Thành tiền: {formatCurrency(Sum)}</Text>
              <Hr />
              <Text>Giảm giá: </Text>
              <Hr />
              <Text>Tổng tiền: {formatCurrency(Sum)}</Text>
              <Hr />
              <FreeShip>* Miễn phí ship toàn quốc</FreeShip>
              <ContainerButton>
                <Link to="/checkout">
                  <Button type="submit">Check Out</Button>
                </Link>
              </ContainerButton>
            </CheckOut>
          </CartOrder>
        </CartDetail>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
