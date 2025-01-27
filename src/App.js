// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import HomeLoggedInPage from './pages/HomeLoggedInPage';
import ProfilePage from './pages/ProfilePage';
import WishlistPage from './pages/WishlistPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useWishlist from './hooks/useWishlist';
import BlogPage from './pages/BlogPage'; // Importa tu página de blog
import RegisterPage from './pages/registerPage';


// Importación de imágenes para el carrusel
import carouselImage from './assets/images/elegant_blue.jpg';
import carouselImage2 from './assets/images/elegant_blue.jpg';
import carouselImage3 from './assets/images/elegant_blue.jpg';
import carouselImage4 from './assets/images/elegant_blue.jpg';


function App() {
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  const images = [carouselImage, carouselImage2, carouselImage3, carouselImage4];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage images={images} />} />
        <Route
          path="/home-logged-in"
          element={<HomeLoggedInPage images={images} addToWishlist={addToWishlist} />}
        />
        <Route path="/profile" element={<ProfilePage />} />
        <Route
          path="/wishlist"
          element={<WishlistPage wishlistItems={wishlistItems} removeFromWishlist={removeFromWishlist} />}
        />
                <Route path="/register" element={<RegisterPage />} />

                <Route path="/blog" element={<BlogPage />} /> {/* Agrega esta línea */}
      </Routes>
    </Router>
  );
}

export default App;
