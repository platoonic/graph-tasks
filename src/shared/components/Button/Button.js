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
  transition: 0.3s;
  user-select: none;
  &:hover {
    color: white;
  }
  ${(props) =>
    props.success &&
    css`
      background-color: #35a143;
    `}
  ${(props) =>
    props.danger &&
    css`
      background-color: #bd3e3e;
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
