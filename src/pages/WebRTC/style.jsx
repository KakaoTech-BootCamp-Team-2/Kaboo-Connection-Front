/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const defaultYellow = "#FFF496";
const defaultBrown = "#715F00";
const liteBrwon = "#D3CBA1";
const black = "#000";

export const VideoLayout = ({ children }) => {
  return (
    <div
      css={css`
        width: 50%;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        gap: 2rem;
        align-items: center;
        flex-direction: column;
      `}
    >
      {children}
    </div>
  );
};

export const VideoBox = ({ children }) => {
  return (
    <div
      css={css`
        width: 400px;
        /* height: 60%; */
        background-color: ${defaultBrown};
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};
