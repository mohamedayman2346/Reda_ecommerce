import { useContext } from "react";
import Stars from "../../components/Stars";
import toast from "react-hot-toast";
import {
  FaHeart,
  FaRegTrashAlt,
  FaShare,
  FaShoppingCart,
} from "react-icons/fa";
import { CartContext } from "../../components/context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductInfo({ product }) {
  const {
    cartItems,
    addToCart,
    deleteItem,
    favorites,
    addToFavorites,
    removeFromFavorites,
  } = useContext(CartContext);

  const isInCart = cartItems.some((item) => item.id === product?.id);

  const navigate = useNavigate();

  // Add To Cart function
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

  const handledeleteItem = () => {
    deleteItem(product.id);
    toast.error(
      <div className="toast-wrapper flex items-center gap-2 min-w-75 max-w-75">
        <img
          src={product.images[0]}
          alt={product.title}
          className="toast-img w-auto h-12.5 object-contain "
        />
        <div className="toast-content w-full flex flex-col gap-1 text-sm">
          <strong className="line-clamp-1 ">{product.title}</strong>
          Removed from Cart
        </div>
      </div>,
      { duration: 3000 }
    );
  };
  // Favorites
  const isInFavorites = favorites.some((i) => i.id === product.id);

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
    <div className="details-item w-[58%] m-auto">
      <h1 className="name mb-4 text-main! text-2xl">{product.title}</h1>
      <div className="stars">
        <Stars rating={product.rating} />
      </div>
      <p className="price text-lg my-3">${product.price}</p>

      <h5 className="font-semibold mb-3 text-lg">
        Avallablitty: <span>{product.availabilityStatus}</span>
      </h5>
      <h5 className="font-semibold mb-3 text-lg">
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="leading-7">{product.description}</p>
      <h5 className="font-semibold mb-5 text-lg">
        <span>Hurry UP! Only {product.stock} Products left in stock.</span>
      </h5>

      <div className="flex flex-wrap gap-2">
        <button
          className={`btn rounded! px-4.5! text-lg gap-5! border! border-main ${
            isInCart && "pointer-events-none bg-white! text-main!"
          } `}
          onClick={() => handleAddToCart(product)}
        >
          {isInCart ? "Already in The Cart" : "Add To Cart"}{" "}
          {<FaShoppingCart />}
        </button>
        {/* trash */}
        {isInCart && (
          <button
            className="delete-item py-3 cursor-pointe flex items-center gap-2 border! border-red-500! text-red-500 rounded! px-4! text-lg! cursor-pointer transition duration-400 hover:bg-red-500 hover:text-white"
            onClick={handledeleteItem}
          >
            You want To Delete ?{" "}
            <FaRegTrashAlt className="text-xl transition-all duration-300 hover:scale-[1.2]" />
          </button>
        )}
      </div>

      {/*  Icons Tools */}
      <div className="icons flex mt-5 gap-5 transition-all duration-300">
        <span className={`svg-icon-span ${isInFavorites && 'bg-main!'}`} onClick={() => handleAddToFavorites(product)}>
          <FaHeart className={`${isInFavorites && "text-white!"}`} />
        </span>
        <span className="svg-icon-span">
          <FaShare />
        </span>
      </div>
    </div>
  );
}
