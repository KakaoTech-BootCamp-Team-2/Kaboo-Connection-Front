/** @jsxImportSource @emotion/react */
import React from "react";
import { footerStyle, strongTextStyle, normalTextStyle } from "./Footer.styled";
import Text from "../Common/Text";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <Text
        value="카카오 부트캠프 2조: 춘식2"
        fontFamily="KakaoBold"
        fontSize={15}
        style={strongTextStyle}
      />
      <Text
        value="박세호 박지혁 안태진 정은채 한주리"
        fontFamily="KakaoRegular"
        fontSize={15}
        style={normalTextStyle}
      />
    </footer>
  );
};

export default Footer;
