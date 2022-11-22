import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { Carousel } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Image = styled.img`
  height: 1050px;
  object-fit: cover;
  transition: all 1s;
  object-position: center;
`;


const Slider2 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}
   >
      <div className="relative">
        <div className="w-80% h-[700px]">
          <img
            className="d-block w-full h-full"
            src="/img/anh2.jpg"
            alt="anh1"
          ></img>
        </div>

        <div className="absolute bottom-6 text-white left-1/2 right-1/2">
          <h3 className="w-[180px]">
            CÙNG CHỢ TỐT KẾT NỐI <div className="text-center">MUÔN NƠI</div>
          </h3>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[700px]">
          <img
            className="d-block w-full h-full"
            src="/img/anh3.jpg"
            alt="slide-pic"
          ></img>
        </div>

        <div className="absolute bottom-6 text-white left-1/2 right-1/2">
          <h3 className="w-[180px]">
            CÙNG CHỢ TỐT KẾT NỐI <div className="text-center">MUÔN NƠI</div>
          </h3>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[700px]">
          <img className="d-block w-full h-full" src="/img/anh1.jpg"
          alt="slide-3"></img>
        </div>

        <div className="absolute bottom-6 text-white left-1/2 right-1/2">
          <h3 className="w-[180px]">
            CÙNG CHỢ TỐT KẾT NỐI <div className="text-center">MUÔN NƠI</div>
          </h3>
        </div>
      </div>
    </Slider>
  );
};

export default Slider2;
