// src/pages/WishlistPage.js
import React from "react";
import Wishlist from "../Components/WishlistPage/Wishlist"; // Asegúrate de que esta ruta sea correcta
import { useWishlist } from "../context/WishlistContext"; // Importamos el hook del contexto

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist(); // Usamos el contexto

  return (
    <div className="wishlist-page">
      <Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />
    </div>
  );
};

export default WishlistPage;
