import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OderColumns } from "../../../datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteUser, } from "../../../redux/apiRequest";
import { getAllProduct } from "../../../redux/apiProduct";
import { getAllOder } from "../../../redux/apiOder";
const Datatable = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // lay ra User
  const UserToken = JSON.parse(localStorage.getItem('userInfo')) || {}
  const user = useSelector((state) => state.auth.login.currentUser) || UserToken;
 
  const oderList = useSelector((state)=> state.oder.oders?.allOder)
  const [data, setData] = useState(oderList);

  useEffect(()=>{
   

    if(user?.accessToken){
      getAllOder(user?.accessToken,dispatch)
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
            <Link to={`/admin/orders/${params.row._id}`}>
            <div
              className="updateButton" >Detail</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Order
        <Link to="/admin/products/new" className="link">
          Add New
        </Link>
      </div>   
        <DataGrid getRowId={(row) => row._id}
        className="datagrid"
        rows={oderList}
        columns={OderColumns.concat(actionColumn)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
          />
    </div>
  );
};

export default Datatable;
