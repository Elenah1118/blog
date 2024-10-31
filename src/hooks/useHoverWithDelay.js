import { useState, useRef } from 'react';

// Este hook personalizado (useHoverWithDelay) permite establecer una subcategoría activa y un temporizador 
// para desactivarla, y también acepta un argumento opcional delay para el tiempo de espera.

const useHoverWithDelay = (delay = 400) => {
  const [activeSubcategories, setActiveSubcategories] = useState(null); // Controlar qué subcategoría está activa
  const timeoutRef = useRef(null);  // Referencia para el temporizador

  const handleMouseEnter = (category) => {    // Manejar hover con temporizador
    clearTimeout(timeoutRef.current);   // Cancelar cualquier temporizador previo
    setActiveSubcategories(category);   // Establecer la subcategoría activa
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveSubcategories(null); // Restablecer subcategorías activas
    }, delay);  // Retraso de 400ms
  };

  return {
    activeSubcategories,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useHoverWithDelay;