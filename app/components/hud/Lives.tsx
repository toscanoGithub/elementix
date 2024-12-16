// Lives.tsx

import React from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // filled and outlined hearts

interface LivesProps {
  totalLives: number; // Always 5 hearts filled and outlined
  lives: number; // Remaining filled hearts
}

const Lives: React.FC<LivesProps> = ({ totalLives = 5, lives }) => {
    const renderHearts = () => {
        switch (lives) {
            case 5:
                return <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={lives}>
                    <AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} />
                </span>
            case 4:
                return <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={lives}>
                    <AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiOutlineHeart color='#363C4A70' size={18}  />
                </span>
            case 3:
                return <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={lives}>
                    <AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  />
                </span>
            case 2:
                return <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={lives}>
                        <AiFillHeart color='red' size={18} /><AiFillHeart color='red' size={18} /><AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  />
                </span>
            case 1:
            return <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={lives}>
                    <AiFillHeart color='red' size={18} /><AiOutlineHeart color='#363C4A70' size={18} /><AiOutlineHeart color='#363C4A70' size={18} /><AiOutlineHeart color='#363C4A70' size={18} /><AiOutlineHeart color='#363C4A70' size={18} />
            </span>
            default:
                // No more life
                return <span style={{display:"flex", justifyContent:"center", alignItems:"center"}} key={lives}>
                    <AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  /><AiOutlineHeart color='#363C4A70' size={18}  />
                </span>
        }
    }
  return (
    <div>
      <div>
        {Array.from({ length: 1 }, (_, index) => {

            return renderHearts()
        })}
      </div>
      
    </div>
  );
};

export default Lives;

// 🤍 ❤️