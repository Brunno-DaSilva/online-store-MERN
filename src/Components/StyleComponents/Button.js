import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1.4rem;
  color: var(--main-dark-gray);
  background-color: transparent;
  border: none;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: var(--main-vivid-color);
  }
  &:focus {
    outline: none;
  }
`;
