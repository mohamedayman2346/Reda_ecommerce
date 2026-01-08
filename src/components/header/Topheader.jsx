import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

export default function Topheader() {
  const { cartItems, favorites } = useContext(CartContext);

  return (
    <div className="top-header">
      {/* logo */}
      <div className="container flex items-center justify-between py-3.5">
        <Link path="/" className="w-40">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Search */}
        <SearchBox />

        {/* navbar icon */}
        <div className="header_icons flex gap-7.5">
          {/* Heart Icon */}
          <div className="icon cursor-pointer">
            <Link to = '/favorites' >
            <CiHeart />
            <span className="count">{favorites.length}</span>
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="icon">
            <Link to="/cart">
              <CiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
