import { Close } from "@mui/icons-material";
import React from "react";
import {
  CloseButton,
  MobileLink,
  MobileViewWrapper,
  ModalContainer,
  ModalWrapper,
} from "./Modal.style";

const Modal = ({ onOpen }) => {
  return (
    <>
      <ModalContainer>
        <ModalWrapper>
          <CloseButton onClick={() => onOpen(false)}>
            <Close fontSize="large" />
          </CloseButton>
          <MobileViewWrapper>
            <MobileLink href="#" onClick={() => onOpen(false)}>
              Portfolio
            </MobileLink>
            <MobileLink href="#" onClick={() => onOpen(false)}>
              About
            </MobileLink>
            <MobileLink href="#" onClick={() => onOpen(false)}>
              Contact
            </MobileLink>
          </MobileViewWrapper>
        </ModalWrapper>
      </ModalContainer>
    </>
  );
};

export default Modal;
