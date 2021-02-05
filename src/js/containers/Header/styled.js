import styled from 'styled-components';
import { rem } from 'polished';

export const HeaderWrapper = styled.div`
  padding: ${rem(20)} ${rem(24)};
`;

export const HeaderLeft = styled.nav`
  width: ${rem(479)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderRight = styled.div``;

export const HeaderLink = styled.a`
  text-decoration: none;
`;