// src/pages/BlogPage.js
import React from 'react';
import useRoutesList from "../hooks/useRoutesList";
import LayoutMainPage from '../Components/Layout/LayoutMainPage'; // ✅ Importa LayoutMainPage
import './BlogPage.css'; // Asegúrate de tener este archivo con los estilos adecuados
import ArticleAuthorHeader from '../Components/ArticleAuthorHeader/ArticleAuthorHeader'

const BlogPage = () => {
  const allRoutes = useRoutesList(); // Obtiene todas las rutas
  console.log("📌 Rutas activas:", allRoutes); // Debugging para ver todas las rutas

  return (
    <LayoutMainPage> {/* ✅ Usa LayoutMainPage aquí */}
     <ArticleAuthorHeader/>

    </LayoutMainPage>
  );
};

export default BlogPage;
