// 🎯 COMPLETE APP: Multiple Posts
import Post from './Post';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          📱 Social Feed
        </h1>
        
        <Post 
          author="Sarah Johnson"
          avatar="https://i.pravatar.cc/100?img=1"
          content="Just finished building my first React app! 🚀 The useState hook is so powerful. Can't wait to learn more about React and Tailwind CSS!"
          initialLikes={42}
        />
        
        <Post 
          author="Michael Chen"
          avatar="https://i.pravatar.cc/100?img=3"
          content="Beautiful sunset today 🌅 Taking a break from coding to appreciate nature. Balance is important!"
          initialLikes={128}
        />
        
        <Post 
          author="Emily Rodriguez"
          avatar="https://i.pravatar.cc/100?img=5"
          content="Pro tip: Always use semantic HTML and meaningful component names. Your future self (and your team) will thank you! 💡"
          initialLikes={89}
        />
        
        <Post 
          author="David Kim"
          avatar="https://i.pravatar.cc/100?img=7"
          content="Who else is excited about the new React features? Server components are game-changing! What are you most excited about?"
          initialLikes={256}
        />
      </div>
    </div>
  );
}

export default App;
