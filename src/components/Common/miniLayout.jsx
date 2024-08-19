/** @jsxImportSource @emotion/react */
import React from "react";
import Text from "../Common/Text";
import { LayoutContainer, Line, CenterContent } from "./miniLayout.styled";

const MiniLayout = ({ text, children, layerWidth }) => {
  return (
    <LayoutContainer width={layerWidth}>
      <Text value={text} fontFamily="KakaoBold" fontSize={30} color="#000" />
      <Line />
      <CenterContent>{children}</CenterContent>
      <Line />
    </LayoutContainer>
  );
};

export default MiniLayout;
