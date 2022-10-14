import styled from "styled-components";
import { PageProps } from "../types";

export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #1a1a1a;
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;

export const ConversationsSidebar = styled.aside`
  background-color: #1f1f1f;
  height: 100%;
  color: white;
  width: 350px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ConversationChannelContainer = styled.main`
  height: 100%;
  color: white;
  width: calc(100vw - 350px);
  position: absolute;
  top: 0;
  right: 0;
`;
