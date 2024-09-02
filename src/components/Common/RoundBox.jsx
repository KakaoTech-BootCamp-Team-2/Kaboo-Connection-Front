import styled from '@emotion/styled';

const StyledBox = styled.div`
  background: transparent;
  border: 4px solid #d3cba1;
  box-shadow: 0 2px 5px rgba(0,0,0,0.5);
  border-radius: ${props => props.borderRadius || '10px'};
  width: ${props => props.width || '300px'};
  height: ${props => props.height || '200px'};
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StyledBox;
