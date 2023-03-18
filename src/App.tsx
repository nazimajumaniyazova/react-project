import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Hearder from './components/Header/Hearder';
import SearchBar from './components/SearchBar/SearchBar';
function App() {
  return (
    <div className="App">
      <Hearder />
      <SearchBar />
      <Outlet />
    </div>
  );
}

export default App;
