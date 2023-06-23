import React from 'react'; // Importa a biblioteca React
import { FiSearch } from 'react-icons/fi'; // Importa o ícone FiSearch da biblioteca react-icons/fi

const SearchBar = ({ searchTerm, handleSearch }) => { // Definição do componente SearchBar como uma função com dois parâmetros
  return (
    <div className="game-list-search"> {/* Div que envolve a barra de pesquisa */}
      <input
        type="text"
        placeholder="Buscar por título" 
        value={searchTerm} 
        onChange={handleSearch} 
        className="search-input" 
      />
      <FiSearch className="search-icon" /> {/* Ícone de pesquisa */}
    </div>
  );
};

export default SearchBar; // Exporta o componente SearchBar como padrão para ser utilizado em outros arquivos
