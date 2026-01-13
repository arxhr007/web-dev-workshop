// ⚛️ EXAMPLE 5: Like Button (Popular Pattern)
import { useState } from "react";

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };
  
  return (
    <div style={{ padding: '20px' }}>
      <h2>Instagram-style Like</h2>
      <button 
        onClick={handleLike}
        style={{
          padding: '12px 24px',
          fontSize: '18px',
          backgroundColor: isLiked ? '#e0245e' : '#f0f0f0',
          color: isLiked ? 'white' : 'black',
          border: 'none',
          borderRadius: '25px',
          cursor: 'pointer',
          transition: 'all 0.3s'
        }}
      >
        {isLiked ? "❤️" : "🤍"} {likes}
      </button>
    </div>
  );
}

export default LikeButton;
