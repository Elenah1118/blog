import { useEffect, useState, useRef } from 'react';


// Lógica del useEffect para la animación de progreso y cambio automático de imagen


// Intervalo de progreso (setInterval): Este bloque dentro de useEffect configura un intervalo 
// que aumenta el progreso visual (progress) del indicador circular en cada paso.

// Cambio de imagen: Cuando el progress llega a 100%, significa que se completó el tiempo para la imagen actual, 
// así que se avanza a la siguiente imagen con setCurrentImageIndex((currentImageIndex + 1) % images.length). 
// Luego, se reinicia progress a 0.

// Dependencias: Este useEffect depende de currentImageIndex e images.length, por lo que se ejecuta de nuevo 
// cada vez que cambia la imagen o la cantidad de imágenes.


const useCarousel = (images, duration = 5000) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setCurrentImageIndex((currentImageIndex + 1) % images.length);    // Cambia la imagen cuando el progreso llega a 100
          return 0; // Reinicia el progreso para la siguiente imagen
        }
        return prevProgress + (100 / (duration / 100)); // Incrementa el progreso en cada intervalo
      });
    }, 100);

    return () => clearInterval(intervalRef.current);    // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex, images.length, duration]);



//Estas funciones permiten al usuario avanzar y retroceder manualmente a través de las imágenes del carrusel:
  const handleNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    setProgress(0);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    setProgress(0);
  };

  const setImageIndex = (index) => {
    setCurrentImageIndex(index);
    setProgress(0);
  };

  return {
    currentImageIndex,
    progress,
    handleNextImage,
    handlePreviousImage,
    setImageIndex,
  };
};

export default useCarousel;
