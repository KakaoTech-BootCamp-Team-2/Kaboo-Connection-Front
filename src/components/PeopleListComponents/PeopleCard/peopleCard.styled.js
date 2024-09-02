/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const CardContainer = styled.button`
  width: 190px;
  padding: 15px;
  border-radius: 20px;
  border: 4px solid #d3cba1;
  background-color: transparent;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5);
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 80%;
  border-radius: 10px;
  margin-bottom: 15px;
  border: 1px dotted #d3cba1;
  object-fit: cover; // 이미지가 컨테이너에 맞게 잘림
`;

export const Name = css`
  margin: 0px 0px 7px 5px;
`;

export const Affiliation = css`
  margin: 0px 0px 3px 5px;
`;
