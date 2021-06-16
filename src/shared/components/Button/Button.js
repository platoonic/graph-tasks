import styled, { css } from "styled-components";

const StyledButton = styled.a`
  background-color: #2189eb;
  text-align: center;
  justify-content: center;
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  padding: 10px 13px;
  color: white;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.25s;
  user-select: none;
  &:hover {
    color: white;
  }
  ${(props) =>
    props.success &&
    css`
      background-color: #35a143;
      &:hover {
        background-color: #14203d;
        color: #35a143;
      }
    `}
  ${(props) =>
    props.danger &&
    css`
      background-color: #bd3e3e;
      &:hover {
        background-color: #14203d;
        color: #bd3e3e;
      }
    `}
  ${(props) =>
    props.outline &&
    css`
      background-color: transparent;
      padding: 8px 11px;
      border: 3px solid rgba(255, 255, 255, 0.2);
      &:hover {
        border: 3px solid rgba(255, 255, 255, 0.9);
      }
    `}
`;

const Button = ({ children, onClick, ...rest }) => {
  return (
    <StyledButton {...rest} onClick={() => onClick()}>
      {children}
    </StyledButton>
  );
};

export default Button;
