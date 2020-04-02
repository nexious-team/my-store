import {
  Home,
  Service,
  Login,
  Register,
  ProductDetail,
  Payment,
  Cart,
  Category
} from "./pages";

export default [
  {
    exact: true,
    path: "/",
    component: Home
  },
  {
    exact: true,
    path: "/service",
    component: Service
  },
  {
    exact: true,
    path: "/login",
    component: Login
  },
  {
    exact: true,
    path: "/register",
    component: Register
  },
  {
    exact: true,
    path: "/product-detail",
    component: ProductDetail
  },
  {
    exact: true,
    path: "/payment_information",
    component: Payment
  },
  {
    exact: true,
    path: "/user/cart",
    component: Cart
  },
  {
    exact: true,
    path: "/category",
    component: Category
  }
];
