import styled, { css } from "styled-components";

export default styled.h1`
  color: white;
  flex: 1;
  background: -webkit-linear-gradient(left, #d435d4, #14203d);
  letter-spacing: 1rem;
  ${(props) =>
    props.title === "TODO" &&
    css`
      background: -webkit-linear-gradient(left, #4c659e, #2d2d2d);
    `}
  ${(props) =>
    props.title === "IN PROGRESS" &&
    css`
      background: -webkit-linear-gradient(left, #cf4040, #c76640);
    `}
  ${(props) =>
    props.title === "DONE" &&
    css`
      background: -webkit-linear-gradient(left, #4bc95b, #c9c94b);
    `}
-webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
