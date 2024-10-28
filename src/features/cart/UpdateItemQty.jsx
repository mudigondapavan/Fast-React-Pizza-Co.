import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQty, IncreaseItemQty } from "./cartSlice";

function UpdateItemQty({ pizzaId, isInCart }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button onClick={() => dispatch(decreaseItemQty(pizzaId))} type="round">
        -
      </Button>
      <span className="text-sm font-medium">{isInCart}</span>
      <Button onClick={() => dispatch(IncreaseItemQty(pizzaId))} type="round">
        +
      </Button>
    </div>
  );
}

export default UpdateItemQty;
