import "./new.scss";
import Sidebar from "../../../Components/admin/sidebar/Sidebar";
import Navbar from "../../../Components/admin/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams,  } from "react-router-dom";
import { editUser, get1 } from "../../../redux/apiRequest";
import { editProduct, get1Product } from "../../../redux/apiProduct";

const New = ({  title,action }) => {
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const user = useSelector((state) => state.auth.login?.currentUser)

  const selectedUser = useSelector((state) => state.product.products?.allProduct)
  const [file, setFile] = useState(selectedUser?.image);

  const [name,setName]=useState(selectedUser?.name);
  const [price,setPrice] = useState(selectedUser?.price);
  const [category_id,setCategory]= useState(selectedUser?.category_id);
  const [brand_id,setBrand]= useState(selectedUser?.brand_id);
  const [amount,setAmount] = useState(selectedUser?.amount);
  const [seller_id,setSeller]=useState(selectedUser?.seller_id);  
  const [status,setStatus]=useState(selectedUser?.status);  
  
  const {productid}= useParams()
 
  //Load trang
  useEffect(()=>{
  
    if(user?.accessToken){
      get1Product(user?.accessToken,dispatch,productid)
     
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

  const handleLogin = (e) =>{
    e.preventDefault()
    
    const newProduct = {
      name,
      price,
      category_id,
      amount,
      brand_id,
      seller_id,
      status,
      image: file,
    }
    editProduct(newProduct,dispatch,navigate,productid,user?.accessToken)
  }
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : `${selectedUser?.image}`
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleLogin}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

                <div className="formInput" >
                  <label>Username</label>
                  <input type='text' placeholder={selectedUser?.name} onChange={(e)=>setName(e.target.value)} />
                </div>
                <div className="formInput" >
                  <label>Price</label>
                  <input type='text' placeholder={selectedUser?.price} onChange={(e)=>setPrice(e.target.value)}/>
                </div>
           
                <div className="formInput" >
                  <label>Amount</label>
                  <input type='password'placeholder={selectedUser?.amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
           
                <div className="formInput" >
                  <label>Category</label>
                  <input type='email' placeholder={selectedUser?.category_id} onChange={(e)=>setCategory(e.target.value)} />
                </div>
           
                <div className="formInput" >
                  <label>Seller</label>
                  <input type='password' placeholder={selectedUser?.seller_id}onChange={(e)=>setSeller(e.target.value)} />
                </div>
           
                <div className="formInput" >
                  <label>Brand</label>
                  <input type='text' placeholder={selectedUser?.brand_id}  onChange={(e)=>setBrand(e.target.value)}/>
                </div>
                <div className="formInput" >
                  <label>Status</label>
                  <input type='text' placeholder={selectedUser?.status}  onChange={(e)=>setStatus(e.target.value)}/>
                </div>
                
                {/* <select className="table-group-action-input form-control"  > 
                <option value="3" >Customer</option>
                <option value="2" >Seller</option>
              </select> */}
           
              <button type='submit'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
