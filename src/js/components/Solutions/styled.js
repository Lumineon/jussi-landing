import styled from 'styled-components';
import { rem } from 'polished';

export const ContactWrapper = styled.div`
  height: ${rem(557)};
  padding: ${rem(56)};
  width: 70%;
  margin: 0 auto;
  background: red;
`;

export const ContactContent = styled.div``;

export const ContactTitle = styled.div`
  display: flex;
  align-items: center;

  h2 {
    font-size: ${rem(32)};
    text-transform: uppercase;
    font-weight: 700;
    margin-left: ${rem(4)};
  }

  span {
    color: #03FFA5;
    font-size: ${rem(32)};
    font-weight: 700;
  }
`;