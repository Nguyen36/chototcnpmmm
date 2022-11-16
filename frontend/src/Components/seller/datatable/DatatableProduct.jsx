import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { userColumns,productColumns } from "../../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, } from "../../../redux/apiRequest";
import {  deleteProduct, getProductSeller, getProductSearchByName } from "../../../redux/apiProduct";
const Datatable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // lay ra User
  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
 
  const productList = useSelector((state)=> state.product.products?.allProduct)
  const [data, setData] = useState(productList);
  const [del,setDelete]=useState(false)
  const [searchName, setSearchName] = useState();

  useEffect(()=>{
    if(user?.role !=='2'){
      navigate('/')
    }

    if(user?.accessToken){
      getProductSeller(user?.accessToken,dispatch,user?._id)
    }
   

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[del]) 

  const handleSearch = () => {
    getProductSearchByName(dispatch, searchName)
  };

  const onChangeSearchName = (e) => {
    setSearchName(e.target.value)
  }
  
  const handleDelete = (id) => {
    setData(productList.filter((item) => item._id !== id));
    deleteProduct(user?.accessToken, dispatch, id)
    setDelete(!del)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/seller/products/edit/${params.row._id}`}>
            <div
              className="updateButton" >Edit</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
            
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
      Tin bán đang đăng
        <Link to="/seller/products/new" className="link">
          Đăng tin
        </Link>
      </div>   
      <TextField 
        id="outlined-search" 
        label="Search field"
        type="search" 
        
        sx={{marginBottom: 2, fontSize: 40}}
        value = {searchName}
        onChange={onChangeSearchName}
      />
      <Button variant="contained" onClick={handleSearch} sx={{mt:1, ml:1}}>Search</Button>
      <DataGrid getRowId={(row) => row._id}
        className="datagrid"
        rows={productList||[]}
        columns={productColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        />
    </div>
  );
};

export default Datatable;
