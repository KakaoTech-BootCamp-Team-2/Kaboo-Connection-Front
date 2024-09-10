/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const StyledDiv = ({ children }) => {
  const defaultYellow = "#FFF496";
  const defaultBrown = "#715F00";
  const liteBrwon = "#D3CBA1";
  const black = "#000";
  return (
    <div
      css={css`
        background-color: ${defaultYellow};
        font-size: 24px;
        border-radius: 20px;
        display: flex;
        gap: 20px;
      `}
    >
      {children}
    </div>
  );
};
