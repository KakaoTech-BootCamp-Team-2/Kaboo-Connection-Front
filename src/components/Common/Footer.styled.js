/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const footerStyle = css`
  background-color: transparent;
  border-top: 2px solid #715f00;
  color: #000;
  text-align: left;
  padding: 20px 0;
  position: relative;
  bottom: 0;
  z-index: 1000; // 다른 요소들 위로 보이도록 z-index 설정
  width: 100%;
  height: 130px;
`;

export const strongTextStyle = css`
  font-size: 14px;
  font-weight: bold;
  margin: 20px 0px 0px 50px;
`;

export const normalTextStyle = css`
  font-size: 14px;
  margin: 10px 0px 0px 50px;
`;
