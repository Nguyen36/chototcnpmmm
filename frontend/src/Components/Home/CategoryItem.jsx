import "./CategoryItem.css";
import {useDispatch,useSelector} from 'react-redux';
import { getCategory1, getTop5Product } from "../../redux/apiProduct";
function CategoryItem({ item }) {
  const dispatch = useDispatch();
  const handleOnClick=(e,key)=>{
    console.log(key);

    if(key!=0){
      getCategory1(dispatch,key);

    }
    else{
      getTop5Product(dispatch);
    }
  }
 
  return (
    <div className="pl-[50px] pr-[50px] container w-[20%] 
    mr-[-80px]
    mt-[50px]" onClick={e=>handleOnClick(e,item.id)}
   >
      <div className="w-auto h-auto mw-100 mh-100 ">
        <img src={item.img} alt="" className="" />
        <div className="flex justify-center flex-wrap text-center ">
          <span className="">{item.alt}</span>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
