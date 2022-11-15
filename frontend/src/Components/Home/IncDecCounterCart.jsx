import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity } from "../../redux/cart";
function IncDecCounter(product) {
  const dispatch= useDispatch()
  const cart = useSelector((state) => state.cart.carts?.allCart);

  const cartTemp = [...cart];
  let [num, setNum] = useState(product?.product?.quantity);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
      
      const quantity = parseInt(num)+1
      changeQuantity(product?.product,cartTemp,dispatch,quantity)
    }

  };
  let decNum = () => {
    if (num > 1) {
      setNum(num - 1);
      changeQuantity(product?.product,cartTemp,dispatch,num-1)
    }
   
  };
  let handleChange = (e) => {
    setNum(e.target.value);
    changeQuantity(product?.product,cartTemp,dispatch,e.target.value)
  };
  return (
    <>
      <div>
        <div class="input-group">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <input
            id="amount"
            type="text"
            class="form-control"
            value={num}
            style={{ textAlign: "center" }}
            onChange={handleChange}
          />
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default IncDecCounter;
