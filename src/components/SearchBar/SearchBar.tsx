import React, { useState } from 'react';
import './SearchBar.css';
export interface IProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBar({ handleSubmit }: IProps) {
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
        <p className="search-bar__title">Search for Rick and Morty heroes by name</p>
        <form className="search-bar" onSubmit={handleSubmit}>
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
