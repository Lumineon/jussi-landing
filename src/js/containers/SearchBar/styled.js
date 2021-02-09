import styled from 'styled-components';
import { rem } from 'polished';

export const SearchBarWrapper = styled.div`
  position: relative;
`;

export const SearchBarInput = styled.input`
  width: ${rem(240)};
  height: ${rem(40)};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.grey};
  box-sizing: border-box;
  border-radius: ${rem(24)};
  padding: ${rem(8)} ${rem(16)};

  ::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.pink};
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type=number] {
    -moz-appearance: textfield;
  }
`;

export const SearchBarIcon = styled.button`
  position: absolute;
  right: 0%;
  top: 50%;
  transform: translate(-50%, -50%);

  &.hidden {
    display: none;
  }
`;

export const SearchBarContent = styled.div`
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    left: 50%;
    z-index: 5;
    top: 9%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    transform: translate(-50%, 50%);
    width: 100%;

    > div {
      padding: ${rem(10)};
    }

    .hidden {
      display: none;
    }
`;