import { useState, useEffect } from 'react';
import { PostICardData, IFetchError } from '../ts/interfaces/fetchingdata.interface';

function useFetch(initialUrl: string): {
  data: PostICardData | undefined;
  isLoading: boolean;
  isError: IFetchError | undefined;
  setUrl: (url: string) => void;
} {
  const [url, setUrl] = useState(initialUrl);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PostICardData>();
  const [isError, setIsError] = useState<IFetchError>();

  useEffect(() => {
    setIsError(undefined);
    setIsLoading(true);
    setData(undefined);
    const fetchData = async () => {
      const result = await fetch(url);
      const data = await result.json();
      if (result.ok) {
        setData(data);
      } else {
        setIsError(data);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [url]);

  return { data, isLoading, isError, setUrl };
}

export default useFetch;
