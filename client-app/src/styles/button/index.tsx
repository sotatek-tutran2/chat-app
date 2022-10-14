import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: #2b09ff;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 20px 18px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  font-weight: 600;
  transition: 250ms background-color ease;
  border: 2px solid #2b09ff;
  &:hover {
    background-color: #3415ff;
  }
  &:active {
    background-color: #3415ff;
  }
  &:focus {
    background-color: #3415ff;
  }
`;
