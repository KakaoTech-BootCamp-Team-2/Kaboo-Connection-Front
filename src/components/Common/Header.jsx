import React from "react";
import * as styles from "./Header.styled";
import logo from "../../assets/images/kaboologo.png";
import peoplelogo from "../../assets/images/peoplelogo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <styles.HeaderContainer>
      <styles.HeaderSubContainer>
        <styles.LogoWrapper
          onClick={() => {
            navigate("/");
          }}
        >
          <styles.Logo src={logo} alt="Logo" />
          <styles.ServiceName>카부커넥션</styles.ServiceName>
        </styles.LogoWrapper>

        <styles.NavBar>
          <styles.NavItem href="/">카부 게시판</styles.NavItem>
          <styles.NavItem href="/login">카부 프로젝트</styles.NavItem>
          <styles.NavItem href="/">카부 편의</styles.NavItem>
          <styles.NavItem href="/chat">카부 커넥션</styles.NavItem>
        </styles.NavBar>
      </styles.HeaderSubContainer>
      <styles.PeopleLogoWrapper>
        <styles.PeopleLogo src={peoplelogo} />
      </styles.PeopleLogoWrapper>
    </styles.HeaderContainer>
  );
}

export default Header;
