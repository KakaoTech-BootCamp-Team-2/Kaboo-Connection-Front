/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

export const LayoutContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 200vh;
  display: flex;
  flex-direction: column; // 세로 방향으로 정렬
  z-index: 0; // 배경보다 앞에 위치
  margin: 0px 0px 0px 0px;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 0px; /* 콘텐츠 패딩 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
