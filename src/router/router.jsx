import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout/RootLayout";
import Home from "../pages/Home/Home";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/Cart/Cart";
import Login from "../pages/Login/Login";
import AccountInfo from "../pages/AccountInfo/AccountInfo";
import SignUp from "../pages/SignUp/SignUp";
import ForgetPassword from "../pages/ForgetPassword/ForgetPassword";
import Checkout from "../pages/Checkout/Checkout";
import PrivateRoute from "../routes/PrivateRoute";
import MyOrders from "../pages/AccountInfo/MyOrders/MyOrders";
import OrderSingleView from "../pages/AccountInfo/MyOrders/OrderSingleView/OrderSingleView";
import PrivateSalesPointRoute from "../routes/PrivateSalesPointRoute";
import SalesShop from "../pages/SalesShop/SalesShop";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "product/:id", Component: ProductDetails },
      { path: "shop", Component: Shop },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      { path: "login", Component: Login },
      { path: "signup", Component: SignUp },
      { path: "forget-password", Component: ForgetPassword },
      {
        path: "account",
        element: (
          <PrivateRoute>
            <AccountInfo />
          </PrivateRoute>
        ),
      },
      {
        path: "account/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "account/myOrders/:orderId",
        element: (
          <PrivateRoute>
            <OrderSingleView />
          </PrivateRoute>
        ),
      },
      {
        path: "/salesShop",
        element: (
          <PrivateSalesPointRoute>
            <SalesShop />
          </PrivateSalesPointRoute>
        ),
      },
      {
        path: "checkout",
        element: (
          <PrivateSalesPointRoute>
            <Checkout />
          </PrivateSalesPointRoute>
        ),
      },
    ],
  },
]);
