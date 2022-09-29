import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 20px 100px;
  display: flex;
  align-items: center;
  min-height: 100%;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 20px 25px;
  }

  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

export const HeaderTextContainer = styled.div`
  width: 500px;
  @media (max-width: 668px) {
    width: 100%;
    margin-top: 100px;
  }
`;

export const HeaderImagecontainer = styled.div`
  width: 500px;
  @media (max-width: 668px) {
    display: none;
  }
`;

export const HeaderText = styled.p`
  font-family: "Poppins-Light";
  font-weight: 400;
  color: #0a246f;
`;

export const ResumeButton = styled.button`
  outline: none;
  border: none;
  padding: 10px 25px;
  background: #0a246e;
  color: #88f7ff;
  font-family: "Poppins-Light";
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #88f7ff;
    color: #0a246e;
    transition: ease-in 0.3s;
  }
`;
