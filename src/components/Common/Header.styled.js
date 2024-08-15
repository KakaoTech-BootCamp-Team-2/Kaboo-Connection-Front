/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: rgb(255, 255, 255, 0.5);
  color: white;
  width: 100%;
  height: 100px;
  backdrop-filter: blur(10px);
`;

export const Logo = styled.img`
  height: 55px;
`;
export const LogoWrapper = styled.div`
  width: 200px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ServiceName = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-left: 10px;
`;

export const NavBar = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 40px;
`;

export const NavItem = styled.a`
  color: #715f00;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;

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
  margin-left: 630px;
  border: none;
  background-color: transparent; /* 배경 색상 제거 */

  &:hover {
    border: none;
    background-color: transparent; /* 배경 색상 제거 */
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
