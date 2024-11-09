// src/Components/PostList/PostList.js
import React from 'react';
import './PostList.css';

const PostList = ({ searchTerm, selectedCategory }) => {
  // Lista de publicaciones de ejemplo con categorías
  const posts = [
    { id: 1, title: 'Post Title 1', category: 'ojos', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg', description: 'Discover the latest beauty secrets and expert tips to elevate your style.' },
    { id: 2, title: 'Post Title 2', category: 'labios', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg', description: 'Discover the latest beauty secrets and expert tips to elevate your style.' },
    { id: 3, title: 'Post Title 3', category: 'rostro', image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg', description: 'Discover the latest beauty secrets and expert tips to elevate your style.' },
    // Puedes agregar más publicaciones según tu necesidad
  ];

  // Filtra las publicaciones según el término de búsqueda y la categoría seleccionada
  const filteredPosts = posts.filter((post) =>
    (post.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory ? post.category === selectedCategory : true)
  );

  return (
    <section id="posts">
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post, index) => (
          <div className="post" key={post.id || index}>
            <div className="post-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <a href="#leer-mas" className="read-more">Read More</a>
            </div>
          </div>
        ))
      ) : (
        <p>No se encontraron resultados para tu búsqueda.</p>
      )}
    </section>
  );
};

export default PostList;
