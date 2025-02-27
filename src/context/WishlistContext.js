// src/context/WishlistContext.js
import React, { createContext, useContext, useState } from "react";

// 1️⃣ Crear el contexto
const WishlistContext = createContext();

// 2️⃣ Crear el proveedor del contexto
export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    if (!wishlistItems.some(existingItem => existingItem.id === item.id)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// 3️⃣ Hook para consumir el contexto
export const useWishlist = () => {
  return useContext(WishlistContext);
};
