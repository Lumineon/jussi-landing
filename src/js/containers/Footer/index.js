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

          <S.FooterLink href='https://www.facebook.com/agencia.jussi/'>
            <FacebookLogo />
          </S.FooterLink>

          <S.FooterLink href='https://www.instagram.com/jussi/?hl=pt-br'>
            <InstagramLogo />
          </S.FooterLink>

          <S.FooterLink href='https://www.linkedin.com/company/agencia-jussi?originalSubdomain=br'>
            <LinkedinLogo />
          </S.FooterLink>
        </S.FooterRight>

      </S.FooterContent>
    </S.FooterWrapper>
  );

};

export default Footer;