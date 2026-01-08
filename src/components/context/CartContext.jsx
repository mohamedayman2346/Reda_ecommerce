import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {

  // Favorites
  const [favorites, setFavorites] = useState(() => {
    const favoritesItem = localStorage.getItem('favorites')
    return favoritesItem ? JSON.parse(favoritesItem) : []
  })

  const addToFavorites = (item) => {
    setFavorites((prev) => {
      if(prev.some((i) => i.id === item.id))
        return prev;
      return [...prev, item]
  })
  }

  const removeFromFavorites = (item) => {
    setFavorites((prev) => (
      prev.filter(i => i.id !== item.id)
    ))
  }

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])


  // Cart
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Increase Quantity, Decrease Quantity, Remove Item functions can be added here
  const increaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const descreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity !== 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        // Cart
        cartItems,
        addToCart,
        increaseQuantity,
        descreaseQuantity,
        deleteItem,
        // Favorite
        favorites,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
