import { useCallback, useState } from 'react';

export const useFetch = (url) => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setError] = useState(false);
  const [data, setData] = useState(null);

  const handleFetch = useCallback(async (props) => {
    setLoading(false);
    setError(false);

    try {
      const data = await (await fetch(props?.url || url)).json();

      setSuccess(true);
      setData(data);
    } catch (err) {
      setError(true);
      console.log('Failed to fetch' + err)
    } finally {
      setLoading(false)
    }
  }, [url]);

  return {
    isLoading,
    isError,
    isSuccess,
    data,
    handleFetch,
  };
}