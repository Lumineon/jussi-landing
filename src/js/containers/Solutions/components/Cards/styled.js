import styled from 'styled-components';
import { rem } from 'polished';

export const CardWrapper = styled.div``;

export const CardContent = styled.div`
  display: flex;
  margin-top: ${rem(24)};
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 33.3%;
  margin-right: ${rem(20)};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.grey};
  border-radius: ${rem(4)};
  padding: ${rem(16)};
  text-align: left;
`;

export const CardName = styled.span``;

export const CardImage = styled.div`
  background-color: ${({ theme }) => theme.colors.grey};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.grey};
  border-radius: 50%;
  width: ${rem(100)};
  height: ${rem(100)};
  font-size: ${rem(32)};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${rem(53)};
`;

export const CardDescription = styled.span`
  font-size: ${rem(12)};
  color: ${({ theme }) => theme.colors.pink};
  margin: ${rem(16)} 0;
`;
export const CardFeaturesWrapper = styled.ul`
  padding-left: ${rem(16)};
`;

export const CardFeatures = styled.li`
  font-size: ${rem(12)};
  line-height: ${rem(18)};
`;

export const CardButton = styled.button`
  margin-top: ${rem(16)};
  height: ${rem(48)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${rem(6)};
`;