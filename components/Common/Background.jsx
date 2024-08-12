import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-300px) translateX(300px); }
`;

const Circle = styled.div`
  position: absolute;
  width: 1500px;
  height: 1000px;
 background-image: radial-gradient(circle, #FFF496 0%, rgba(255, 244, 150, 0) 50%);
  border-radius: 50%;
  animation: ${float} 20s infinite ease-in-out;
  left: ${props => props.x}%;
  top: ${props => props.y}%;
  animation-duration: ${props => props.duration}s;
`;

function generateCircles() {
    return [
      { x: -40, y: -30, duration: 6 }, // 왼쪽 위
      { x: 40, y: 40, duration: 13 }, // 오른쪽 가운데
      { x: -50, y: 150, duration: 5 }  // 왼쪽 아래
    ];
  }
  

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: white;
  overflow-x: hidden; // 가로 넘어가면 안 보이게
`;

function Background() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const initialCircles = generateCircles(3);
    setCircles(initialCircles);
  }, []);

  return (
    <Container>
    <div>
      {circles.map((circle, index) => (
        <Circle key={index} x={circle.x} y={circle.y} duration={circle.duration} />
      ))}
    </div>
    </Container>
  );
}

export default Background;
