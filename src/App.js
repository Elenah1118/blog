import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import MainContent from './Components/MainContent/MainContent';
import PostList from './Components/PostList/PostList';
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import useScrollDirection from './hooks/useScrollDirection';  //Codigo optimizado -NO BORRAR-
import useHoverWithDelay from './hooks/useHoverWithDelay';  //Codigo optimizado -NO BORRAR-
import useCarousel from './hooks/useCarousel';  //Codigo optimizado -NO BORRAR-


function App() {

  const { isScrollingDown, isScrolled } = useScrollDirection(); //Codigo optimizado -NO BORRAR-
  const { activeSubcategories, handleMouseEnter, handleMouseLeave } = useHoverWithDelay(400); //Codigo optimizado -NO BORRAR-
  const images = [
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/MAQUILLAJE.jpg',
    'https://burst.shopifycdn.com/photos/makeup-beauty-flatlay.jpg?width=1000&format=pjpg&exif=0&iptc=0',
  ];  //Codigo optimizado -NO BORRAR-

  const { //Codigo optimizado -NO BORRAR-
    currentImageIndex,  // Índice de la imagen actual
    progress,
    handleNextImage,  // Avanza a la siguiente imagen
    handlePreviousImage,  // Retrocede a la imagen anterior
    setImageIndex,
  } = useCarousel(images); // Le pasamos `images` al hook



  return (
    <div className="App">
      {/* Cabecera superior con logo y botones */}
      <Header/>
      <Navbar/>
      <Carousel images={images}/>
      <MainContent/>
      <PostList/>
      <Footer />
    </div>
  );
}

export default App;