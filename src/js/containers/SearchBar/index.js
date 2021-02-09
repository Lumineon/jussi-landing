import React, { useState, useEffect } from 'react';

import { useFetch } from '../../hooks/useFetch';

import { ReactComponent as SearchButton } from '../../icons/general/search.svg'

import * as S from './styled';

const SearchBar = () => {
  const [inputText, setInputText] = useState('');
  const url = `http://viacep.com.br/ws/${inputText}/json/`;
  const {data, handleFetch, isError} = useFetch(url);
  const placeholder = "Buscar";
  const [className, setClassName] = useState('');

  useEffect(() => {
    isError ? setClassName('hidden') : setClassName('');
  }, [isError])

  function showInfo(data) {
    if (!data.erro) {
      return (
        <div>
          <span>{data.cep}: </span>
          <span>{data.logradouro}, </span>
          {data.complemento === "" ? '' : <span> {data.complemento}</span>}
          <span>{data.bairro}, </span>
          <span>{data.localidade} - </span>
          <span>{data.uf}</span>
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
          type="number"
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
        <div className={className}>
          {data ? showInfo(data) : false}
        </div>
      </S.SearchBarContent>
    </>
  );
};

export default SearchBar;