import React from 'react';
import { Link } from 'react-router-dom';
import SubcategoryLinks from '../SubcategoryLinks/SubcategoryLinks';

const CategoryItem = ({ category, activeSubcategories, handleMouseEnter, handleMouseLeave }) => {
  return (
    <li 
      className="nav-item"
      onMouseEnter={() => handleMouseEnter(category.id)}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${category.id}`}>{category.name}</Link> {/* ✅ Reemplazamos <a> por <Link> */}

      {activeSubcategories === category.id && category.subcategories.length > 0 && (
        <div className="subcategories active">
          <ul>
            {category.subcategories.map((sub) => (
              <li key={sub.id}>
                <Link to={`/${sub.id}`}>{sub.name}</Link> {/* ✅ También aquí */}
              </li>
            ))}
          </ul>

          {/* 📌 Solo mostrar SubcategoryLinks en Luz Barata y EYES */}
          {(category.id === 'luzBarata' || category.id === 'eyes') && <SubcategoryLinks />}
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
