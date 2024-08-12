/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const footerStyle = css`
  background-color: transparent; 
  border-top: 2px solid #715F00;
  color: #000;
  text-align: left;
  padding: 20px 0;
  position: fixed;
  bottom: 0;

  width: 100%;
  height: 13   0px;
  
`;
const strongTextStyle = css`
  font-size: 14px;
  font-weight: bold; 
  margin: 20px 0px 0px 50px;
`;

const normalTextStyle = css`
  font-size: 14px;
  margin: 10px 0px 0px 50px;
`;


const Footer = () => {
  return (
    <footer css={footerStyle}>
      <p css={strongTextStyle}>카카오 부트캠프 2조: 춘식2</p>
      <p css={normalTextStyle}>박세호 박지혁 안태진 정은채 한주리</p>
    </footer>
  );
};

export default Footer;
