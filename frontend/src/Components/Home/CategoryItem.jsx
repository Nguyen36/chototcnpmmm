import styled from "styled-components";

import Slider from "react-slick";

import "./CategoryItem.css";

function CategoryItem() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="pl-[150px] pr-[150px]">
      <Slider {...settings}>
        <div>
          <img className="w-full h-full object-cover" src={
              "https://xeotogiadinh.com/wp-content/uploads/2017/08/Honda-logo-Merah-kiri-e1516676510251.jpg"
            }
          ></img>
        </div>
        <div>
          <img
            className="w-full h-full object-cover"
            src={
              "https://shivangan.com/admin/uploads/our_client_image/1614165406.jpg"
            }
          />
        </div>
        <div>
          <div
            className="w-full h-full object-cover"
            src={
              "https://dnssolution.vn/wp-content/uploads/2020/07/logo-Piaggio.png"
            }
          />
        </div>
        <div>
          <div
           className="w-full h-full object-cover"
            src={
              "https://news.webike.vn/wp-content/uploads/2017/07/SYM-logo-4CCF4DA2EA-seeklogo.com_.png"
            }
          />
        </div>
        <div>
          <div
            className="w-full h-full object-cover"
            src={
              "https://logoxe.net/wp-content/uploads/2021/07/logo-xe-suzuki-1200x900.jpg"
            }
          />
        </div>
      </Slider>
    </div>
  );
}

export default CategoryItem;
