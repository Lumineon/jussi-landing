import styled from 'styled-components';
import { rem } from 'polished';

export const MeetUsWrapper = styled.div`
  padding: ${rem(64)} 0;
  position: relative;
`;

export const MeetUsContent = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 71%;
`;

export const MeetUsButton = styled.button`
  margin-top: ${rem(24)};
  border: 1px solid #000000;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 12px 24px;
`;

export const MeetUsLeft = styled.div`
  margin-right: ${rem(107)};
  width: 23%;
  text-align: left;

  h2 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: ${rem(24)};
    font-size: ${rem(32)};
    line-height: ${rem(40)};
    width: 84%;
  }
`;

export const MeetUsRight = styled.div``;

export const MeetUsImage = styled.img`
  width: 100%;
`;

export const MeetUsBackground = styled.div`
  background-color: #F2F2F2;
  width: 50%;
  display: block;
  height: 648px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
`;
