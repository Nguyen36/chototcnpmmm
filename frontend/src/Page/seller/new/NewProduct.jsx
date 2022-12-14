import "./new.scss";
import Sidebar from "../../../Components/admin/sidebar/Sidebar";
import Navbar from "../../../Components/admin/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from 'react-file-base64';
import {CardMedia} from "@material-ui/core"
import {
  createProduct,
  editProduct,
  get1Product,
} from "../../../redux/apiProduct";
import { axiosClient as axios } from '../../../api';
import { toast } from "react-toastify";

const New = ({ title, action }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;

  const selectedUser = useSelector(
    (state) => state.product.products?.allProduct
  );
  const [file, setFile] = useState(selectedUser?.image);
  const [name, setName] = useState(selectedUser?.name);
  const [price, setPrice] = useState(selectedUser?.price);
  const [category_id, setCategory] = useState(selectedUser?.category_id?._id);
  const [brand_id, setBrand] = useState(selectedUser?.brand_id);
  const [amount, setAmount] = useState(selectedUser?.amount);
  const [description, setDescription] = useState(selectedUser?.description);
  const [status, setStatus] = useState(selectedUser?.status);
  const [productState, setProductState] = useState();
  const [id,setId]=useState()
  const { productid } = useParams();
  console.log(category_id)
  const handleImage=(img)=>{
    if(img){
      return img[0].base64
    }
  }
  const getLengthProduct = async () => {
    try {
      const res = await axios.get("/product/getLength");
      setProductState(res.data);
      let t=res.data.map((item) => item._id);
      t=Number.parseInt(t)+1
      setId(t.toString())
      console.log(id)
    } catch (err) {
      return err;
    }
  };

  //Load trang
  useEffect(() => {
    if (user?.accessToken) {
      get1Product(user?.accessToken, dispatch, productid);
      getLengthProduct();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleInsert = (e) => {
    e.preventDefault();
    let images = []
    if(file){
      for(let i = 0; i < file.length; i++){
        images.push(file[i].base64)
      }
    }
    if(action=='new'){
      const newProduct = {
        _id: id,
        name,
        price,
        category_id,
        image: images,
        amount: 1,
        brand_id,
        seller_id: user._id,
        status,
        description,
      };
      createProduct(newProduct, dispatch, navigate, productid, user?.accessToken);

    }
    else{
      const newProduct = {
        name,
        price,
        category_id,
        image: images,
        amount: 1,
        brand_id,
        seller_id: user._id,
        status,
        description,
      };
      editProduct(newProduct,dispatch,navigate, productid, user?.accessToken)

    }
   
    
  };
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 style={{color:'black'}}>????ng tin</h1>
        </div>
        <div className="bottom">
          <div className="left flex justify-center content-center	 ">
            <img 
            className="mt-[10%]"
              src={handleImage(file)}
              style={{ width: "200px", height: "200px" ,borderRadius:'10px !important',
            objectFit:'cover'}}
              alt=""
            />
            {/* <CardMedia
              image={handleImage(file)}
              title='Title'
              
            /> */}
          </div>
          <div className="right">
            <form onSubmit={handleInsert}>
              <div className="formInput">
                <label htmlFor="file">
                  H??nh ???nh: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <FileBase64
                  accept='image/*'
                  multiple={true}
                  type='file'
                  
                  onDone={(e) => setFile(e)}
                />
                {/* <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                /> */}
              </div>

              <div className="formInput">
                <label>T??n s???n ph???m</label>
                <input
                  type="text"
                  placeholder={selectedUser?.name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="formInput">
                <label>Gi??</label>
                <input
                  type="text"
                  placeholder={selectedUser?.price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              

              <div className="formInput">
                <label>M?? t???</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

             
                <br></br>
              <select
                className="table-group-action-input form-control"
                value={category_id||selectedUser?.category_id?._id}
                onChange={(e) => {
                  console.log(category_id)
                  setCategory(e.target.value);
                }}
              >
                <option value="1">Xe c???</option>
                <option value="2">Th?? c??ng</option>
                <option value="3">??i???n t???</option>
                <option value="4">N???i th???t</option>
                <option value="5">Th???i Trang</option>

              </select>

              <select
                className="table-group-action-input form-control"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Published">Published</option>
                <option value="Unpublished">Unpublished</option>
              </select>

              <button style={{borderRadius:'10px'}} type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
