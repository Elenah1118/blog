// src/Components/Layout/LayoutMainPage.js
import React from 'react';
import './LayoutMainPage.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import AppAdvantages from '../AppAdvantages/AppAdvantages';
import Footer from '../Footer/Footer';
import ChatIcon from '../ChatIcon/ChatIcon';

const LayoutMainPage = ({ children }) => {
  return (
    <div className="layout-main-page">
      {/* Header */}
      <Header />
      
      {/* Navbar */}
      <Navbar />
      
      {/* Contenido principal */}
      <main className="layout-main-content">
        {children}
      </main>
      
      {/* Ventajas (AppAdvantages) */}
      <section className="layout-advantages">
        <AppAdvantages />
      </section>
      
      {/* Chat Icon */}
      <ChatIcon />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LayoutMainPage;
