/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const getTextStyle = ({ fontFamily, fontSize, color }) => css`
  font-family: ${fontFamily};
  font-size: ${fontSize}px;
  color: ${color};
`;
