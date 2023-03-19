import React, { Component } from 'react';
import Cards from '../components/Cards/Cards';
import SearchBar from '../components/SearchBar/SearchBar';
export default class Home extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Cards />
      </div>
    );
  }
}
