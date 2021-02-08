import React from 'react';

import Navigation from './components/Navigation/index';
import UserFunctions from './components/UserFunctions/index';

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