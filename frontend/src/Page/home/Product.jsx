import styled from "styled-components";
import { Tabs, Tab, Table } from "react-bootstrap";
import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";
import Newsletter from "../../Components/Home/Newsletter";
import IncDecCounter from "../../Components/Home/IncDecCounter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { get1Product, get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart } from "../../redux/cart";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 130px 150px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;

const Image = styled.img`
  width: 600px;
  height: 450px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 10px;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #00ff;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 26px;
`;

const AddContainer = styled.div`
  width: 50%;
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
  margin-top: 20px;
`;

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser);
  const cart = useSelector((state) => state.cart.carts?.allCart);
  const selectedProduct = useSelector(
    (state) => state.product.products?.allProduct
  );

  const { slug } = useParams();
  useEffect(() => {
    get1ProductBySlug(dispatch, slug);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCart = (e) => {
    e.preventDefault();

    const element = document.getElementById("amount");
    const quantity = element?.value;

    const newProduct = selectedProduct;
   
    let tempProduct = Object.assign({ quantity }, newProduct);
    console.log(cart)
    let cartTemp = [...cart];
    console.log(cartTemp)

    addToCart(tempProduct, cartTemp, dispatch, navigate);
    toast.success("Success Notification !", {});
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Image src={selectedProduct?.image} />
        <InfoContainer>
          <Title>{selectedProduct?.name}</Title>
          <Price>
            Giá từ:{" "}
            <span className="text-danger">{selectedProduct?.price}</span> VNĐ
          </Price>
          <AddContainer>
            <IncDecCounter />
            <Button onClick={handleCart}>ADD TO CART</Button>
          </AddContainer>
          <Tabs
            defaultActiveKey="information"
            transition={false}
            id="noanim-tab-example"
            className="my-3"
          >
            <Tab class="text-center" eventKey="information" title="Thông tin">
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Loại xe</td>
                    <td>{selectedProduct?.category_id?.name}</td>
                  </tr>
                  <tr>
                    <td>Hãng</td>
                    <td>{selectedProduct?.brand_id?.name}</td>
                  </tr>
                  <tr>
                    <td>Cửa hàng</td>
                    <td>{selectedProduct?.seller_id?.fullname}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="description" title="Mô tả">
              <div>{selectedProduct?.description}</div>
            </Tab>
          </Tabs>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
