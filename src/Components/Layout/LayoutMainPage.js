// src/Components/Layout/LayoutMainPage.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ✅ Importa useLocation
import './LayoutMainPage.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Breadcrumbs from '../Breadcrumbs'; // ✅ Importa Breadcrumbs aquí
import AppAdvantages from '../AppAdvantages/AppAdvantages';
import Footer from '../Footer/Footer';
import ChatIcon from '../ChatIcon/ChatIcon';

const LayoutMainPage = ({ children }) => {



  const location = useLocation(); // ✅ Obtiene la URL actual



  // ✅ Verifica los valores de `--header-height` y `--navbar-height`
  useEffect(() => {
    console.log("Header Height:", getComputedStyle(document.documentElement).getPropertyValue("--header-height"));
    console.log("Navbar Height:", getComputedStyle(document.documentElement).getPropertyValue("--navbar-height"));
  }, []);






  return (
    <div className="layout-main-page">
      {/* Header */}
      <Header />
      
      {/* Navbar */}
      <Navbar />




      {/* Contenido principal */}
      <main className="layout-main-content">
        {/* ✅ Solo muestra Breadcrumbs si NO estamos en la página de inicio */}
        {location.pathname !== "/" && <Breadcrumbs />}
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
