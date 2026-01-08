import React, { useContext } from "react";
import { FaShoppingCart, FaHeart, FaShare } from "react-icons/fa";
import Stars from "../Stars";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaCheck } from "react-icons/fa";
import toast from "react-hot-toast";

export default function Product({ item }) {
  const navigate = useNavigate();

  const {
    cartItems,
    addToCart,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useContext(CartContext);

  const isInCart = cartItems.some((i) => i.id === item.id);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast.success(
      <div className="toast-wrapper flex items-center gap-2 min-w-75 max-w-75">
        <img
          src={item.images[0]}
          alt={item.title}
          className="toast-img w-auto h-12.5 object-contain "
        />
        <div className="toast-content w-full flex flex-col gap-1 text-sm">
          <strong className="line-clamp-1 ">{item.title}</strong>
          added to Cart
          <button
            className="btn mt-1 text-sm"
            onClick={() => navigate("/cart")}
          >
            View Cart
          </button>
        </div>
      </div>,
      { duration: 4000 }
    );
  };

  const isInFavorites = favorites.some((i) => i.id === item.id);

  const handleAddToFavorites = (item) => {
    if (isInFavorites) {
      removeFromFavorites(item);
      toast.error(
        <div className="toast-wrapper flex items-center gap-2 min-w-75 max-w-75">
          <img
            src={item.images[0]}
            alt={item.title}
            className="toast-img w-auto h-12.5 object-contain "
          />
          <div className="toast-content w-full flex flex-col gap-1 text-sm">
            <strong className="line-clamp-1 ">{item.title}</strong>
            Removed from Favorites
          </div>
        </div>,
        { duration: 3000 }
      );
    } else {
      addToFavorites(item);
      toast.success(
        <div className="toast-wrapper flex items-center gap-2 min-w-75 max-w-75">
          <img
            src={item.images[0]}
            alt={item.title}
            className="toast-img w-auto h-12.5 object-contain "
          />
          <div className="toast-content w-full flex flex-col gap-1 text-sm">
            <strong className="line-clamp-1 ">{item.title}</strong>
            added to Favorites
            <button
              className="btn mt-1 text-sm"
              onClick={() => navigate("/favorites")}
            >
              View Favorites
            </button>
          </div>
        </div>,
        { duration: 4000 }
      );
    }
  };

  return (
    <div
      className={`product  overflow-hidden relative w-62.5 bg-white py-6 px-4 border border-border rounded transition duration-300 hover:border-main ${
        isInCart && "in-cart"
      }`}
    >
      <Link to={`/products/${item.id}`}>
        <span
          className={`state-cart absolute ${
            isInCart ? "top-2.5" : "-top-7.5"
          } left-[50%] translate-x-[-50%] text-heading! text-sm transition-all duration-300 flex items-center gap-5`}
        >
          <FaCheck className="fill-green-400" /> In Cart
        </span>

        {/* Product Image */}
        <div className="img-product relative h-45 px-5  flex items-center justify-center mb-7">
          <img
            src={item.images[0]}
            alt="product-img"
            className="h-40 w-auto "
            loading="lazy"
          />
        </div>
        {/* product Title */}
        <p className="mb-2.5 text-heading text-ellipsis line-clamp-1">
          {item.title}
        </p>
        {/* Starts */}
        <div className="stars y-4 flex gap-1.5 ">
          <Stars rating={item.rating} />
        </div>
        {/* Price */}
        <p className="price font-bold ">
          <span>${item.price}</span>
        </p>
        {/* Side Icons Tools */}
      </Link>
      <div className="icons absolute top-[50%] translate-y-[-50%] flex flex-col  -right-12.5 gap-2.5  transition-all duration-300">
        <span
          className={`btn-cart ${isInCart && "pointer-events-none"}`}
          onClick={() => handleAddToCart(item)}
        >
          <FaShoppingCart />
        </span>

        <span className={`${isInFavorites && 'bg-main!'}`} onClick={() => handleAddToFavorites(item)}>
          <FaHeart className={`${isInFavorites && 'text-white!'}`} />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}
