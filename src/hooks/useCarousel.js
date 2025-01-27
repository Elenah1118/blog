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
  const [isLastImage, setIsLastImage] = useState(false); // Nuevo estado para detectar la última imagen
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isLastImage) { // Solo ejecuta el intervalo si no estamos en la última imagen

      intervalRef.current = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            const nextIndex = (currentImageIndex + 1) % images.length;    // Cambia la imagen cuando el progreso llega a 100
            setCurrentImageIndex(nextIndex);
            setProgress(0);
            if (nextIndex === images.length - 1) {
              setIsLastImage(true); // Marcamos que estamos en la última imagen
          }
          return 0;
        }
          return prevProgress + (100 / (duration / 100)); // Incrementa el progreso en cada intervalo
        });
      }, 100);
    }  
    return () => clearInterval(intervalRef.current);    // Limpia el intervalo cuando el componente se desmonta
  }, [currentImageIndex, images.length, duration, isLastImage]);



//Estas funciones permiten al usuario avanzar y retroceder manualmente a través de las imágenes del carrusel:
const handleNextImage = () => {
  if (currentImageIndex === images.length - 1) {
    // Si estamos en la última imagen, volvemos a la primera
    setCurrentImageIndex(0);
    setIsLastImage(false); // Reiniciamos el estado de última imagen
    setProgress(0);
  } else {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
    setProgress(0);
  }
};

const handlePreviousImage = () => {
  setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
  setProgress(0);
  setIsLastImage(false); // Al ir atrás, desmarcamos la última imagen
};

const setImageIndex = (index) => {
  setCurrentImageIndex(index);
  setProgress(0);
  setIsLastImage(index === images.length - 1); // Detecta si se selecciona la última imagen
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
