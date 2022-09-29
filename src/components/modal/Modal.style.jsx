import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
from {opacity: 0} 
to {opacity: 1}
`;
const slideIn = keyframes`
from {bottom: -300px; opacity: 0}
to {bottom: 0; opacity: 1}
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation-name: ${fadeIn};
  animation-duration: 0.4s;
`;

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(255, 255, 255, 0.9);
  color: black;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  animation-name: ${slideIn};
  animation-duration: 0.4s;
`;

export const CloseButton = styled.div`
  margin: 0;
  width: 35px;
  height: 35px;
  position: fixed;
  right: 0;
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
`;

export const MobileViewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
  justify-content: center;
`;

export const MobileLink = styled.a`
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  color: #4660ad;
  font-size: 1.25rem;
  font-family: "Poppins-Light";
  font-weight: bold;
`;
