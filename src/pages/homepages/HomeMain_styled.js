/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container= styled.div`
display: flex;
flex-direction: column;
width: device-width;
height: 100vh;
overflow: hidden;
background-color:  #fff9d6;
`;

export const Header = styled.header`
  width: 100%;
  color: white;
  text-align: center;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-y: auto;
`;

