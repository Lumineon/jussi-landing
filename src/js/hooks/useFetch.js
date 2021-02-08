import { useEffect, useState } from 'react';

export const useFetch = (url, method = 'GET') => {
  const [response, setResponse] = useState({
    data: null,
  });

  useEffect(() =>{
    fetch(url, { method })
      .then(resp => resp.json())
      .then(json => setResponse({
        data: json,
      }))
  }, [url, method]);

  return response;
}