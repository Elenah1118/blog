// src/Components/PostList/PostList.js
import React, { useState } from 'react';
import './PostList.css';

const PostList = ({ addToWishlist, showHeartIcons = false }) => {
  const posts = [
    { id: 1, title: 'Post Title 1', category: 'ojos', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg', description: 'Discover the latest beauty secrets and expert tips to elevate your style.' },
    { id: 2, title: 'Post Title 2', category: 'labios', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg', description: 'Discover the latest beauty secrets and expert tips to elevate your style.' },
    { id: 3, title: 'Post Title 3', category: 'rostro', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg', description: 'Discover the latest beauty secrets and expert tips to elevate your style.' },
  ];

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (post) => {
    if (favorites.some(fav => fav.id === post.id)) {
      setFavorites(favorites.filter(fav => fav.id !== post.id));
    } else {
      setFavorites([...favorites, post]);
      if (addToWishlist) {
        addToWishlist(post);
      }
    }
  };

  return (
    <section id="posts">
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="post-image">
            <img src={post.image} alt={post.title} />
          </div>
          <div className="post-content">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            {showHeartIcons && (
              <div className="heart-icon" onClick={() => toggleFavorite(post)}>
                <i className={`fa-heart ${favorites.some(fav => fav.id === post.id) ? 'fas' : 'far'}`}></i>
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default PostList;
