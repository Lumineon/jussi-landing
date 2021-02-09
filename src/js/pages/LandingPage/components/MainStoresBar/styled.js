import styled from 'styled-components';
import { rem } from 'polished';

export const StoresBarWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
`;

export const StoresBarContent = styled.div`
  width: 71%;
  height: ${rem(80)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;