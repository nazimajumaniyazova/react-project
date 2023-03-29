import React from 'react';
import './Card.css';

export interface ICard {
  imgUrl: string;
  name: string;
  date: string;
  score: string;
}

function Card({ imgUrl, name, date, score }: ICard) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgUrl} alt={name} className="card-img__image" />
      </div>
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-date">{date}</p>
        <p className="card-score">Score: {score}</p>
      </div>
    </div>
  );
}

export default Card;
