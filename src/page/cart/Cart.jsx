import React, { useContext } from "react";
import { CartContext } from "../../components/context/CartContext";
import { FaRegTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import PageTransition from "../../components/PageTransition";

export default function Cart() {
  const { cartItems, increaseQuantity, descreaseQuantity, deleteItem } =
    useContext(CartContext);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handledeleteItem = (item) => {
    deleteItem(item.id);
    toast.error(
      <div className="toast-wrapper flex items-center gap-5 min-w-75 max-w-75">
        <img
          src={item.images[0]}
          alt={item.title}
          className="toast-img w-auto h-12.5 object-contain "
        />
        <div className="toast-content w-full flex flex-col gap-1 text-sm">
          <strong className="line-clamp-1 ">{item.title}</strong>
          Removed from Cart
        </div>
      </div>,
      { duration: 3000 }
    );
  };

  return (
    <PageTransition>
      <div className="pt-40 checkout my-12.5 ">
        <div className="orderSummary pb-10 w-[45%] px-5 border border-border shadow-[0_8px_10px_#c0bfbf44] rounded mx-auto">
          <h1 className="border-b border-border py-5 mb-5 text-main! text-2xl">
            Order Summary
          </h1>

          <div className="items h-87.5  overflow-y-auto">
            {cartItems.length === 0 ? (
              <p className="text-center pt-35">Your cart is empty.</p>
            ) : (
              cartItems.map((item, index) => (
                <div
                  className="item-cart flex gap-5 items-center justify-between h-31 border-b border-border pe-5"
                  key={index}
                >
                  <div className="image-name flex items-center gap-5">
                    <img
                      src={item.thumbnail}
                      className="w-20!"
                      alt={item.title}
                      loading="lazy"
                    />
                    <div className="content">
                      <h4 className="mb-2.5 font-semibold line-clamp-2">
                        {item.title}
                      </h4>
                      <p className="price-item">${item.price}</p>
                      <div className="quantity-control flex items-center mt-1.5 gap-2 ">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-xl cursor-pointer rounded border! border-border"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                        <div className="quantity-count text-lg min-w-10 flex justify-center items-center rounded bg-bg text-main ">
                          {item.quantity}
                        </div>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-xl cursor-pointer rounded border! border-border"
                          onClick={() => descreaseQuantity(item.id)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    className="delete-item cursor-pointer"
                    onClick={() => handledeleteItem(item)}
                  >
                    <FaRegTrashAlt className="fill-red-500 text-xl transition-all duration-300 hover:scale-[1.2]" />
                  </button>
                </div>
              ))
            )}
          </div>

          <div className="button-summary border-t border-border pt-5">
            <div className="shop_table flex items-center justify-between mb-5">
              <p className="text-xl text-heading capitalize">total</p>
              <span className="total_checkout text-xl font-bold text-main">
                ${total.toFixed(2)}
              </span>
            </div>

            <div className="button-div border-t border-border py-5">
              <button
                type="submit"
                className=" w-full bg-main text-white border-2! border-main py-2  rounded text-xl font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent hover:text-main "
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
