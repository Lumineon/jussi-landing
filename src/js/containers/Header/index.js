import React from 'react';

import {ReactComponent as MainLogo} from '../../icons/general/logoJussiVectorGreen.svg';

import * as S from './styled';

const Header = () => {
  return(
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <MainLogo />
        <S.HeaderLink>
          Nossas Soluções
        </S.HeaderLink>
        <S.HeaderLink>
          Conheça a Jüssi
        </S.HeaderLink>
      </S.HeaderLeft>
      <S.HeaderRight>

      </S.HeaderRight>
    </S.HeaderWrapper>
  );
};

export default Header;