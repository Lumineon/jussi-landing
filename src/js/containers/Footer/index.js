import React from 'react';

import { ReactComponent as WppCompanyLogo } from '../../icons/social/wppcompany.svg';
import { ReactComponent as FacebookLogo } from '../../icons/social/facebook.svg';
import { ReactComponent as InstagramLogo } from '../../icons/social/instagram.svg';
import { ReactComponent as LinkedinLogo } from '../../icons/social/linkedin.svg';

import * as S from './styled';

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContent>
        <S.FooterLeft>
          <WppCompanyLogo />
        </S.FooterLeft>
        <S.FooterRight>
          <FacebookLogo />
          <InstagramLogo />
          <LinkedinLogo />
        </S.FooterRight>
      </S.FooterContent>
    </S.FooterWrapper>
  );

};

export default Footer;