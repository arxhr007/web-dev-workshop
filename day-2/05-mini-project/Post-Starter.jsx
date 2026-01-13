// 🎯 STARTER TEMPLATE: Use this for live coding!
// Students follow along and build this step by step

import { useState } from "react";

function Post({ author, avatar, content }) {
  // TODO: Add state here
  // Step 1: Add likes state
  // Step 2: Add isLiked state
  // Step 3: Add showComments state
  
  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg border p-4">
      {/* TODO: Build the post card here */}
      
      {/* Step 1: Create header with avatar and author */}
      <div>
        <h3>{author}</h3>
      </div>
      
      {/* Step 2: Display content */}
      <div>
        <p>{content}</p>
      </div>
      
      {/* Step 3: Add like button */}
      
      {/* Step 4: Add comment toggle button */}
      
      {/* Step 5: Add conditional comments section */}
    </div>
  );
}

export default Post;
