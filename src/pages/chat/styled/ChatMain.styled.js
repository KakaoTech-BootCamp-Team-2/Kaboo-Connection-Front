/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ChatWrapper = styled.div`
  width: 90%;
  height: 90%;
  background-color: gray;
  display: flex;
  flex-direction: row;
  jusitfy-content: center;
  align-items: center;
  border-top: 3px solid brown;
  border-bottom: 3px solid brown;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: #fff9d9;
`;

export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
`;
