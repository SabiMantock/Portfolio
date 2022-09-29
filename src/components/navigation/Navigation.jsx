import React, { useState } from "react";
import {
  Logo,
  MenuButton,
  NavigationContainer,
  NavLink,
  NavLinkContainer,
  NavWrapper,
} from "./Navigation.styled";
import { Menu } from "@mui/icons-material";
import Modal from "../modal/Modal";

const Navigation = () => {
  const [modalState, setModalState] = useState(false);
  const handleModal = () => {
    setModalState(!modalState);
  };
  return (
    <>
      <NavigationContainer>
        <Logo href="#">Sabi Mantock</Logo>
        <NavWrapper>
          <NavLinkContainer>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Portfolio</NavLink>
            <NavLink href="#">Contact</NavLink>
          </NavLinkContainer>
          <MenuButton onClick={handleModal}>
            <Menu fontSize="large" />
          </MenuButton>
        </NavWrapper>
      </NavigationContainer>
      {modalState && <Modal onOpen={setModalState} />}
    </>
  );
};

export default Navigation;
