import styled from 'styled-components';
import { rem } from 'polished';

export const SearchBarWrapper = styled.div`
  position: relative;
`;

export const SearchBarInput = styled.input`
  width: ${rem(240)};
  height: ${rem(40)};
  border: ${rem(1)} solid #F2F2F2;
  box-sizing: border-box;
  border-radius: ${rem(24)};
  padding: ${rem(8)} ${rem(16)};

  ::-webkit-input-placeholder {
    color: #EE0E7D;
  }
`;

export const SearchBarIcon = styled.button`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SearchBarContent = styled.div`
  position: absolute;
    background: white;
    left: 50%;
    top: 50%;
    z-index: 1;
    transform: translate(-50%, 50%);
`;