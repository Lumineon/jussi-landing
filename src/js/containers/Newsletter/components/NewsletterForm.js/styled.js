import styled from 'styled-components';
import { rem } from 'polished';

export const NewsletterFormWrapper = styled.div`
  margin-top: ${rem(24)};
`;

export const NewsletterFormContent = styled.div`
  border-bottom: ${rem(1)} solid ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
`;

export const NewsletterInput = styled.input`
  width: ${rem(320)};
  height: ${rem(60)};
  border: none;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};

  ::-webkit-input-placeholder {
  color: ${({ theme }) => theme.colors.white};
}
`;

export const NewsletterSubmit = styled.button`
  text-transform: uppercase;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.green};
`;