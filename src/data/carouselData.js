// src/data/carouselData.js

import background1 from '../assets/images/elegant_blue.jpg'; // Imagen de fondo
import background2 from '../assets/images/elegant_blue.jpg';
import background3 from '../assets/images/elegant_blue.jpg';
import background4 from '../assets/images/elegant_blue.jpg';

// Imágenes de productos para cada slide
import product1 from '../assets/images/foco.jpg';
import product2 from '../assets/images/foco.jpg';
import product3 from '../assets/images/foco.jpg';
import product4 from '../assets/images/wind-turbines-7369256_1280.webp';

const carouselSlides = [
    {
      background: background1,
      products: [
        { src: product1, positionX: '10%', positionY: '20%', width: '120px', height: '130px' },
        { src: product2, positionX: '70%', positionY: '50%', width: '90px', height: '90px' },
      ],
      texts: [
        /* { type: 'pre-title', text: 'Oferta Especial', positionX: '50%', positionY: '5%', fontSize: '20px', fontWeight: 'normal' }, --> Utilizarlo cuando me haga falta */
        { type: 'title', text: 'Encuentra la mejor tarifa de luz o gas', positionX: '50%', positionY: '10%', fontSize: '45px', fontWeight: 'bold' }, 
        /* { type: 'subtitle', text: 'Compara todas las tarifas del mercado', positionX: '50%', positionY: '20%', fontSize: '30px', fontWeight: '600' }, --> Utilizarlo cuando me haga falta */
        { type: 'paragraph', text: 'Consulta nuestra plataforma para analizar y elegir la mejor opción según tu consumo.', positionX: '50%', positionY: '35%', fontSize: '25px', fontWeight: 'normal' },
      ],
    },
    {
      background: background2,
      products: [
        { src: product3, positionX: '30%', positionY: '40%', width: '100px', height: '100px'  },
        { src: product1, positionX: '60%', positionY: '70%', width: '150px', height: '120px' },
      ],
      texts: [
        /* { type: 'pre-title', text: 'Oferta Especial', positionX: '50%', positionY: '5%', fontSize: '20px', fontWeight: 'normal' }, --> Utilizarlo cuando me haga falta */
        { type: 'title', text: 'Encuentra la mejor tarifa de luz o gas', positionX: '50%', positionY: '10%', fontSize: '45px', fontWeight: 'bold' },
        /* { type: 'subtitle', text: 'Compara todas las tarifas del mercado', positionX: '50%', positionY: '20%', fontSize: '30px', fontWeight: '600' }, --> Utilizarlo cuando me haga falta */
        { type: 'paragraph', text: 'Consulta nuestra plataforma para analizar y elegir la mejor opción según tu consumo.', positionX: '50%', positionY: '35%', fontSize: '25px', fontWeight: 'normal' },
      ],
    },
    {
      background: background3,
      products: [
        { src: product1, positionX: '15%', positionY: '25%', width: '150px', height: '120px' },
        { src: product3, positionX: '65%', positionY: '35%', width: '150px', height: '120px' },
      ],
      texts: [
        /* { type: 'pre-title', text: 'Oferta Especial', positionX: '50%', positionY: '5%', fontSize: '20px', fontWeight: 'normal' }, --> Utilizarlo cuando me haga falta */
        { type: 'title', text: 'Encuentra la mejor tarifa de luz o gas', positionX: '50%', positionY: '10%', fontSize: '45px', fontWeight: 'bold' },
        /* { type: 'subtitle', text: 'Compara todas las tarifas del mercado', positionX: '50%', positionY: '20%', fontSize: '30px', fontWeight: '600' }, --> Utilizarlo cuando me haga falta */
        { type: 'paragraph', text: 'Consulta nuestra plataforma para analizar y elegir la mejor opción según tu consumo.', positionX: '50%', positionY: '35%', fontSize: '25px', fontWeight: 'normal' },
      ],
    },
    {
      background: background4,
      products: [
        { src: product4, positionX: '50%', positionY: '58%', width: '150px', height: '120px' },
      ],
      texts: [
        /* { type: 'pre-title', text: 'Oferta Especial', positionX: '50%', positionY: '5%', fontSize: '20px', fontWeight: 'normal' }, --> Utilizarlo cuando me haga falta */
        { type: 'title', text: 'Encuentra la mejor tarifa de luz o gas', positionX: '50%', positionY: '10%', fontSize: '45px', fontWeight: 'bold' },
        /* { type: 'subtitle', text: 'Compara todas las tarifas del mercado', positionX: '50%', positionY: '20%', fontSize: '30px', fontWeight: '600' }, --> Utilizarlo cuando me haga falta */
        { type: 'paragraph', text: 'Consulta nuestra plataforma para analizar y elegir la mejor opción según tu consumo.', positionX: '50%', positionY: '25%', fontSize: '25px', fontWeight: 'normal' },
      ],
      uploadButton: { positionX: '50%', positionY: '40%' } // Agregamos el botón en la última diapositiva
    }
  ];

export default carouselSlides;
