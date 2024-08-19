/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const GlobalStyle = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "KakaoBold";
        src: url("public/fonts/KakaoBold.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      @font-face {
        font-family: "KakaoRegular";
        src: url("public/fonts/KakaoRegular.ttf") format("truetype");
        font-weight: normal;
        font-style: normal;
      }
      body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    `}
  />
);

export default GlobalStyle;
