import styled from "styled-components";
import { PageProps } from "../types";

export * from "./conversations";

export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #1a1a1a;
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
`;
