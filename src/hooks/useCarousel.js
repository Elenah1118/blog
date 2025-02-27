import { useEffect, useState, useRef } from 'react';
import carouselSlides from '../data/carouselData'; // Importa la configuración de diapositivas



const useCarousel = (slides = carouselSlides, duration = 5000) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isLastImage, setIsLastImage] = useState(false); // Nuevo estado para detectar la última imagen
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isLastImage) { // Solo ejecuta el intervalo si no estamos en la última imagen

      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            const nextIndex = (currentImageIndex + 1) % slides.length;    // Cambia la imagen cuando el progreso llega a 100
            setCurrentImageIndex(nextIndex);
            setProgress(0);
            if (nextIndex === slides.length - 1) {
              setIsLastImage(true); // Marcamos que estamos en la última imagen
          }
          return 0;
        }
          return prevProgress + (100 / (duration / 100)); // Incrementa el progreso en cada intervalo
        });
      }, 100);
    }  
    return () => clearInterval(intervalRef.current);    // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex, slides.length, duration, isLastImage]);



//Estas funciones permiten al usuario avanzar y retroceder manualmente a través de las imágenes del carrusel:
const handleNextImage = () => {
  if (currentImageIndex === slides.length - 1) {
    // Si estamos en la última imagen, volvemos a la primera
    setCurrentImageIndex(0);
    setIsLastImage(false); // Reiniciamos el estado de última imagen
    setProgress(0);
  } else {
    setCurrentImageIndex((currentImageIndex + 1) % slides.length);
    setProgress(0);
  }
};

const handlePreviousImage = () => {
  setCurrentImageIndex((currentImageIndex - 1 + slides.length) % slides.length);
  setProgress(0);
  setIsLastImage(false); // Al ir atrás, desmarcamos la última imagen
};

const setImageIndex = (index) => {
  setCurrentImageIndex(index);
  setProgress(0);
  setIsLastImage(index === slides.length - 1); // Detecta si se selecciona la última imagen
};

return {
  currentImageIndex,
  progress,
  isLastImage, // Devolvemos el estado de última imagen
  handleNextImage,
  handlePreviousImage,
  setImageIndex,
};
};

export default useCarousel;
