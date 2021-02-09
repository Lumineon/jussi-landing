import styled from 'styled-components';
import { rem } from 'polished';

export const BannerWrapper = styled.div`
  display: flex;
  width: 100%;
  height: ${rem(560)};
  background: ${({ theme }) => theme.colors.green};

  h1 {
    font-size: ${rem(64)};
    line-height: ${rem(77)};
    text-align: left;
    text-transform: uppercase;
    margin-bottom: ${rem(16)};
  }

  p {
    text-align: left;
    width: 70%;
    margin-bottom: ${rem(32)};
  }
`;

export const BannerButton = styled.button`
  border: ${rem(1)} solid ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
  border-radius: ${rem(6)};
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: ${rem(12)} ${rem(24)};
`;

export const BannerText = styled.div`
  width: ${rem(538 - 87)};
`;

export const TwoBars = styled.div`
  font-size: ${rem(64)};
  line-height: ${rem(77)};
  width: ${rem(87)};
  text-align: left;
  color: ${({ theme }) => theme.colors.white};
`;

export const BannerImagesWrapper = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: ${rem(16)} ${rem(20)};
  border: ${rem(1)} solid ${({ theme }) => theme.colors.grey};
  border-radius: ${rem(8)};
  box-shadow: 0px ${rem(32)} ${rem(32)} rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  position: absolute;

  &.Geladeira {
    top: ${rem(156)};
    left: 0;
  }
  &.Batedeira {
    top: 0;
    left: ${rem(129)};
    z-index: 3;
  }
  &.Whisky {
    bottom: 0;
    right: 0;
  }
`;

export const BannerProducts = styled.div`
  width: ${rem(460)};
  position: relative;
  margin-left: ${rem(25)};
`;

export const BannerContent = styled.div`
  display: flex;
  width: 77%;
  padding: ${rem(40)} 0;
  margin: 0 auto;
`;

export const BannerImage = styled.img`
  width: 100%;
`;

export const BannerLink = styled.button`
  color: ${({ theme }) => theme.colors.pink};
  line-height: ${rem(24)};
  outline-color: ${({ theme }) => theme.colors.pink};
  outline-width: ${rem(1)};
  border-radius: ${rem(24)};
  box-sizing: border-box;
  border: ${rem(1)} solid ${({ theme }) => theme.colors.pink};
  padding: ${rem(12)} ${rem(24)};
  margin-top: ${rem(12)};
`;