import React, { useState, useEffect } from 'react';
import { useTransition, animated } from 'react-spring';
import Loader from '../layout/Loader';
import GameCard from '../project/GameCard';
import GameDetails from '../project/GameDetails';
import './GameList.css';
import { fetchGames } from '../services/api';
import SearchBar from '../layout/SearchBar';
import GenreSelect from '../layout/GenreSelect';

// Componente GameList
const GameList = () => {
  // Estados do componente
  const [games, setGames] = useState([]); // Lista de jogos
  const [filteredGames, setFilteredGames] = useState([]); // Jogos filtrados
  const [isLoading, setIsLoading] = useState(true); // Indicador de carregamento
  const [searchTerm, setSearchTerm] = useState(''); // Termo de busca
  const [selectedGenre, setSelectedGenre] = useState(''); // Gênero selecionado
  const [error, setError] = useState(''); // Erro na busca de jogos
  const [selectedGame, setSelectedGame] = useState(null); // Jogo selecionado para exibir detalhes
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar se o modal está aberto

  // Efeito que busca os jogos ao carregar o componente
  useEffect(() => {
    const fetchGamesData = async () => {
      try {
        const data = await fetchGames(); // Busca os jogos chamando a função fetchGames
        setGames(data); // Define a lista de jogos obtida na resposta
        setError(''); // Limpa o erro em caso de sucesso
      } catch (error) {
        console.log(error);
        setError(
          'O servidor não conseguiu responder por agora, tente voltar novamente mais tarde'
        );
      } finally {
        setIsLoading(false); // Define o estado de carregamento como falso independentemente do resultado
      }
    };

    fetchGamesData(); // Chama a função fetchGamesData para buscar os jogos
  }, []);

  // Efeito que filtra os jogos com base no termo de busca e no gênero selecionado
  useEffect(() => {
    const searchResults = games.filter((game) =>
      game.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredResults = selectedGenre
      ? searchResults.filter((game) => game.genre === selectedGenre)
      : searchResults;

    const sortedResults = filteredResults.sort((a, b) => a.title.localeCompare(b.title));

    setFilteredGames(sortedResults); // Define os jogos filtrados e ordenados
  }, [games, searchTerm, selectedGenre]);

  // Função para lidar com a alteração no termo de busca
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // Função para lidar com a alteração no gênero selecionado
  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const genres = [...new Set(games.map((game) => game.genre))]; // Lista de gêneros sem repetição

  // Função para lidar com o clique em um jogo
  const handleGameClick = (game) => {
    setSelectedGame(game);
    setIsModalOpen(true);
  };

  // Função para fechar o modal e limpar o jogo selecionado
  const handleModalClose = () => {
    setSelectedGame(null);
    setIsModalOpen(false);
  };

  // Definição das transições animadas utilizando o hook useTransition
  const transitions = useTransition(filteredGames, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 220, friction: 14 },
  });

  return (
    <div className="game-list">
      <div className="game-list-header">
        {/* Componente de barra de pesquisa */}
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />

        {/* Componente de seleção de gênero */}
        <GenreSelect
          selectedGenre={selectedGenre}
          handleGenreChange={handleGenreChange}
          genres={genres}
        />
      </div>

      {/* Exibe o loader durante o carregamento */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        // Exibe a mensagem de erro, caso exista
        <p className="error-message">{error}</p>
      ) : filteredGames.length === 0 ? ( // Verifica se a lista de jogos filtrados está vazia
        <p className="error-message">Nenhum jogo encontrado</p>
      ) : (
        // Exibe os cards dos jogos com transições animadas
        <div className="game-list-cards">
          {transitions((style, game) => (
            <animated.div style={style} key={game.id} onClick={() => handleGameClick(game)}>
              <GameCard
                id={game.id}
                title={game.title}
                genre={game.genre}
                developer={game.developer}
                release_date={new Date(game.release_date).toLocaleDateString('pt-BR')}
                thumbnail={game.thumbnail}
              />
            </animated.div>
          ))}
        </div>
      )}

      {/* Exibe os detalhes do jogo selecionado, se houver */}
      {isModalOpen && (
        <div className="game-details" onClick={handleModalClose}>
          <GameDetails game={selectedGame} onClose={handleModalClose} />
        </div>
      )}
    </div>
  );
};

export default GameList;
