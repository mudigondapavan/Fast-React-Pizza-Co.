import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import Home from './ui/Home';
import Cart from "./features/cart/Cart";
import Menu, { loader as MenuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as getOrder } from "./features/order/Order";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import Home from "./ui/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />} errorElement={<Error />}>
      <Route path="" element={<Home />} />
      <Route
        path="menu"
        element={<Menu />}
        loader={MenuLoader}
        errorElement={<Error />}
      />
      <Route path="cart" element={<Cart />} />
      <Route
        path="order/new"
        element={<CreateOrder />}
        action={createOrderAction}
      />
      <Route
        path="order/:orderId"
        element={<Order />}
        loader={getOrder}
        action={updateOrderAction}
        errorElement={<Error />}
      />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
