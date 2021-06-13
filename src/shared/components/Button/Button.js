import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #4bc95b;
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
    background-color: #35a143;
    color: white;
  }
`;

const Button = ({ children, onClick }) => {
  return (
    <StyledButton onClick={() => (onClick ? onClick : null)}>
      {children}
    </StyledButton>
  );
};

export default Button;
