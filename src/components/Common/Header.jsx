import React from "react";
import * as styles from "./Header_styled";
import logo from "../../assets/images/kaboologo.png";
import peoplelogo from "../../assets/images/peoplelogo.png";

function Header() {
  return (
    <styles.HeaderContainer>
      <styles.LogoWrapper>
        <styles.Logo src={logo} alt="Logo" />
        <styles.ServiceName>카부카부</styles.ServiceName>
      </styles.LogoWrapper>

      <styles.NavBar>
        <styles.NavItem href="/">카부 게시판</styles.NavItem>
        <styles.NavItem href="#about">카부 프로젝트</styles.NavItem>
        <styles.NavItem href="#services">카부 편의</styles.NavItem>
        <styles.NavItem href="#contact">카부 커넥션</styles.NavItem>
      </styles.NavBar>
      <styles.PeopleLogoWrapper>
        <styles.PeopleLogo src={peoplelogo} />
      </styles.PeopleLogoWrapper>
    </styles.HeaderContainer>
  );
}

export default Header;
