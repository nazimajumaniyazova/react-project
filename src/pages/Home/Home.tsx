import { useEffect } from 'react';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';
import useFetch from '../../hooks/useFetch';

const apiURL = 'https://rickandmortyapi.com/api/character/?name=';

function Home() {
  const { data, isLoading, isError, setUrl } = useFetch(apiURL);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const input = event.currentTarget.elements[0] as HTMLInputElement;
    setUrl(apiURL + input.value);
  };
  useEffect(() => {
    const saved = localStorage.getItem('searchV') || '';
    setUrl(apiURL + saved);
  });
  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} />
      {isError && <p className="loading">{isError.error}</p>}
      {isLoading ? <p className="loading">Loading...</p> : data && <Cards {...data} />}
    </div>
  );
}

export default Home;
