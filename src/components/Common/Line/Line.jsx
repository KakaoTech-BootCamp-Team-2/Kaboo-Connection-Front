/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Line = styled.div`
  width: ${props => props.width || '100%'};
  height: 3px; // 선의 두께
  background-color: #D3CBA1; // 선의 색
`;

export default Line;