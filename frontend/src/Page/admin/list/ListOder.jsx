import "./list.scss"
import Sidebar from "../../../Components/admin/sidebar/Sidebar"
import Navbar from "../../../Components/admin/navbar/Navbar"
import Datatable from "../../../Components/admin/datatable/DatatableOder"

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