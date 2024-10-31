import React from "react";

import {
  Home,
  About,
  Products,
  CartList,
  ProductSingle,
  Contact,
  Signup,
  Login,
} from "../../pages";
import Checkout from "../../pages/Checkout";
import Profile from "../../pages/Profile";
import AccountPage from "../../pages/Account";
import Account from "../../pages/Account";

const HeaderRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/cart",
    element: <CartList />,
  },
  {
    path: "/product/:productName/:productID",
    element: <ProductSingle />,
  },
  {
    path: "about-us",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/account",
    element: <Account />,
  },
];

const checkoutRoute = [{ path: "/checkout", element: <Checkout /> }];

const FooterRoutes = [
  //
];

export { HeaderRoutes, FooterRoutes, checkoutRoute };