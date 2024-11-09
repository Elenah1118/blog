// src/hooks/useSearchFilter.js
import { useState } from 'react';

const useSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(''); // Nuevo estado para la marca

  return {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    selectedBrand, // Incluye el estado de la marca en el retorno
    setSelectedBrand, // Devuelve la función para actualizar la marca
  };
};

export default useSearchFilter;
