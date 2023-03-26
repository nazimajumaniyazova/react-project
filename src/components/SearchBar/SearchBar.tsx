import React, { Component } from 'react';
import './SearchBar.css';

interface IProps {
  smth?: string;
}

interface IState {
  value: string;
}
export default class SearchBar extends Component<IProps, IState> {
  valueLocal: string | null;
  constructor(props: IProps) {
    super(props);
    this.valueLocal = localStorage.getItem('inputValue');
    if (!this.valueLocal) {
      this.valueLocal = ' ';
    }
    console.log(this.valueLocal);
    this.state = {
      value: this.valueLocal,
    };
  }
  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    this.setState({ value: event.target.value });
  };
  componentWillUnmount() {
    localStorage.setItem('inputValue', this.state.value);
  }
  render() {
    return (
      <div className="search-bar-section">
        <div className="container centralize search-bar__wrapper">
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
