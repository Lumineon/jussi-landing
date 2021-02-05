import React from 'react';

import Cards from './components/Cards/index';

import * as S from './styled';

const Contact = () => {
  return (
    <S.ContactWrapper>
      <S.ContactContent>
        <S.ContactTitle>
          <span>{`//`}</span><h2 id='solutions'>Nossas soluções</h2>
        </S.ContactTitle>
        <Cards />
      </S.ContactContent>
    </S.ContactWrapper>
  );

};

export default Contact;