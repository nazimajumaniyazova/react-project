import React, { useState } from 'react';
import './Card.css';
import { ICardData } from '../../ts/interfaces/fetchingdata.interface';
import CardModal from '../CardModal/CardModal';

function Card({ image, name, episode, gender, origin, species, id }: ICardData) {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);
  const [cardId, setCardId] = useState<number>(0);
  const handleCardClick = () => {
    setCardId(id);
    setIsModalActive(true);
  };
  return (
    <>
      <div className="card" onClick={handleCardClick}>
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
      {isModalActive ? <CardModal setIsModalActive={setIsModalActive} cardId={cardId} /> : ''}
    </>
  );
}

export default Card;
