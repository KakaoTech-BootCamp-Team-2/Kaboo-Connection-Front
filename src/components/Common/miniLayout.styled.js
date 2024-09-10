/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  box-sizing: border-box;
`;
export const HeaderBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: #715f00;
  margin: 15px 0px 15px 0px;
`;

export const CenterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between; 별로임
  justify-content: center;
  gap: 20px;
  margin: 10px;
`;

export const ExitButton = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 20px;
  border: 1px solid #ebc500;
  background-color: #ffef61;
  cursor: pointer;
`;
