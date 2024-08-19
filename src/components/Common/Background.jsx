/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import { Circle, BackgroundContainer } from "./Background.styled";

function generateCircles() {
  return [
    { x: -50, y: -30, duration: 4 }, // 왼쪽 위
    { x: 30, y: 40, duration: 11 }, // 오른쪽 가운데
    { x: -40, y: 150, duration: 3 }, // 왼쪽 아래
  ];
}

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
