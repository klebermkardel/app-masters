import React from "react";
import "./GameDetails.css";

const GameDetails = ({ game, onClose }) => {
  return (
    <div className="game-details">
      <div className="game-details-content">
        <button className="game-details-close-button" onClick={onClose}>
          X
        </button>
        <img src={game.thumbnail} alt={game.title} className="game-details-image" />
        <h3 className="game-details-title">{game.title}</h3>
        <p className="game-details-p"><span>Descrição:</span> {game.short_description}</p>
        <p className="game-details-p"><span>Gênero:</span> {game.genre}</p>
        <p className="game-details-p"><span>Publicado por:</span> {game.publisher}</p>
        <p className="game-details-p"><span>Desenvolvedora:</span> {game.developer}</p>
        <p className="game-details-p"><span>Lançamento:</span> {new Date(game.release_date).toLocaleDateString("pt-BR")}</p>
      </div>
    </div>
  );
};

export default GameDetails;
