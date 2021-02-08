import React, { useEffect, useState, useCallback } from 'react';

import { useFetch } from '../../hooks/useFetch';

import { ReactComponent as SearchButton } from '../../icons/general/search.svg'

import * as S from './styled';

const SearchBar = () => {
  const [state, setState] = useState({
    data: null,
    error: null,
    isLoading: false,
  });
  const [inputText, setInputText] = useState('');
  const url = `http://viacep.com.br/ws/${inputText}/json/`;
  const placeholder = "Buscar";

  const fetchData = useCallback((url) => {
    fetch(url)
    .then(resp => resp.json())
    .then(json => setState({
      isLoading: true,
      data: json,
    }))
  })
  
  function showInfo(data) {
    if (!data.erro) {
      return (
        <div>
          <ul>
            <li>{data.cep}</li>
            <li>{data.logradouro}</li>
            {data.complemento === "" ? '' : <li>{data.complemento}</li>}
            <li>{data.bairro}</li>
            <li>{data.localidade}</li>
            <li>{data.uf}</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div>
          <span>Cep não encontrado!</span>
        </div>
      )
    }
  }

  return(
    <>
      <S.SearchBarWrapper>
        <S.SearchBarInput 
          type='search'
          id="searchBar"
          name="searchBar"
          placeholder={placeholder}
          value={inputText}
          onChange={({ target }) => setInputText(target.value)}
        />
        <label htmlFor="searchBar">
          <S.SearchBarIcon
            onClick={() => fetchData(url)}
          >
            <SearchButton />
          </S.SearchBarIcon>
        </label>
      </S.SearchBarWrapper>
      <S.SearchBarContent>
        {state.data ? showInfo(state.data) : false}
      </S.SearchBarContent>
    </>
  );
};

export default SearchBar;