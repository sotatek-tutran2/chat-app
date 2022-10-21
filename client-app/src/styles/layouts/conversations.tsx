import styled from "styled-components";
export const SIDEBAR_WIDTH = 400;

export const ConversationsSidebar = styled.aside`
  background-color: #1a1a1a;
  height: 100%;
  color: white;
  width: ${SIDEBAR_WIDTH}px;
  position: absolute;
  top: 0;
  left: 0;
  border-right: 1px solid #5454543d;
  & header {
    background-color: #151515;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.5rem;
    border-bottom: 1px solid #5454543d;
    & h1 {
      font-weight: 500;
    }
    & svg {
      cursor: pointer;
    }
  }
`;

export const ConversationChannelContainer = styled.main`
  height: 100%;
  color: white;
  width: calc(100vw - ${SIDEBAR_WIDTH}px);
  position: absolute;
  top: 0;
  right: 0;
`;

export const ConversationPannelContainer = styled.main`
  height: 100%;
  color: white;
  width: calc(100vw - ${SIDEBAR_WIDTH}px);
  position: absolute;
  top: 0;
  right: 0;
`;
