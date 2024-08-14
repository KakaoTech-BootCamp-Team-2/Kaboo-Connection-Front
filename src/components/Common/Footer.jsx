/** @jsxImportSource @emotion/react */
import React from "react";
import { footerStyle, strongTextStyle, normalTextStyle } from "./Footer.styled";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <p css={strongTextStyle}>카카오 부트캠프 2조: 춘식2</p>
      <p css={normalTextStyle}>박세호 박지혁 안태진 정은채 한주리</p>
    </footer>
  );
};

export default Footer;
