/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const getTextStyle = ({ fontFamily, fontSize }) => css`
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
`;
