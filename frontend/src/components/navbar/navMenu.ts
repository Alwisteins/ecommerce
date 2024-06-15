import { FaHome } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const navMenu = [
  {
    name: "Home",
    path: "/",
    icon: FaHome,
  },
  {
    name: "Shop",
    path: "/shop",
    icon: FaBagShopping,
  },
  {
    name: "Cart",
    path: "/cart",
    icon: FaShoppingCart,
  },
];

export default navMenu;
