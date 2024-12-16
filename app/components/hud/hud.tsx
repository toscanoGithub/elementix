// hud.tsx

import React from 'react';
import Lives from './Lives';
import Timer from './Timer';

// Define the types for the props
interface HudProps {
  score: number;  // later: +1 1&&H, +2 H only, +3 1 only, +5 empty slot(no H no 1)
  highscore: number; 
  lives: number; // 5 lives
}

const Hud: React.FC<HudProps> = ({ score, highscore, lives,}) => {
  return (
    <div style={{width:"100%", display:"flex", justifyContent:"space-between", alignItems:"center", paddingLeft: 5, paddingRight: 5}}>
      <h6>Score: {score}</h6>
      <h6>Best: {highscore}</h6>
      <Lives totalLives={5} lives={lives}/>
      <Timer  />

    </div>
  );
};

export default Hud;
