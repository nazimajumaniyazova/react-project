import React, { Component } from 'react';
import './SearchBar.css';

interface IProps {
  smth?: string;
}

interface IState {
  value: string;
}
export default class SearchBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      value: JSON.parse(localStorage.getItem('inputValue')!).value || '',
    };
  }
  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };
  componentWillUnmount() {
    console.log('dd');
    localStorage.setItem('inputValue', JSON.stringify(this.state));
  }
  render() {
    return (
      <div className="search-bar-section">
        <div className="container search-bar__wrapper">
          <p className="search-bar__title">Go ahead, hover over search</p>
          <form className="search-bar">
            <input
              type="text"
              className="search-bar__input"
              placeholder="Search"
              onInput={this.onInputChange}
              value={this.state.value}
            />
          </form>
        </div>
      </div>
    );
  }
}
