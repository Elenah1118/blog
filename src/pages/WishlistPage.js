// src/pages/WishlistPage.js
import React from 'react';
import Wishlist from '../Components/WishlistPage/Wishlist'; // Asegúrate de que esta ruta sea correcta

const WishlistPage = ({ wishlistItems, removeFromWishlist }) => {
  return (
    <div className="wishlist-page">
      <Wishlist wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />
    </div>
  );
};

export default WishlistPage;
