import React from 'react';
import { ReactComponent as MainLogo } from '../../../../icons/general/logoJussiVectorGreen.svg';

import * as S from './styled';

const HeaderNavigation = () => {
  return(
    <>
      <S.HeaderLink href='/'>
        <MainLogo />
      </S.HeaderLink>
      <S.HeaderLink href={'#solutions'}>
        Nossas Soluções
      </S.HeaderLink>
      <S.HeaderLink href={'#meetUs'}>
        Conheça a Jüssi
      </S.HeaderLink>
    </>
  )
}

export default HeaderNavigation;
