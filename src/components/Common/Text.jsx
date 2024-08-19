/** @jsxImportSource @emotion/react */
import { getTextStyle } from "./Text.style";

// KakaoBold 또는 KakaoRegular

// 기본 노랑 :   #FFF496
// 기본 찐브라운 : #715F00
// 기본 연브라운 :  #D3CBA1
// 블랙 :  #000

const Text = ({
  value,
  fontFamily = "KakaoRegular",
  fontSize = 16,
  color = "#000",
  style: customCss,
}) => {
  return (
    <span css={[getTextStyle({ fontFamily, fontSize, color }), customCss]}>
      {value}
    </span>
  );
};

export default Text;
