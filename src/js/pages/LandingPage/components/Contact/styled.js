import styled from 'styled-components';
import { rem } from 'polished';

export const ContactWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pink};
  color: ${({ theme }) => theme.colors.white};
  height: ${rem(480)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2, h3 {
    font-size: ${rem(32)};
    text-align: center;
    font-weight: 500;
  }

  h2 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: ${rem(32)};
  }
`;

export const ContactContent = styled.div`
  width: 49%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  
  span { 
    text-align: center;
  }
`;