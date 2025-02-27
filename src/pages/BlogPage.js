// src/pages/BlogPage.js
import React from 'react';
import useRoutesList from "../hooks/useRoutesList";
import LayoutMainPage from '../Components/Layout/LayoutMainPage'; // ✅ Importa LayoutMainPage
import './BlogPage.css'; // Asegúrate de tener este archivo con los estilos adecuados


const BlogPage = () => {
  const allRoutes = useRoutesList(); // Obtiene todas las rutas
  console.log("📌 Rutas activas:", allRoutes); // Debugging para ver todas las rutas

  return (
    <LayoutMainPage> {/* ✅ Usa LayoutMainPage aquí */}
      <div className="blog-main-content">

      </div>

    </LayoutMainPage>
  );
};

export default BlogPage;
