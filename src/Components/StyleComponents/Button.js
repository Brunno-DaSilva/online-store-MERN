import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: auto;
  padding: 0.8rem;
  border: 1px solid var(--main-vivid-color);
  background-color: var(--main-vivid-color);
  color: var(--main-bg);
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin: 0.5rem;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    color: var(--main-cool-blue-color);
    border: 1px solid var(--main-cool-blue-color);
    background: transparent;
  }
  &:focus {
    outline: none;
  }
`;
