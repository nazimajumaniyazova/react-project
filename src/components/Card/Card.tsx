import React, { Component } from 'react';
import './Card.css';

interface ICard {
  imgUrl: string;
  name: string;
  date: string;
  score: string;
}

export default class Card extends Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="card-img">
          <img src={this.props.imgUrl} alt={this.props.name} className="card-img__image" />
        </div>
        <div className="card-info">
          <p className="card-name">{this.props.name}</p>
          <p className="card-date">{this.props.date}</p>
          <p className="card-score">Score: {this.props.score}</p>
        </div>
      </div>
    );
  }
}
