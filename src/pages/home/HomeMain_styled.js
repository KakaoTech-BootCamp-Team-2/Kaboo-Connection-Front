/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container= styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;  
  height: 100vh; 
  align-items: center;
  justify-content: center;
  background-color: blue;

`;

export const Header = styled.header`
  width: 100%;
  color: white;
  text-align: center;
  padding: 10px;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
`;
