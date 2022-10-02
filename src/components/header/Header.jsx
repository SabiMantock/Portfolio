import React from "react";
import ReactTyped from "react-typed";
import Lottie from "lottie-react";
import developerSkills from "../../assets/lottie/developer-skills.json";
import {
  HeaderContainer,
  HeaderImagecontainer,
  HeaderText,
  HeaderTextContainer,
  HeaderTitle,
  ResumeButton,
} from "./Header.style";
import { linkButton } from "../../config/config";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTextContainer>
        <HeaderTitle>Hello! I AM </HeaderTitle>
        <ReactTyped
          style={{
            fontSize: "1.75rem",
            fontFamily: "Poppins-Light",
            fontWeight: "bold",
            color: "#4660ad",
          }}
          strings={[
            "Sabi Mantock",
            "A Software Developer",
            "Specialized in React",
          ]}
          typeSpeed={80}
          backSpeed={50}
          backDelay={1}
          loop
          smartBackspace
        />
        <HeaderText>
          A passionate Software Developer 🚀 having experience in designing and
          building Web applications with JavaScript / Reactjs and some other
          cool libraries and frameworks.
        </HeaderText>
        <ResumeButton
          onClick={() =>
            linkButton(
              "https://docs.google.com/document/d/1oGENAFbF9co8ex71rqnySrK-QJIWNlUM-jdma5aceoY/edit?usp=sharing"
            )
          }
          target
        >
          Resume
        </ResumeButton>
      </HeaderTextContainer>
      <HeaderImagecontainer>
        <Lottie animationData={developerSkills} loop={true} />
      </HeaderImagecontainer>
    </HeaderContainer>
  );
};

export default Header;
