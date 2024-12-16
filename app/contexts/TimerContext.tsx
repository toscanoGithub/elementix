"use client"

import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

// Define types for the context state
interface TimerContextType {
  timeLeft: number;
  isRunning: boolean;
  startTimer: () => void;
  stopTimer: () => void;
  restartTimer: () => void;
}

const TimerContext = createContext<TimerContextType | undefined>(undefined);

// Custom hook to access the Timer context
export const useTimerContext = (): TimerContextType => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error('useTimerContext must be used within a TimerProvider');
  }
  return context;
};

interface TimerProviderProps {
  children: ReactNode;
}

export const TimerProvider: React.FC<TimerProviderProps> = ({ children }) => {
  const [timeLeft, setTimeLeft] = useState(20); // Timer starts at 20 seconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timerInterval: NodeJS.Timeout | null = null;

    if (isRunning && timeLeft > 0) {
      timerInterval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft <= 0) {
      restartTimer();
    }

    return () => {
      if (timerInterval) clearInterval(timerInterval);
    };
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setTimeLeft(20)
    setIsRunning(false);
  };

  const restartTimer = () => {
    setTimeLeft(20); // Reset to 60 seconds
    setIsRunning(false); 
    setTimeout(() => {
        startTimer()
    }, 1000);
  };

  return (
    <TimerContext.Provider value={{ timeLeft, isRunning, startTimer, stopTimer, restartTimer }}>
      {children}
    </TimerContext.Provider>
  );
};
