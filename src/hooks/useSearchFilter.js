// src/hooks/useSearchFilter.js
import { useState } from 'react';

const useSearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState(''); // Asegura que tenga un valor por defecto
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState(''); // Estado para la marca

  return {
    searchTerm: searchTerm || '', // Asegura que siempre tenga un string
    setSearchTerm,
    selectedCategory: selectedCategory || '', // Asegura que siempre tenga un string
    setSelectedCategory,
    selectedBrand: selectedBrand || '', // Asegura que siempre tenga un string
    setSelectedBrand,
  };
};

export default useSearchFilter;
