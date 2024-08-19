/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  width: ${({ width }) => width || "100%"};
  box-sizing: border-box;
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
