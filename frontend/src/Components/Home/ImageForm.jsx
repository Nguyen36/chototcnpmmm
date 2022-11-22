import React from "react";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import { Typography } from "@material-ui/core";
import { IconButton } from "@mui/material";
const Container = styled.div`
  width: 100%;
`;
const Form = styled.form``;

const ImageForm = () => {
  const onChangeFile = (e) => {
    setFile(e.target.files[0]);
    console.log(file);
  };
  const handleLoad = (img) => {
    if (img) {
      console.log(img);
      return URL.createObjectURL(img);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    try {
      const formData = new FormData();
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
      console.log(res.data.key);
    } catch (err) {
      console.log(err);
    }
  };
  const [file, setFile] = useState();
  return (
    <Container className="static h-[250px] flex flex-col content-center">
      <div className="flex flex-col content-center">
        <Typography
          style={{ textAlign: "center" }}
          className="!font-bold !font-mono !text-2xl"
        >
          Put your image here
        </Typography>
      </div>
      <div className="h-[100px] mb-[10px] flex justify-center">
        <img
          src={handleLoad(file)}
          alt="productImage"
          style={{
            width: "400px",
            height: "200px",
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
          <div className="flex justify-center">
           <Button variant='contained' type="submit">Upload</Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default ImageForm;
