import { categories } from "../../data";
import CategoryItem from "./CategoryItem";
import Slider from "react-slick";

const Categories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

 
  return (
    <Slider {...settings}>
     
      <div className="!flex p-5 justify-between pb-[30px] flex-row mt-[50px]">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id}  />
        ))}
      </div>
    </Slider>
  );
};

export default Categories;
