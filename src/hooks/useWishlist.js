//lista de me gusta

// src/hooks/useWishlist.js
import { useState } from 'react';

const useWishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => {
    if (!wishlistItems.some(existingItem => existingItem.id === item.id)) {
      setWishlistItems([...wishlistItems, item]);
    }
  };

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return {
    wishlistItems,
    addToWishlist,
    removeFromWishlist,
  };
};

export default useWishlist;
