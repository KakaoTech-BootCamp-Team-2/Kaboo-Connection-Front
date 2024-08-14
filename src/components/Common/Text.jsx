/** @jsxImportSource @emotion/react */
import { getTextStyle } from "./Text.style";

const Text = ({
  value,
  fontFamily = "KakaoRegular",
  fontSize = 16,
  style: customCss,
}) => {
  // KakaoBold 또는 KakaoRegular
  return (
    <span css={[getTextStyle({ fontFamily, fontSize }), customCss]}>
      {value}
    </span>
  );
};

export default Text;
