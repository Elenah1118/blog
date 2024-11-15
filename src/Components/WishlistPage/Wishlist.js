// src/Components/Wishlist/Wishlist.js
import React from 'react';
import './Wishlist.css';

const Wishlist = ({ wishlistItems }) => {
  return (
    <div className="wishlist-container">
      <h2>Mi Lista de Deseos</h2>
      {wishlistItems.length > 0 ? (
        <ul>
          {wishlistItems.map((item, index) => (
            <li key={index}>
              <div className="wishlist-item">
                <img src={item.image} alt={item.name} />
                <div className="item-info">
                  <h3>{item.name}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tienes elementos en tu lista de deseos.</p>
      )}
    </div>
  );
};

export default Wishlist;
