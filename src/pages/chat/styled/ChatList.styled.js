/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const TotalWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 130px;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  width: 85px;
  height: 85px;
  align-items: flex-start;
  justify-content: center;
`;
export const Profile = styled.img`
  width: 90%;
  height: 90%;
`;
export const NameContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 60%;
  height: 60%;
`;

export const UserName = styled.div`
  font-size: ${(props) => props.fontSize || "20px"};
  font-weight: bold;
  margin-top: 5px;
`;

export const TalkContent = styled.div`
  font-size: ${(props) => props.fontSize || "17px"};
  margin-top: 5px;
`;

export const TimeAlramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 30%;
  height: 60%;
  margin-left: 10px;
`;

export const Time = styled.div`
  display: flex;
  width: 80%;
  justify-content: center;
  font-size: 17px;
  margin-top: 5px;
`;
export const AlramWrapper = styled.div`
  display: flex;
  width: 45%;

  justify-content: flex-end;
  margin-top: 5px;
`;
export const Alram = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  font-size: 17px;
  font-weight: bold;
  color: black;
  background-color: #ff5555;
`;
