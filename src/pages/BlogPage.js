// src/pages/BlogPage.js
import React from 'react';
import useRoutesList from "../hooks/useRoutesList";
import LayoutMainPage from '../Components/Layout/LayoutMainPage'; // ✅ Importa LayoutMainPage
import TablaDinamica from "../Components/plantillaTabla/TablaDinamica"; // ✅ Importa la tabla dinámica
import './BlogPage.css'; // Asegúrate de tener este archivo con los estilos adecuados


const BlogPage = () => {
  const allRoutes = useRoutesList(); // Obtiene todas las rutas
  console.log("📌 Rutas activas:", allRoutes); // Debugging para ver todas las rutas

  return (
    <LayoutMainPage> {/* ✅ Usa LayoutMainPage aquí */}


          {/* ✅ Renderiza la tabla aquí */}
          <TablaDinamica />


    </LayoutMainPage>
  );
};

export default BlogPage;
