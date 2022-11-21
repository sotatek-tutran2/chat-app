import styled from "styled-components";
import { OverlayProps } from "../types";

export const OverlayContainer = styled.div<OverlayProps>`
  width: 100%;
  height: 100%;
  background-color: #0000008a;
  z-index: ${(props) => (props.show ? 99 : -1)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
