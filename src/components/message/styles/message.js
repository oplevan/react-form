import styled, { css, keyframes } from 'styled-components';

const slideUp = keyframes`
  from {
    transform: translateY(150%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1
  }
`;

const FlexRow = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const MessageWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  height: 80px;
  width: 350px;
  overflow: hidden;
`;

export const Inner = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 4px;
  border-bottom: solid 3px #2bcb6e;
  box-shadow: 0px 0 7px 1px rgba(0, 0, 0, 0.2);
  animation: 0.8s ${slideUp} ease-out;
  ${FlexRow};
`;

export const MessageContent = styled.div`
  font-size: 12px;
  color: #000;
  ${FlexRow}
`;

export const MessageIcon = styled.div`
  color: #2bcb6e;
  font-size: 20px;
  line-height: 0;
  margin-right: 5px;
`;

export const Text = styled.div``;

export const CloseButton = styled.div`
  color: #b1b1b1;
  cursor: pointer;
  line-height: 0;
`;
