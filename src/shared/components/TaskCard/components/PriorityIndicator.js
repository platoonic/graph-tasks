import styled, { css } from "styled-components";

export default styled.div`
  background-color: #61a3e8;
  position: absolute;
  bottom: 5px;
  right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-bottom: 5px;
  ${(props) =>
    props.priority === "LOW" &&
    css`
      background-color: #adadad;
    `}
  ${(props) =>
    props.priority === "HIGH" &&
    css`
      background-color: #e86161;
    `}
`;
