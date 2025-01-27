//Imagenes y texto de las subcategorías dentro del NavBar

import './SubcategoryLinks.css';

const SubcategoryLinks = () => {

return (
      /* Contenedor de imágenes con descripciones a la derecha */
      <div className="subcategory-links">
        <div className="link-subcategory-item">
          <a href="#link1">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg" alt="Halloween Makeup Sets" />
            <h3>Makeup de verano</h3>
            <p>Aprende a maquillarte cuando te ha dado el sol.</p>
          </a>
        </div>
        <div className="link-subcategory-item">
          <a href="#link2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg" alt="New M·A·C ximal Sleek Satin Lipstick" />
            <h3>New makeup de Elena</h3>
            <p>Aprende a maquillarte con Elena paso a paso.</p>
          </a>
        </div>
      </div>
);
};
export default SubcategoryLinks; 