import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);  // Controla si estamos desplazándonos hacia abajo
  const [isScrolled, setIsScrolled] = useState(false);  // Controla si hemos hecho scroll hacia abajo
  const [lastScrollTop, setLastScrollTop] = useState(0);  // Para comparar la posición actual con la anterior

//useScrollDirection.js : "controla cuándo y cómo se actualizan los estados relacionados con el desplazamiento".

// A través de handleScroll, el useEffect calcula el desplazamiento actual (scrollTop) 
// y compara este valor con el último desplazamiento conocido (lastScrollTop):
// isScrollingDown se actualiza a true o false dependiendo de si el usuario está desplazando hacia abajo o hacia arriba.
// isScrolled se actualiza a true cuando el usuario ha desplazado más de 100 píxeles hacia abajo, lo que indica que ya no está en la parte superior de la página.
// lastScrollTop se actualiza con el valor de scrollTop para que esté listo para la próxima comparación.


useEffect(() => {
    const handleScroll = () => {
       const scrollTop = window.scrollY;
       
  
       setIsScrollingDown(scrollTop > lastScrollTop);
       setIsScrolled(scrollTop > 100);
       setLastScrollTop(scrollTop);
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollTop]);
  
  return { isScrollingDown, isScrolled };
};

export default useScrollDirection;