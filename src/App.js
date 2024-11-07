
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import MainContent from './Components/MainContent/MainContent';
import PostList from './Components/PostList/PostList';
import AppAdvantages from './Components/AppAdvantages/AppAdvantages'; // Importación del nuevo componente
import Footer from './Components/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


//IMPORTACIÓN DE IMÁGENES
import carouselImage from './assets/images/BlogUp.jpg';
import carouselImage2 from './assets/images/Maquillaje.png';
function App() {

  const images = [ carouselImage, carouselImage2];

  return (
    <div className="App">
      {/* Cabecera superior con logo y botones */}
      <Header/>
      <Navbar/>
      <Carousel images={images}/>
      <MainContent/>
      <PostList/>
      <AppAdvantages/>
      <Footer />
    </div>
  );
}

export default App;