import React from 'react';

import { ReactComponent as MainLogo } from '../../icons/general/logoJussiVectorGreen.svg';

import * as S from './styled';

const Header = () => {
  return(
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <S.HeaderLink href='/'>
          <MainLogo />
        </S.HeaderLink>
        <S.HeaderLink href={'#solutions'}>
          Nossas Soluções
        </S.HeaderLink>
        <S.HeaderLink href={'#meetUs'}>
          Conheça a Jüssi
        </S.HeaderLink>
      </S.HeaderLeft>
      <S.HeaderRight>

      </S.HeaderRight>
    </S.HeaderWrapper>
  );
};

export default Header;