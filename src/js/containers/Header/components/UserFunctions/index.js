import React from 'react';

import SearchBar from '../../../SearchBar'
import { ReactComponent as Cart } from '../../../../icons/general/shopping-cart.svg';

import * as S from './styled';

const HeaderNavigation = () => {
  return(
    <>
      <SearchBar />
      <S.HeaderLink href='/'>
        Login
      </S.HeaderLink>
      <S.HeaderButton>
        <Cart />
      </S.HeaderButton>
    </>
  )
}

export default HeaderNavigation;
