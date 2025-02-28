// 📌 src/pages/NovedadesPage.js
import React from 'react';
import PageTemplate from '../Components/Template/PageTemplate'; // ✅ Usa la misma plantilla
import './NovedadesPage.css'; // 📌 Agrega los estilos necesarios

const NovedadesPage = () => {
  return (
    <PageTemplate>
      <div className="novedades-content">
        <h2>Últimas Novedades</h2>
        <p>Mantente actualizado con las últimas noticias y eventos.</p>
      </div>
    </PageTemplate>
  );
};

export default NovedadesPage;
