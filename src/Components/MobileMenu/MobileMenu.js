// 📌 src/Components/MobileMenu/MobileMenu.js
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom"; // ✅ Se usa `<Link>` para la navegación
import "./MobileMenu.css";
import categories from "../../data/categories"; // ✅ Se importan las categorías correctamente

const MobileMenu = ({ isOpen, toggleMenu }) => {
  console.log("Estado del menú en MobileMenu:", isOpen); // Debugging para ver si el menú está abierto o cerrado

  // ✅ Referencia al contenedor del menú para detectar clics fuera de él
  const menuRef = useRef(null);

  // ✅ Estado para controlar qué categoría está expandida
  const [expandedCategory, setExpandedCategory] = useState(null);

  // ✅ Función para alternar las subcategorías al hacer clic en una categoría
  const toggleSubcategories = (categoryId) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
  };

  // ✅ Función para cerrar el menú y resetear estado
  const closeMenu = useCallback(() => {
    setExpandedCategory(null); // Cierra cualquier subcategoría abierta
    toggleMenu(); // Cierra el menú principal
  }, [toggleMenu]); // ✅ `useCallback` optimiza la función evitando renders innecesarios

  // ✅ useEffect para detectar clics fuera del menú y cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu(); // ✅ Cierra el menú si se hace clic fuera de él
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]); // ✅ Se asegura que `closeMenu` esté en las dependencias

  return (
    <div ref={menuRef} className={`mobile-menu ${isOpen ? "open" : ""}`}>
      {/* 📌 Botón para cerrar el menú */}
      <button className="close-menu" onClick={closeMenu}>
        ✖
      </button>

      {/* 📌 Lista de categorías */}
      <ul className="mobile-menu-list">
        {categories.map((category) => (
          <li key={category.id} className="mobile-menu-item">
            {/* 📌 Categoría principal con botón para expandir/cerrar subcategorías */}
            {category.subcategories.length > 0 ? (
              <button className="category-button" onClick={() => toggleSubcategories(category.id)}>
                {category.name}
              </button>
            ) : (
              // ✅ Si la categoría no tiene subcategorías, usa `<Link>` con la nueva clase `category-link`
              <Link to={`/${category.id}`} className="category-link" onClick={closeMenu}>
                {category.name}
              </Link>
            )}

            {/* 📌 Subcategorías (solo se muestran si la categoría está expandida) */}
            {expandedCategory === category.id && category.subcategories.length > 0 && (
              <ul className="mobile-subcategories">
                {category.subcategories.map((sub) => (
                  <li key={sub.id}>
                    {/* ✅ Se usa `<Link>` en lugar de `<button>` para restaurar los estilos */}
                    <Link to={`/${sub.id}`} className="subcategory-link" onClick={closeMenu}>
                      {sub.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
