import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import TextField from '@mui/material/TextField';
import { userColumns,productColumns } from "../../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, } from "../../../redux/apiRequest";
import { getAllProduct } from "../../../redux/apiProduct";
const Datatable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // lay ra User
  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
 
  const productList = useSelector((state)=> state.product.products?.allProduct)
  const [data, setData] = useState(productList);

  useEffect(()=>{
    if(user.role !=='1'){
      navigate('/')
    }

    if(user?.accessToken){
      getAllProduct(user?.accessToken,dispatch)
    }
   

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

 

  
  const handleDelete = (id) => {
    setData(data.filter((item) => item._id !== id));
    deleteUser(user?.accessToken, dispatch, id)
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/admin/products/edit/${params.row._id}`}>
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
        Quản lý tin bán
        <Link to="/admin/products/new" className="link">
          Add New
        </Link>
      </div>
      <div className="datatableSearchButton"></div>
      <DataGrid getRowId={(row) => row._id}
      className="datagrid"
      rows={productList}
      columns={productColumns.concat(actionColumn)}
      pageSize={9}
      rowsPerPageOptions={[9]}
      checkboxSelection
        />
    </div>
  );
};

export default Datatable;
