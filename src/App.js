
import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import MainContent from './Components/MainContent/MainContent';
import PostList from './Components/PostList/PostList';
import AppAdvantages from './Components/AppAdvantages/AppAdvantages';
import Footer from './Components/Footer/Footer';
import useSearchFilter from './hooks/useSearchFilter';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ChatIcon from './Components/ChatIcon/ChatIcon'; // Importa el componente ChatIcon


//IMPORTACIÓN DE IMÁGENES
import carouselImage from './assets/images/BlogUp.jpg';
import carouselImage2 from './assets/images/Maquillaje.png';

function App() {

  // Usa el hook para manejar el filtrado de publicaciones
  const { searchTerm, setSearchTerm, selectedCategory, setSelectedCategory } = useSearchFilter();
  const images = [ carouselImage, carouselImage2];

  return (
    <div className="App">
      {/* Cabecera superior con logo y botones */}
      <Header
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <Navbar/>
      <Carousel images={images}/>
       <MainContent />
      <PostList searchTerm={searchTerm} selectedCategory={selectedCategory} />
      <AppAdvantages/>
      <ChatIcon /> {/* Renderiza el ícono del chat */}
      <Footer />
    </div>
  );
}

export default App;