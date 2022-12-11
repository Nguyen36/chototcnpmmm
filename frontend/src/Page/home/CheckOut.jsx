import styled from "styled-components";

import Footer from "../../Components/Home/Footer";
import Navbar from "../../Components/Home/Navbar";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { get1Product, get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart, removeAllFormCart } from "../../redux/cart";
import { Accordion, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "./CheckOut.css";
import { isFulfilled } from "@reduxjs/toolkit";
import { axiosClient as axios } from '../../api';
import { createOder } from "../../redux/apiOder";
import { removeFormCart } from "../../redux/cart";
import IncDecCounterCart from "../../Components/Home/IncDecCounterCart";
import { createOderDetail } from "../../redux/OderDetail";
import { v4 as uuidv4 } from 'uuid';


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 100px 150px;
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

const CheckOutForm = styled.div`
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

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
  console.log(user);
  const cart = useSelector((state) => state.cart.carts?.allCart);

  //Oder
  const [id, setId] = useState("");
  const [username, setUsername] = useState(user?.fullname);
  const [phone, setPhone] = useState(user?.phone);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState("");
  const [receiver, setReceiver] = useState("");
  const [payment, setPayment] = useState("1");
  const today = new Date().toISOString();

  //OderDetail
  const [id2, setId2] = useState("");
  const length = cart?.length;
  let cartTemp = [...cart];
  useEffect(() => {
    if (user === null) {
      navigate("/login");
    }
    getLengthOder();
    getLenthOderDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getLengthOder = async () => {
    try {
      const res = await axios.get("/oder/getLength");
      setId(res.data);
    } catch (err) {
      return err;
    }
  };

  const getLenthOderDetail = async () => {
    try {
      const res = await axios.get("/oderdetail/getLength");
      setId2(res.data);
    } catch (err) {
      return err;
    }
  };
  const handleCheckout = () => {
    let i = 0;
    let tempId = uuidv4();
    for (i; i < length; i++) {
      const newOder = {
        _id: tempId,
        customer_id: user?._id,
        buy_date: today,
        seller_id: cart[i]?.seller_id,
        phone: phone,
        address: address,
        receiver: receiver,
        pay_id: payment,
      };
      createOder(newOder, dispatch);

      const newOderDetail = {
        _id: uuidv4(),
        oder_id: tempId,
        product_id: cart[i]?._id,
        unit_price: cart[i]?.price,
        quantity: cart[i]?.quantity,
      };
      createOderDetail(newOderDetail);
      tempId = uuidv4();
     
    }
    removeAllFormCart(cartTemp, dispatch);
    const slug = user?.slug;
    navigate("/myorder/" + { slug });
  };

  const Sum = cart?.reduce((total, currentValue) => {
    return total + currentValue?.price * currentValue?.quantity;
  }, 0);

  const handleRemove = (id, e) => {
    removeFormCart(id, cart, dispatch);
  };
  return (
    <Container>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>

      <Navbar />
      <Wrapper>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="text-danger">
              Step 1: Checkout Information
            </Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> <h6>Name: </h6>
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Phone
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Email address
                  </Form.Label>
                  <Form.Control
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Address
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>
                    <span className="text-danger">*</span> Receiver
                  </Form.Label>
                  <Form.Control
                    required
                    type="text"
                    onChange={(e) => setReceiver(e.target.value)}
                  />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Step 2: Payment Method</Accordion.Header>
            <Accordion.Body>
              <Form>
                <span className="text-danger">*</span> Payment Method
                <Form.Select onChange={(e) => setPayment(e.target.value)}>
                  <option>-- Please select --</option>
                  <option value="1">CashOnDelivery</option>
                  <option value="2">ATM/VISA</option>
                  <option value="3">MOMO</option>
                </Form.Select>
                <Form.Group className="mb-3">
                  <Form.Label>Note</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Step 3: Confirm Order</Accordion.Header>
            <Accordion.Body>
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
                                <b>Category:</b> {product?.brand_id?.name}
                              </Details>
                            </Details>
                            <Details>{product?.price}</Details>
                            <Details className="px-3">
                              <IncDecCounterCart product={product} />
                            </Details>
                            <Details className="text-danger">
                              {`${product?.price * product?.quantity}`}
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
                  <CheckOutForm>
                    <Text>Thành tiền: {Sum}</Text>
                    <Hr />
                    <Text>Giảm giá: </Text>
                    <Hr />
                    <Text>Tổng tiền: {Sum}</Text>
                    <Hr />
                    <FreeShip>* Miễn phí ship toàn quốc</FreeShip>
                  </CheckOutForm>
                </CartOrder>
              </CartDetail>
              <Button variant="primary" type="submit" onClick={handleCheckout}>
                Confirm Order
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default CheckOut;
