import React from 'react';

import Navigation from './components/Navigation';
import UserFunctions from './components/UserFunctions';

import * as S from './styled';

const Header = () => {
  return(
    <S.HeaderWrapper>
      <S.HeaderLeft>
        <Navigation />
      </S.HeaderLeft>

      <S.HeaderRight>
        <UserFunctions />
      </S.HeaderRight>

    </S.HeaderWrapper>
  );
};

export default Header;