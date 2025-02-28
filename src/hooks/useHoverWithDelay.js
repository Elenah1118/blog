import { useState, useRef } from 'react';

// Variable global para persistir el "disable hover" tras navegar
let globalDisableHover = false;

const useHoverWithDelay = (delay = 350) => {
  const [activeSubcategories, setActiveSubcategories] = useState(null);
  const timeoutRef = useRef(null);

  // Al mover el ratón sobre una categoría, si no está deshabilitado, se espera el retraso
  const handleMouseEnter = (category) => {
    if (globalDisableHover) return;
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveSubcategories(category);
    }, delay);
  };

  // Si el usuario mueve el ratón dentro de la misma zona tras un clic, reactivamos el hover
  const handleMouseMove = (category) => {
    if (globalDisableHover) {
      globalDisableHover = false;
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setActiveSubcategories(category);
      }, delay);
    }
  };

  // Al salir con el ratón se ocultan las subcategorías y se reinicia la bandera
  const handleMouseLeave = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveSubcategories(null);
      globalDisableHover = false;
    }, delay);
  };

  // Al hacer clic se ocultan las subcategorías y se deshabilita temporalmente el hover
  const handleClick = () => {
    clearTimeout(timeoutRef.current);
    setActiveSubcategories(null);
    globalDisableHover = true;
  };

  return {
    activeSubcategories,
    handleMouseEnter,
    handleMouseMove,
    handleMouseLeave,
    handleClick,
  };
};

export default useHoverWithDelay;
