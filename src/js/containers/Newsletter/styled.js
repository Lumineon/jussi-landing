import styled from 'styled-components';
import { rem } from 'polished';

export const NewsletterWrapper = styled.div`
  background-color: #000000;
  color: white;
  height: ${rem(436)};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NewsletterContent = styled.div`
  width: 41%;
`;

export const NewsletterTitle = styled.div`
  display: flex;

  span {
    font-size: ${rem(32)};
    color: #03FFA5;
    font-weight: 700;
  }

  h2 {
    font-size: ${rem(32)};
    text-transform: uppercase;
    font-weight: 700;
    margin-left: ${rem(4)};
  }
`;