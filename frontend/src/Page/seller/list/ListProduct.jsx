import "./list.scss"
import Sidebar from "../../../Components/seller/sidebar/Sidebar"
import Navbar from "../../../Components/seller/navbar/Navbar"
import Datatable from "../../../Components/seller/datatable/DatatableProduct"
import { ToastContainer } from "react-toastify"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ToastContainer/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List