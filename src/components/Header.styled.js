/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: yellow;
  color: white;
  width: 100%;
  height: 150px;
  backdrop-filter: blur(10px);
`;
export const HeaderContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const Logo = styled.img`
  height: 60px;
`;
export const LogoWrapper = styled.div`
  width: 40%;
  height: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ServiceName = styled.h1`
  font-size: 35px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  background-color: pink;
  width: 600px;
  font-size: 20px;
`;

export const NavItem = styled.a`
  color: #715f00;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: black;
  }
`;

export const commonStyles = css`
  margin: 0;
  font-size: 16px;
`;

export const PeopleLogoWrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 40px;
  height: 100%;
  border: none;
  background-color: white;
  margin-left: 60vw;

  &:hover {
    border: none;
    background-color: transparent;
  }

  &:focus {
    outline: none; /* 포커스 시 아웃라인 제거 */
    border: none;
    background-color: transparent;
  }

  &:active {
    outline: none; /* 클릭 시 아웃라인 제거 */
    border: none;
    background-color: transparent;
  }
`;

export const PeopleLogo = styled.img`
  width: 33px;
  height: 33px;
  margin-top: 10px;
`;
