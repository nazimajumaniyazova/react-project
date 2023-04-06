import React, { useState, useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import CardModal from '../../components/CardModal/CardModal';
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
  info: { count: number; pages: number; next: string; prev: null };
  results: Array<IData>;
}
function Home() {
  const [searchedName, setSearchedName] = useState('');
  const [data, setData] = useState<PostIData>();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements[0] as HTMLInputElement;
    setSearchedName(input.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`https://rickandmortyapi.com/api/character/?name=${searchedName}`);
      const data = await result.json();
      setData(data);
      console.log(data);
    };
    fetchData();
  }, [searchedName]);
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {data ? <Cards {...data} /> : <p className="loading">Loading...</p>}
    </div>
  );
}

export default Home;
