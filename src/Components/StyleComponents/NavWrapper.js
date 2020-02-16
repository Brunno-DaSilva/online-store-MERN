import styled from "styled-components";

export const NavWrapper = styled.button`
  width: 100vw !important; 
  height: auto;
  background: #ffffff !important;
  .nav-link {
    color: var(--main-dark-gray) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  } @media (max-width: 576px) {
    .navbar-nav {
      display: flex;
      flex-direction: row !important;
    }
`;
