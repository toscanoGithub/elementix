// Timer.tsx

"use client"

import { useTimerContext } from "@/app/contexts/TimerContext";
import Image from "next/image";

const Timer: React.FC = () => {
  const { timeLeft, isRunning, startTimer, stopTimer, restartTimer } = useTimerContext();

  // Format the time into minutes and seconds
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div style={{display:"flex",  flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
      <h2>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
      <Image style={{opacity: 0.5}} width={20} height={20}  src={require("../../clock.png")} alt={"Clock"} />
      
    </div>
  );
};

export default Timer;
