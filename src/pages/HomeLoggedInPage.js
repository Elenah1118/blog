// src/pages/HomeLoggedInPage.js
import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousel/Carousel";
import MainContent from "../Components/MainContent/MainContent";
import PostList from "../Components/PostList/PostList";
import AppAdvantages from "../Components/AppAdvantages/AppAdvantages";
import Footer from "../Components/Footer/Footer";
import ChatIcon from "../Components/ChatIcon/ChatIcon";
import Profile from "../Components/Profile/Profile";
import Header from "../Components/Header/Header";
import { useWishlist } from "../context/WishlistContext"; // Importamos el hook del contexto

const HomeLoggedInPage = ({ images }) => {
  const [showProfile, setShowProfile] = useState(false);
  const { addToWishlist } = useWishlist(); // Usamos el contexto

  const handleEditProfileClick = () => {
    setShowProfile(true);
  };

  return (
    <div className="HomeLoggedInPage">
      <Header isLoggedIn={true} onEditProfile={handleEditProfileClick} />
      <Navbar />
      <Carousel images={images} />
      <MainContent />
      {showProfile ? <Profile /> : <PostList addToWishlist={addToWishlist} showHeartIcons={true} />}
      <AppAdvantages />
      <ChatIcon />
      <Footer />
    </div>
  );
};

export default HomeLoggedInPage;
