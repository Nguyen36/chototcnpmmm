import "./CategoryItem.css";

function CategoryItem({ item }) {
  return (
    <div className="pl-[50px] pr-[50px] container">
      <div className="w-auto h-auto mw-100 mh-100 ">
        <img src={item.img} alt="" className="" />
        <div className="flex justify-center ">
          <span className="">{item.alt}</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
