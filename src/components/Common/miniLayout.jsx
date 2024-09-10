/** @jsxImportSource @emotion/react */
import React from "react";
import Text from "../Common/Text";
import {
  LayoutContainer,
  Line,
  CenterContent,
  ExitButton,
  HeaderBox,
} from "./miniLayout.styled";
import { useNavigate } from "react-router-dom";

const MiniLayout = ({ text, children, layerWidth, isButton }) => {
  const navigate = useNavigate();
  return (
    <LayoutContainer width={layerWidth}>
      <HeaderBox>
        <Text value={text} fontFamily="KakaoBold" fontSize={30} color="#000" />
        {isButton && (
          <ExitButton
            onClick={() => {
              window.location.href = "/";
            }}
          >
            나가기
          </ExitButton>
        )}
      </HeaderBox>

      <Line />
      <CenterContent>{children}</CenterContent>
      <Line />
    </LayoutContainer>
  );
};

export default MiniLayout;
