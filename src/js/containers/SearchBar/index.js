import React, { useEffect, useState, useCallback } from 'react';

import { useFetch } from '../../hooks/useFetch';

import { ReactComponent as SearchButton } from '../../icons/general/search.svg'

import * as S from './styled';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const url = `http://viacep.com.br/ws/${inputText}/json/`;
  const {data, handleFetch, isError} = useFetch(url);
  const placeholder = "Buscar";
  
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
            onClick={() => handleFetch()}
          >
            <SearchButton />
          </S.SearchBarIcon>
        </label>
      </S.SearchBarWrapper>
      <S.SearchBarContent>
        {isError ? <div><span>Digite um CEP válido!</span></div> : false}
        {data ? showInfo(data) : false}
      </S.SearchBarContent>
    </>
  );
};

export default SearchBar;