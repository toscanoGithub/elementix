import React from 'react';

// Define the types for the props
interface HudProps {
  score: number;
  highscore: number;
  lives: number; // 5 lives
  timer: number; // 20 seconds
}

const Hud: React.FC<HudProps> = ({ score, highscore, lives, timer }) => {
  return (
    <>
      <h6>Score: {score}</h6>
      <h6>Best: {highscore}</h6>
      <h6>Lives: {lives}</h6>
      <h6>Timer: {timer}</h6>
    </>
  );
};



export default Hud;
