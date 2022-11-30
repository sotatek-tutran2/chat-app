import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background-color: teal;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 20px 18px;
  font-size: 16px;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  font-weight: 600;
  transition: 250ms background-color ease;
  border: 2px solid teal;
  &:hover {
    background-color: #0a7070;
  }
  &:active {
    background-color: #0a7070;
  }
  &:focus {
    background-color: #0a7070;
  }
`;
