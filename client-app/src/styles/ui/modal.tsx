import styled from "styled-components";
import { ModalProps } from "../types";

export const ModalContainer = styled.div<ModalProps>`
  width: 500px;
  height: 450px;
  background-color: white;
  border-radius: 1rem;
  z-index: ${(props) => (props.show ? 100 : -1)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: fixed;
  top: 400px;
  left: calc(500vw - 225px);
  transition: all 0.3s ease;
`;
