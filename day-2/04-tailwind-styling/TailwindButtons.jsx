// ⚛️ EXAMPLE 1: Tailwind Buttons
function TailwindButtons() {
  return (
    <div className="p-8 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Tailwind Buttons</h2>
      
      {/* Primary Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Primary Button
      </button>
      
      {/* Success Button */}
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
        Success Button
      </button>
      
      {/* Danger Button */}
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
        Danger Button
      </button>
      
      {/* Outline Button */}
      <button className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded">
        Outline Button
      </button>
      
      {/* Large Rounded Button */}
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full text-lg">
        Large Rounded
      </button>
    </div>
  );
}

export default TailwindButtons;
