// Importa a biblioteca React
import React from 'react';

// Importa o componente GameList da pasta './components/pages/GameList'
import GameList from './components/pages/GameList';

// Importa o arquivo de estilos './App.css'
import './App.css';

// Declaração do componente principal App
const App = () => {
  return (
    // Retorna a estrutura HTML do aplicativo
    <div className="app">
      <h1 className="app__title">Lista de Jogos</h1>
      <div className="app__content">
        {/* Renderiza o componente GameList */}
        <GameList />
      </div>
    </div>
  );
};

// Exporta o componente App para uso em outros arquivos
export default App;
