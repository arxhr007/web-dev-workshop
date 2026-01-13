// 🎯 MINI PROJECT: Social Media Post Card
// This is the COMPLETE version - use this as reference

import { useState } from "react";

function Post({ author, avatar, content, initialLikes = 0 }) {
  // State management
  const [likes, setLikes] = useState(initialLikes);
  const [isLiked, setIsLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([
    "Great post!",
    "Thanks for sharing!",
    "Very interesting 🤔"
  ]);
  
  // Handle like button click
  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };
  
  // Toggle comments visibility
  const toggleComments = () => {
    setShowComments(!showComments);
  };
  
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b">
        <img 
          src={avatar} 
          alt={author}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-bold text-gray-800">{author}</h3>
          <p className="text-sm text-gray-500">2 hours ago</p>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <p className="text-gray-700 leading-relaxed">{content}</p>
      </div>
      
      {/* Stats */}
      <div className="px-4 py-2 border-t border-b border-gray-200 flex justify-between text-sm text-gray-500">
        <span>{likes} likes</span>
        <span>{comments.length} comments</span>
      </div>
      
      {/* Action Buttons */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={handleLike}
          className={`flex-1 py-3 font-semibold transition-colors ${
            isLiked 
              ? 'text-red-500 bg-red-50' 
              : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {isLiked ? '❤️' : '🤍'} Like
        </button>
        
        <button 
          onClick={toggleComments}
          className="flex-1 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
        >
          💬 Comment
        </button>
        
        <button className="flex-1 py-3 font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
          🔗 Share
        </button>
      </div>
      
      {/* Comments Section (Conditional) */}
      {showComments && (
        <div className="p-4 bg-gray-50 space-y-3">
          <h4 className="font-bold text-gray-700 mb-3">Comments</h4>
          {comments.map((comment, index) => (
            <div key={index} className="flex gap-2">
              <img 
                src={`https://i.pravatar.cc/40?img=${index + 10}`}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
              <div className="bg-white px-3 py-2 rounded-lg flex-1">
                <p className="text-sm text-gray-800">{comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Post;
