import React, { useState, useEffect } from 'react';
import Lottie  from 'lottie-react';
import animationData from '../../animations/progress.json';  // path to your Lottie JSON file

// Props interface to define the expected type for the progress
interface ProgressAnimationProps {
  progress: number;  // Expect progress as a number between 0 and 1
}

const ProgressAnimation: React.FC<ProgressAnimationProps> = ({ progress }) => {
  return (
    <div style={{ width: '200px', height: '200px' }}>
      <Lottie
        animationData={animationData}
        loop={false}  // Disable looping for progress animation
        autoplay={true}  // Start animation automatically
        onProgress={(e) => {
          // If you want to do something with the progress of the animation
          console.log('Progress:', e);
        }}
        initialSegment={[0, Math.floor(progress * 100)]}  // Limit animation based on progress (from 0 to 100)
      />
    </div>
  );
};



export default ProgressAnimation