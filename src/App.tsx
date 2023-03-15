import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Hearder from './components/Header/Hearder';

function App() {
  return (
    <div className="App">
      <Hearder />
      <Outlet />
    </div>
  );
}

export default App;
