import React from 'react';
import './Card.css';
import { IData } from '../Cards/Cards';
export interface ICard {
  id?: number;
  imgUrl: string;
  name: string;
  date: string;
  score: string;
}

function Card({ image, name, episode, gender, origin, species }: IData) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt={name} className="card-img__image" />
      </div>
      <div className="card-info">
        <p className="card-name">{name}</p>
        <p className="card-date">{gender}</p>
        <p className="card-score">Species: {species}</p>
        <p className="card-score">Episodes: {episode.length}</p>
        <p className="card-score">Origin: {origin.name}</p>
      </div>
    </div>
  );
}

export default Card;
