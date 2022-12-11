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
    <Slider {...settings} className="" >     
      <div className="!flex p-5 justify-center pb-[55px] flex-row mt-[50px]
      flex-wrap">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id}  />
        ))}
      </div>
    </Slider>
  );
};

export default Categories;
