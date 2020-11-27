import React from "react";
import styled from "styled-components";
import image from "../assets/hero.png";
import bg from "../assets/bg.png";
import HeroText from "./HeroText";

const Hero = () => {
  return (
    <Container bg={bg}>
      <Wrapper>
        <InnerWrapper>
          <Left>
            <HeroText />
          </Left>
          {/* <img src={image} alt="Photo by Paweł Czerwiński on Unsplash" /> */}
          <Img src={image} alt="@gouthamgtronics" />
        </InnerWrapper>
      </Wrapper>
    </Container>
  );
};

const Left = styled.div`
  width: 40%;
`;

const Img = styled.img`
  width: 60%;
`;

const InnerWrapper = styled.div`
  max-width: 1000px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(35px);
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${({ bg }) => bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export default Hero;
