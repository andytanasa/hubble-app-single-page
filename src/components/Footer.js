import React from "react";
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";
const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <img src="./images/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur blanditiis non vitae neque, error perferendis nostrum
              eum sequi animi rem?
            </li>
            <li>+40 729 345 876</li>
            <li>example@huddle.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All right reserved</p>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
