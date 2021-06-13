import styled from "styled-components";

const TextInput = styled.input`
  padding: 15px;
  font-family: "Cabin", sans-serif;
  border-radius: 5px;
  box-sizing: border-box;
  min-width: 100%;
  font-size: 1rem;
  box-shadow: -1px 9px 25px 16px rgba(0, 0, 0, 0.05);
  border: 0;
  &:focus {
    outline-color: #ededed;
  }
`;

export default TextInput;
