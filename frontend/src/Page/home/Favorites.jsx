import React, { useState } from "react";
import Categories from "../../Components/Home/Categories";
import Footer from "../../Components/Home/Footer";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "../../Components/Home/Products";
import Slider from "../../Components/Home/Slider";
import Navbar1 from "./../../Components/Home/Navbar";
import styled from "styled-components";
import axios from "axios";
import { Link, useNavigate as navigate } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { CardActions } from "@mui/material";
import { useEffect } from "react";
import { Details, DetailsSharp, Favorite } from "@material-ui/icons";
const Wrapper = styled.div`
  padding: 100px 150px;
`;

const Favorites = () => {
  const UserToken = JSON.parse(localStorage.getItem("userInfo")) || {};
  const formatCurrency = (num) => {
    if (num)
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  };
  const handleUnFavorite = async (id) => {
    const product = { productId: id };
    const res = await axios.post(
      `http://localhost:8000/user/favorite/delete/${user._id}`,
      product
    );
    if (res.status === 200) {
      toast.success("Xóa tin thành công !", {});
    }
  };
  const user =
    useSelector((state) => state.auth.login.currentUser) || UserToken;
  const [favorite, setFavorite] = useState();
  const [isDelete,setIsDelete]=useState(false)
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(`http://localhost:8000/user/favorite/get/${user._id}`)
        .then((res) => {
          setFavorite(res.data[0]);
          setIsDelete(true)
        });
    };
    getData();
  }, [isDelete]);
  return (
    <div className="w-full h-full">
      <Navbar1 />
      <ToastContainer />
      <Wrapper>
        <Typography gutterBottom variant="h5">Tin đăng đã lưu</Typography>
        <div className="">
          {favorite?.map((item, index) => {
            return (
              <Card sx={{ maxWidth: 345 }} className="!mt-[50px] flex">
                <div>
                  <CardMedia
                    component="img"
                    className="h-[200px] !w-[300px]"
                    image={item?.image[0]}
                    alt="green iguana"
                  />
                </div>
                <div>
                  <CardContent className="!pl-[30px]">
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.description}
                    </Typography>
                    <Typography variant="h5" className="!text-rose-500">
                      {formatCurrency(item?.price)}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="outlined"
                      className="!ml-5 !bg-white !mr-5"
                      onClick={() => {
                        handleUnFavorite(item?._id);
                      }}
                      startIcon={<Favorite className="!text-rose-500" />}
                    >
                      Đã lưu
                    </Button>
                    <Link to={`/product/${item?.slug}`}>
                      <Button className="!bg-black !text-white"variant="contained" startIcon={<DetailsSharp />}>
                        Chi tiết
                      </Button>
                    </Link>
                  </CardActions>
                </div>
              </Card>
            );
          })}
        </div>
      </Wrapper>

      <Footer />
    </div>
  );
};

export default Favorites;
