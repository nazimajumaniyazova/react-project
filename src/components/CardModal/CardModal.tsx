import React, { useState, useEffect } from 'react';
import './CardModal.css';
import { IData } from '../../pages/Home/Home';
interface ICardModalProps {
  setIsModalActive: (arg: boolean) => void;
  cardId: number;
}
function CardModal({ setIsModalActive, cardId }: ICardModalProps) {
  const [cardData, setCardData] = useState<IData>();
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/character/${cardId}`);
      const data = await result.json();
      setCardData(data);
    };
    fetchData();
  }, [cardId]);
  return (
    <div className="card-modal__wrapper" onClick={() => setIsModalActive(false)}>
      <div className="card-modal" onClick={(e) => e.stopPropagation()}>
        <div className="card-modal__inner">
          <div className="card-modal__image">
            <img src={cardData?.image} alt={cardData?.name} onLoad={() => setIsImageLoaded(true)} />
          </div>
          {isImageLoaded ? (
            <div className="card-modal__info">
              <h3>{cardData?.name}</h3>
              <p>Status: {cardData?.status}</p>
              <p>Species: {cardData?.species}</p>
              <p>Gender: {cardData?.gender}</p>
              <p>Origin: {cardData?.origin.name}</p>
              <p>Location: {cardData?.location.name}</p>
              <p>Episodes: {cardData?.episode.length}</p>
            </div>
          ) : (
            <p className="loading">Loading...</p>
          )}
        </div>
        <span className="card-modal__close" onClick={() => setIsModalActive(false)}>
          <i className="fa-solid fa-xmark"></i>
        </span>
      </div>
    </div>
  );
}

export default CardModal;
