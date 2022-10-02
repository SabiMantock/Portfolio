import styled from "styled-components";

export const PortfolioContainer = styled.div`
  padding: 20px 100px;
  min-height: 100%;
  background-color: #051622;
  @media (max-width: 768px) {
    padding: 20px 25px;
  }
`;

export const PortfolioTitle = styled.h3`
  font-size: 0.9rem;
  font-family: "Poppins-Light";
  font-weight: bold;
  color: #fb9039;
  text-transform: capitalize;
  margin: 20px 0;
  letter-spacing: 1px;
`;

export const PortfolioProjectTitle = styled.h2`
  font-family: "Poppins-Light";
  font-weight: bold;
  color: #88f7ff;
  text-transform: capitalize;
  margin: 0;
`;

export const PortfolioWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
  @media (max-width: 668px) {
    flex-direction: column;
  }
`;

export const PortfolioImageWrapper = styled.div`
  width: 500px;
  @media (max-width: 668px) {
    width: 250px;
  }
`;

export const PortfolioContentWrapper = styled.div`
  width: 500px;
  @media (max-width: 668px) {
    width: auto;
  }
`;

export const ProjectTitle = styled.h3`
  font-size: 0.9rem;
  font-family: "Poppins-Light";
  font-weight: bold;
  color: #fb9039;
  text-transform: capitalize;
  margin: 0;
  @media (max-width: 668px) {
    font-size: 0.8rem;
  }
`;

export const ProjectDetails = styled.p`
  font-family: "Poppins-Light";
  font-weight: 400;
  color: #88f7ff;
  margin-top: 10px;
  margin-bottom: 10px;
  @media (max-width: 668px) {
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;

export const TechStack = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const Tech = styled.span`
  border: 1px solid #fb9039;
  padding: 5px 7px;
  font-family: "Poppins-Light";
  font-weight: bold;
  font-size: 0.7rem;
  color: #88f7ff;
  border-radius: 5px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const LinkButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const LinkButton = styled.button`
  padding: 5px 20px;
  font-family: "Poppins-Light";
  font-weight: bold;
  color: #88f7ff;
  margin-top: 15px;
  border: none;
  outline: none;
  border: 1px solid #88f7ff;
  background-color: #051622;
  border-radius: 5px;
  cursor: pointer;
  letter-spacing: 1px;
`;
