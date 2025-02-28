// 📌 src/templates/PageTemplate.js
import React from 'react';
import LayoutMainPage from '../Layout/LayoutMainPage'; // ✅ Corrige la ruta de LayoutMainPage

const PageTemplate = ({ children }) => {
  return (
    <LayoutMainPage> {/* ✅ Reutiliza el diseño principal */}

        {children} {/* 🔹 Aquí se insertará el contenido específico de cada página */}


    </LayoutMainPage>
  );
};

export default PageTemplate;



