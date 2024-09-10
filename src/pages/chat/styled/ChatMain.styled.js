/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 85%;
  height: 100vh;
  align-items: center;
  justify-content: center;
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
  display: flex;
  flex-direction: row;
  jusitfy-content: center;
  align-items: center;
    border-radius: 20px;
    border: 4px solid #d3cba1;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  height: 100%;
  background-color: transparent;
    border-right: 4px solid #d3cba1;
    overflow-y: auto;
`;
export const ChatListButton = styled.div``;
export const RightWrapper = styled.div`
  width: 50%;
  height: 100%;
    border-radius:20px;
`;
