import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState(() => {
    const saved = localStorage.getItem('searchV');
    return saved || '';
  });

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    localStorage.setItem('searchV', event.target.value);
    setSearchValue(event.target.value);
  };
  return (
    <div className="search-bar-section">
      <div className="container centralize search-bar__wrapper">
        <p className="search-bar__title">Go ahead, hover over search</p>
        <form className="search-bar">
          <input
            type="text"
            className="search-bar__input"
            placeholder="Search"
            onInput={onInputChange}
            value={searchValue}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
