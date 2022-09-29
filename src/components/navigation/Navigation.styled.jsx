import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  background-color: #fff;
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
`;

export const Logo = styled.a`
  text-transform: uppercase;
  font-size: 1.25rem;
  text-decoration: none;
  color: #4660ad;
  font-family: "Poppins-Light";
  font-weight: bold;
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkContainer = styled.div`
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: #4660ad;
  font-size: 1rem;
  font-weight: bold;
  font-family: "Poppins-Light";
`;

export const MenuButton = styled.div`
  margin: 0;
  width: 35px;
  height: 35px;
  @media (min-width: 769px) {
    display: none;
  }
`;
