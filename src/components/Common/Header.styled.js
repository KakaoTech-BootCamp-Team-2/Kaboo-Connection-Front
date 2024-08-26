/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.5)
  color: white;
  width: 100vw;
  height: 150px;
  backdrop-filter: blur(10px);
`;
export const HeaderSubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 90%;
  height: 100%;
`;

export const Logo = styled.img`
  height: 100px;
`;
export const LogoWrapper = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
  margin-left: 40px;
  width: 400px;
`;

export const NavItem = styled.a`
  color: #715f00;
  text-decoration: none;
  font-size: 17px;
  font-weight: 600;

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
