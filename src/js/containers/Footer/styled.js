import styled from 'styled-components';
import { rem } from 'polished';

export const FooterWrapper = styled.div`
  background-color: #000000;
  height: ${rem(80)};
`;

export const FooterContent = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  width: 71%;
  height: 100%;
`;

export const FooterLeft = styled.div``;

export const FooterLink = styled.a`
  text-decoration: none;
`;

export const FooterRight = styled.div`
  width: 13%;
  display: flex;
  justify-content: space-between;
`;