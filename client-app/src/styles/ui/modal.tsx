import styled from "styled-components";
import { ModalProps } from "../types";

export const ModalContainerStyle = styled.div<ModalProps>`
  width: 650px;
  min-height: 280px;
  background-color: #191919;
  border-radius: 1rem;
  z-index: ${(props) => (props.show ? 100 : -1)};
  opacity: ${(props) => (props.show ? 1 : 0)};
  position: fixed;
  top: 150px;
  left: calc(50vw - 330px);
  transition: all 0.3s ease;
`;

export const ModalHeaderStyle = styled.header`
  padding: 1.5rem;
  border-bottom: 1px solid #555;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 1.5rem;
  }
`;

export const ModalBodyStyle = styled.div`
  padding: 1.5rem;
`;
