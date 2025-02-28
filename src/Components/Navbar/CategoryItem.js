import React from 'react';
import { Link } from 'react-router-dom';
import SubcategoryLinks from '../SubcategoryLinks/SubcategoryLinks';

const CategoryItem = ({ category, activeSubcategories, handleMouseEnter, handleMouseMove, handleMouseLeave, handleClick }) => {
  return (
    <li 
      className="nav-item"
      onMouseEnter={() => handleMouseEnter(category.id)}
      onMouseMove={() => handleMouseMove(category.id)}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/${category.id}`} onClick={handleClick}>
        {category.name}
      </Link>

      {activeSubcategories === category.id && category.subcategories.length > 0 && (
        <div className="subcategories active">
          <ul>
            {category.subcategories.map((sub) => (
              <li key={sub.id}>
                <Link to={`/${sub.id}`}>{sub.name}</Link>
              </li>
            ))}
          </ul>
          {(category.id === 'luzBarata' || category.id === 'eyes') && <SubcategoryLinks />}
        </div>
      )}
    </li>
  );
};

export default CategoryItem;
