import { useEffect } from "react";
import { Tab, Table, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Footer from "../../Components/Home/Footer";
import IncDecCounter from "../../Components/Home/IncDecCounter";
import Navbar from "../../Components/Home/Navbar";
import Newsletter from "../../Components/Home/Newsletter";
import { get1ProductBySlug } from "../../redux/apiProduct";
import { addToCart } from "../../redux/cart";
import {Button,IconButton} from "@material-ui/core";
import { Favorite, NoteAdd, Notes } from "@material-ui/icons";
import axios from "axios";
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
  border-radius: 10px;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  padding: 10px;
  justify-content: center;
`;

const Title = styled.h2`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  color: #black !important;
`;

const Price = styled.span`
  font-weight: 600;
  font-size: 26px;
`;

const AddContainer = styled.div`
  width: 50%;
`;

// const Button = styled.button`
//   padding: 10px 25px;
//   font-size: 15px;
//   font-weight: 500;
//   color: #ffffff;
//   cursor: pointer;
//   border-radius: 10px;
//   background-image: linear-gradient(
//     to right,
//     #00d2ff 0,
//     #1fa5ea 51%,
//     #3a7bd5 100%
//   );
//   border: 1px solid transparent;
//   text-transform: uppercase;
//   margin-top: 20px;
// `;

const Product = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserToken = JSON.parse(localStorage.getItem("userInfo")) || {};
  const user =
    useSelector((state) => state.auth.login.currentUser) || UserToken;
  const cart = useSelector((state) => state.cart.carts?.allCart);
  const selectedProduct = useSelector(
    (state) => state.product.products?.allProduct
  );
  console.log();
  const handleLoadImage = (image) => {
    if (image && image.length > 0) {
      return image[0];
    }
  };

  const { slug } = useParams();
  useEffect(() => {
    get1ProductBySlug(dispatch, slug);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formatCurrency = (num) => {
    if (num)
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  };
  const handleCart = (e) => {
    e.preventDefault();

    const element = document.getElementById("amount");
    const quantity = 1;

    const newProduct = selectedProduct;

    let tempProduct = Object.assign({ quantity }, newProduct);
    console.log(cart);
    let cartTemp = [...cart];
    console.log(cartTemp);

    addToCart(tempProduct, cartTemp, dispatch, navigate);
    toast.success("Thêm giỏ hàng thành công  !", {});
  };
  const handleFavorite=async ()=>{
    console.log(user._id)
    const product={productId:selectedProduct._id}
    const res=await axios.post(`http://localhost:8000/user/favorite/add/${user._id}`,product)
    if(res.status===200){
      toast.success("Lưu tin thành công !", {});
    }
  }
  return (
    <Container>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      />

      <Navbar />
      <ToastContainer />

      <Wrapper>
        <Image src={handleLoadImage(selectedProduct?.image)} />
        <InfoContainer>
          <Title>{selectedProduct?.name}</Title>

          <Price>
            Giá từ:{" "}
            <span className="text-danger">
              {formatCurrency(selectedProduct?.price)}
            </span>
          </Price>
          <AddContainer className="!mt-[20px]">
            {selectedProduct?.seller_id?._id === user?._id ? null : (
              <Button variant="outlined" className="!bg-black !text-white " 
              onClick={handleCart}>Thêm vào giỏ</Button>
            )}
            <Button variant="outlined" className="!ml-5 !bg-white"  onClick={handleFavorite} 
            startIcon={<Favorite className="!text-rose-500"/>}>
              Lưu tin
              </Button>
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
                    <td>Danh mục </td>
                    <td>{selectedProduct?.category_id?.name}</td>
                  </tr>
                  {/* <tr>
                    <td>Hãng</td>
                    <td>{selectedProduct?.brand_id?.name}</td>
                  </tr> */}
                  <tr>
                    <td>Người bán</td>
                    <td>{selectedProduct?.seller_id?.fullname}</td>
                  </tr>
                  <tr>
                    <td>Số điện thoại</td>
                    <td>{selectedProduct?.seller_id?.phone}</td>
                  </tr>
                </tbody>
              </Table>
            </Tab>
            <Tab eventKey="description" title="Chi tiết">
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
