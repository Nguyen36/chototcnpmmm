import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { axiosClient as axios } from "../../api";
import Button from "@mui/material/Button";
import { Typography } from "@material-ui/core";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const Container = styled.div`
  width: 100%;
`;
const Form = styled.form``;

const ImageForm = () => {
  const navigate = useNavigate();
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
  };
  const handleLoad = (img) => {
    if (img) {
      console.log(img);
      return URL.createObjectURL(img);
    }
    return "https://res.cloudinary.com/dddmdgm0w/image/upload/v1669973537/senki_avatar/senki_avatar/icons8-no-image-400_ll5wsd.png";
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (file) {
        formData.append("file", file);
        const res = await axios.post(
          "http://localhost:8000/image/search",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if(res.data.length === 0){
          toast.error("Tìm kiếm thất bại, không tìm thấy sản phẩm phù hợp");
        }
        else{
          navigate(`/search?query=${res.data.key}`);
        }
      }
      toast.warn("Vui lòng đăng tải hình ảnh")
    } catch (err) {
      toast.error("Tìm kiếm thất bại, không tìm thấy sản phẩm phù hợp");
    }
  };
  const [file, setFile] = useState();
  return (
    <Container className="static h-[350px] flex flex-col content-center">
      <div className="flex flex-col content-center">
        <Typography
          style={{ textAlign: "center" }}
          className="!font-bold !font-mono !text-2xl"
        >
          Put your image here
        </Typography>
      </div>
      <div className="h-[200px] mb-[10px] flex justify-center">
        <img
          src={handleLoad(file)}
          alt="productImage"
          style={{
            width: "400px",
            height: "300px",
            borderRadius: "10px !important",
            objectFit: "cover",
          }}
          className="mb-[100px]"
        />
      </div>
      <div className="mt-[100px] mb-[100px] flex justify-center">
        <Form onSubmit={onSubmit} encType="multipart/form-data">
          <input
            type="file"
            name="file"
            id="file"
            filename="productImage"
            onChange={onChangeFile}
          />
          <label for="file">Choose a file</label>
          <br></br>
          <div className="!flex !justify-center !mt-5">
            <Button variant="contained" className="!bg-black"  type="submit" >
              Search
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ImageForm;
