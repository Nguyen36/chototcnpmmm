import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
const plus = (a,b)=> a*b
const formatCurrency = (num) => {
  if (num)
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + "đ";
};

const List = () => {
  const rows = useSelector((state) => state.oder.full?.detail)
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Price</TableCell>
            <TableCell className="tableCell">Quantity</TableCell>
            <TableCell className="tableCell">Total</TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow key={row?._id}>
              <TableCell className="tableCell">{row?._id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row?.product_id?.image} alt="" className="image" />
                  {row.product_id.name}
                </div>
              </TableCell>
              <TableCell className="tableCell">{formatCurrency(row.product_id?.price)}</TableCell>
              <TableCell className="tableCell">{row.quantity}</TableCell>
              <TableCell className="tableCell">{`${formatCurrency(plus(row.product_id?.price,row?.quantity))}`}</TableCell>
              {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
