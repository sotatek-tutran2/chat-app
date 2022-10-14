import styled from "styled-components";

export const DARK_COLOR = "#131313";

export const InputField = styled.input`
  background: inherit;
  outline: none;
  border: none;
  color: white;
  font-family: "Inter";
  font-size: 18px;
  width: 100%;
  padding: 0;
`;

export const InputContainer = styled.div`
  background-color: ${DARK_COLOR};
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid teal;
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  color: #8f8f8f;
  display: block;
  font-size: 12px;
  margin: 4px 0;
  cursor: pointer;
`;

export const InputError = styled.span`
  font-size: 14px;
  color: red;
`;
