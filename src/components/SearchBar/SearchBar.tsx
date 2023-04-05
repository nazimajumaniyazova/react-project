import React, { useState, useEffect } from 'react';
import './SearchBar.css';
interface IProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

function SearchBar({ handleSubmit }: IProps) {
  const [searchValue, setSearchValue] = useState(() => {
    const saved = localStorage.getItem('searchV');
    return saved || '';
  });
  // const [searchedName, setSearchedName] = useState('');
  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    localStorage.setItem('searchV', event.target.value);
    setSearchValue(event.target.value);
  };
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const input = event.currentTarget.elements[0] as HTMLInputElement;
  //   console.log(input.value);
  //   setSearchedName(input.value);
  // };
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchedName}`);
  //     const data = await result.json();
  //     console.log(data);
  //   };
  //   fetchData();
  // }, [searchedName]);
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
