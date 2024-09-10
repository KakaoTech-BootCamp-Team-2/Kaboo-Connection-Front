import React from "react";
import * as styles from "./Header.styled";
import logo from "../../assets/images/kaboologo.png";
import peoplelogo from "../../assets/images/peoplelogo.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <styles.HeaderContainer>
      <styles.LogoWrapper
        onClick={() => {
          navigate("/");
        }}
      >
        <styles.Logo src={logo} alt="Logo" />
        <styles.ServiceName
          style={{
            cursor: "pointer",
          }}
        >
          카부커넥션
        </styles.ServiceName>
      </styles.LogoWrapper>

      <styles.NavBar>
        <styles.NavItem href="/list">카부인 목록</styles.NavItem>
        <styles.NavItem href="/chat">카부 채팅</styles.NavItem>
        <styles.NavItem href="/video/1">카부 라이브1</styles.NavItem>
        <styles.NavItem href="/video/2">카부 라이브2</styles.NavItem>
        <styles.NavItem href="/video/3">카부 라이브3</styles.NavItem>
        <styles.PeopleLogo
          onClick={() => {
            navigate("/login");
          }}
          src={peoplelogo}
        />
      </styles.NavBar>
    </styles.HeaderContainer>
  );
}

export default Header;
