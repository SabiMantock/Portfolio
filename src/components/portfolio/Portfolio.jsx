import React from "react";
import Lottie from "lottie-react";
import ecommerce from "../../assets/lottie/ecommerce.json";
import {
  LinkButton,
  LinkButtonWrapper,
  PortfolioContainer,
  PortfolioContentWrapper,
  PortfolioImageWrapper,
  PortfolioProjectTitle,
  PortfolioTitle,
  PortfolioWrapper,
  ProjectDetails,
  ProjectTitle,
  Tech,
  TechStack,
} from "./Portfolio.style";
import { linkButton } from "../../config/config";

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <PortfolioProjectTitle>Recent Projects</PortfolioProjectTitle>
      <PortfolioWrapper>
        <PortfolioImageWrapper>
          <Lottie
            animationData={ecommerce}
            loop={true}
            style={{ width: "100%" }}
          />
        </PortfolioImageWrapper>
        <PortfolioContentWrapper>
          <ProjectTitle>E-Commerce</ProjectTitle>
          <ProjectDetails>
            Built and designed an e-commerce platform that allows users to
            purchase items. Managed all state with Redux to provide a seamless
            user experience. Implemented the back-end operations with Firebase,
            including user authentication. Integrated Stripe to handle payment.
          </ProjectDetails>
          <TechStack>
            <Tech>React</Tech>
            <Tech>Redux</Tech>
            <Tech>Firebase</Tech>
            <Tech>Stripe</Tech>
          </TechStack>
          <LinkButtonWrapper>
            <LinkButton
              onClick={() => linkButton("https://ninestore.netlify.app/")}
            >
              Live
            </LinkButton>
            <LinkButton
              onClick={() =>
                linkButton("https://github.com/SabiMantock/nine-secrets")
              }
            >
              Source
            </LinkButton>
          </LinkButtonWrapper>
        </PortfolioContentWrapper>
      </PortfolioWrapper>
    </PortfolioContainer>
  );
};

export default Portfolio;
