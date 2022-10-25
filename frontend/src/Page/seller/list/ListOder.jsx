import "./list.scss"
import Sidebar from "../../../Components/seller/sidebar/Sidebar"
import Navbar from "../../../Components/seller/navbar/Navbar"
import Datatable from "../../../Components/seller/datatable/DatatableOder"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        
        <Datatable/>
      </div>
    </div>
  )
}

export default List