import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
export interface IData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  url: string;
  image: string;
  created: string;
  episode: Array<string>;
  gender: string;
  location: { name: string; url: string };
  origin: { name: string; url: string };
}
export interface PostIData {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: Array<IData>;
}
interface IError {
  error: string;
}
function Home() {
  const [searchedName, setSearchedName] = useState('');
  const [data, setData] = useState<PostIData>();
  const [error, setError] = useState<IError>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements[0] as HTMLInputElement;
    setSearchedName(input.value);
  };
  useEffect(() => {
    setError(undefined);
    setData(undefined);
    const fetchData = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchedName}`);
      const data = await result.json();
      if (result.ok) {
        setData(data);
      } else {
        setError(data);
      }
    };
    fetchData();
  }, [searchedName]);
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {error ? (
        <p className="loading">{error.error}</p>
      ) : data ? (
        <Cards {...data} />
      ) : (
        <p className="loading">Loading...</p>
      )}
    </div>
  );
}

export default Home;
