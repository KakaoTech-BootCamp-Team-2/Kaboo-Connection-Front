/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const CircleImage = styled.div`
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  width: 100px;
  height: 100px;
  border-radius: 50%; 
  border: 2px solid #D3CBA1;
    flex-shrink: 0; //상위요소flex영향없애기
    flex-grow: 0;
`;