import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQty } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQty = useSelector(getTotalCartQty);

  if (!totalCartQty) return;
  return (
    <div className="flex justify-between bg-stone-800 p-4 text-sm font-semibold uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 text-stone-300 sm:space-x-6">
        <span>{totalCartQty} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
