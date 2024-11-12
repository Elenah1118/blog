// src/Components/SearchBar/SearchBar.js
import React from 'react';
import './SearchBar.css';
import useSearchFilter from '../../hooks/useSearchFilter'; // Importa el hook

const SearchBar = () => {
  const { searchTerm, setSearchTerm, selectedBrand, setSelectedBrand } = useSearchFilter();

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar productos o artículos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {/* Selector de marcas */}
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        className="brand-select"
      >
        <option value="">Todas las marcas</option>
        <option value="mac">Mac</option>
        <option value="nyx">Nyx</option>
        <option value="sephora">Sephora</option>
        <option value="channel">Channel</option>
        <option value="estee-lauder">Estee Lauder</option>
      </select>
    </div>
  );
};

export default SearchBar;
