import React from 'react';
import Card from '../Card/Card';
import './Cards.css';
import { PostICardData } from '../../ts/interfaces/fetchingdata.interface';

function Cards(data: PostICardData) {
  return (
    <div className="cards-section">
      <div className="container">
        <ul className="cards-container">
          {data ? (
            data.results.map((item) => (
              <li key={item.id}>
                <Card {...item} />
              </li>
            ))
          ) : (
            <p className="loading">Loading...</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Cards;
