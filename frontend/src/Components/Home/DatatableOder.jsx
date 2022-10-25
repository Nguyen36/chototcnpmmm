import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { OderColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getByCustomer } from "../../redux/apiOder";
const Datatable = () => {
  const dispatch = useDispatch()


  // lay ra User
  const user = useSelector((state) => state.auth.login?.currentUser)
 
  const oderList = useSelector((state)=> state.oder.oders?.allOder)
  const [data, setData] = useState(oderList);

  useEffect(()=>{
   

    if(user?.accessToken){
      getByCustomer(user?.accessToken,dispatch,user?._id)
    }
   

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]) 

 
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/myorder/orderdetail/${params.row._id}`}>
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
        Recent your orders   
     
      </div>   
        <DataGrid getRowId={(row) => row?._id}
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
