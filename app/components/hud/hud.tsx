import React, { useEffect, useState } from 'react';
import Lives from './Lives';
import { getLocalStorage } from '@/app/quiz-helpers/local-storage';

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
      <Lives totalLives={5} lives={lives}/>
      <h6>Timer: {timer}</h6>
    </>
  );
};



export default Hud;
