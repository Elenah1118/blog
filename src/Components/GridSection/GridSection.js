// src/Components/GridSection/GridSection.js
import React, { useEffect, useRef, useState } from "react";
import "./GridSection.css";
import gridItems from "./gridData"; // 📌 Importamos los datos desde el archivo externo
import GridItem from "./GridItem"; // 📌 Importamos el nuevo componente reutilizable

const GridSection = () => {
  const gridRef = useRef(null);  // 🔴 Se asegurará de apuntar a la .grid-container
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (gridRef.current) {
        console.log("✅ grid-container encontrado:", gridRef.current);
        setIsMounted(true);
      } else {
        console.warn("⚠️ Aún no se encuentra el grid-container en el DOM...");
      }
    }, 500); // Espera medio segundo antes de verificar

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isMounted || !gridRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("📌 Observando grid-container - Visible?:", entry.isIntersecting);
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            console.log("🎉 Clase 'show' agregada correctamente");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0,
        rootMargin: "150px" // 🔧 Se activará 50px antes de entrar en la pantalla
      }

    );

    observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, [isMounted]);

  return (
    <section className="responsive-grid-section">
      {/* 🔴 Aplicamos el ref directamente aquí */}
      <div ref={gridRef} className="grid-container">
        {gridItems.map((item) => (
          <GridItem
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

export default GridSection;
