// src/pages/HomePage.js
import React from 'react';
import Header from '../Components/Header/Header';
import Navbar from '../Components/Navbar/Navbar';
import Carousel from '../Components/Carousel/Carousel';
import MainContent from '../Components/MainContent/MainContent';
import PostList from '../Components/PostList/PostList';
import AppAdvantages from '../Components/AppAdvantages/AppAdvantages';
import Footer from '../Components/Footer/Footer';
import ChatIcon from '../Components/ChatIcon/ChatIcon';

const HomePage = ({ images }) => {
  return (
    <div className="HomePage">
      <Header />
      <Navbar />
      <Carousel images={images} />
      <MainContent />
      <PostList showHeartIcons={false} />
      <AppAdvantages />
      <ChatIcon />
      <Footer />
    </div>
  );
};

export default HomePage;
