import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Home/Navbar";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";
import Footer from "../../Components/Home/Footer";
import { Link, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { DetailsSharp } from "@material-ui/icons";
const Wrapper = styled.div`
  padding: 100px 150px;
`;

function SearchResult(props) {
  window.scrollTo(0, 0);
  const [query] = useSearchParams(window.location.search);
  const keyword = query.get("query");
  const [products, setProducts] = useState();
  const getData = async () => {
    const res = await axios.get(
      `http://localhost:8000/product/search?query=${keyword}`
    );
    setProducts(res.data);
    if(res.data.length === 0){
      toast.error("Không tìm thấy sản phẩm nào")
    }
    toast.success(`Đã tìm thấy ${res.data.length} kết quả`)
  };
  const formatCurrency = (num) => {
    if (num)
      return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
  };
  useEffect(() => {
    getData();
    
  }, [keyword]);
  return (
    <div className="w-full h-full">
      <Navbar />
      <ToastContainer />
      <Wrapper>
        <Typography gutterBottom variant="h5">
          Kết quả tìm kiếm
        </Typography>

        {products?.map((item, index) => {
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
                <CardActions className="!ml-5">
                  <Link to={`/product/${item?.slug}`}>
                    <Button
                      className="!bg-black !text-white"
                      variant="contained"
                      startIcon={<DetailsSharp />}
                    >
                      Chi tiết
                    </Button>
                  </Link>
                </CardActions>
              </div>
            </Card>
          );
        })}
      </Wrapper>
      <Footer />
    </div>
  );
}

export default SearchResult;
