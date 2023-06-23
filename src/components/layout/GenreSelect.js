import React from 'react'; // Importa a biblioteca React

const GenreSelect = ({ selectedGenre, handleGenreChange, genres }) => { // Definição do componente GenreSelect como uma função com três parâmetros
  return (
    <select value={selectedGenre} onChange={handleGenreChange} className="genre-select"> {/* Elemento select para seleção de gênero */}
      <option value="">Todos os gêneros</option> {/* Opção padrão para exibir todos os gêneros */}
      {genres.map((genre) => ( // Mapeia os gêneros e cria uma opção para cada um
        <option key={genre} value={genre}> {/* Opção com valor do gênero */}
          {genre} {/* Texto do gênero */}
        </option>
      ))}
    </select>
  );
};

export default GenreSelect; // Exporta o componente GenreSelect como padrão para ser utilizado em outros arquivos
