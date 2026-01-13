import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          React + Tailwind 🚀
        </h1>
        
        <p className="text-center text-gray-600 mb-6">
          Welcome to your starter template!
        </p>
        
        <div className="bg-gray-100 rounded-lg p-6 text-center">
          <p className="text-2xl font-bold text-gray-700 mb-4">
            Counter: {count}
          </p>
          
          <div className="flex gap-3 justify-center">
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Increment
            </button>
            
            <button 
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h2 className="font-bold text-gray-800 mb-2">Quick Start:</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>✅ Edit <code className="bg-gray-200 px-1 rounded">src/App.jsx</code> to start coding</li>
            <li>✅ Use Tailwind classes for styling</li>
            <li>✅ Hot reload is enabled!</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
