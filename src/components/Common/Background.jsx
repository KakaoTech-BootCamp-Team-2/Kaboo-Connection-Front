// Background.jsx
import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-300px) translateX(300px); }
`;

const Circle = styled.div`
  position: absolute;
  width: 1800px;
  height: 1300px;
  background-image: radial-gradient(
    circle,
    #fff496 0%,
    rgba(255, 244, 150, 0) 50%
  );
  border-radius: 50%;
  animation: ${float} ${(props) => props.duration}s infinite ease-in-out;
  left: ${(props) => props.x}%;
  top: ${(props) => props.y}%;
`;

function generateCircles() {
  return [
    { x: -50, y: -30, duration: 4 }, // 왼쪽 위
    { x: 30, y: 40, duration: 11 }, // 오른쪽 가운데
    { x: -40, y: 150, duration: 3 }, // 왼쪽 아래
  ];
}

const BackgroundContainer = styled.div`
  position: fixed; // 화면에 고정
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; // 넘치는 부분 숨김
  z-index: -1; // 다른 콘텐츠 뒤로 보내기!
  background-color: white;
`;

function Background() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    setCircles(generateCircles());
  }, []);

  return (
    <BackgroundContainer>
      {circles.map((circle, index) => (
        <Circle
          key={index}
          x={circle.x}
          y={circle.y}
          duration={circle.duration}
        />
      ))}
    </BackgroundContainer>
  );
}

export default Background;
