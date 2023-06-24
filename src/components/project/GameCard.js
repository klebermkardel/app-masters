import React from "react";

import './GameCard.css';


const GameCard = ({ id, title, genre, developer, release_date, thumbnail }) => {
  return (
    <div key={id} className="game-card">
      <img src={thumbnail} alt={title} className="game-card-image" />
      <h3 className="game-card-title">{title}</h3>
      <p className="game-card-p">Gênero: {genre}</p>
      <p className="game-card-p">Desenvolvedora: {developer}</p>
      <p className="game-card-p">Desenvolvedora: {release_date}</p>
    </div>
  );
};

export default GameCard;