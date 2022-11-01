import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns,productColumns } from "../../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, } from "../../../redux/apiRequest";
import {  deleteProduct, getProductSeller } from "../../../redux/apiProduct";
const Datatable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // lay ra User
  const user = useSelector((state) => state.auth.login?.currentUser)
 
  const productList = useSelector((state)=> state.product.products?.allProduct)
  const [data, setData] = useState(productList);
  const [del,setDelete]=useState(false)

  useEffect(()=>{
    if(user.role !=='2'){
      navigate('/')
    }

    if(user?.accessToken){
      getProductSeller(user?.accessToken,dispatch,user?._id)
    }
   

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[del]) 

 

  
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
        Add New Product
        <Link to="/seller/products/new" className="link">
          Add New
        </Link>
      </div>   
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
