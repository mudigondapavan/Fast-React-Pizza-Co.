import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQty from "./UpdateItemQty";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const isInCart = useSelector(
    (state) =>
      state.cart.cart.find((item) => item.pizzaId === pizzaId)?.quantity,
  );

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId} isInCart={isInCart} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
