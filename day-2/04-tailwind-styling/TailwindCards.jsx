// ⚛️ EXAMPLE 2: Card Components
function TailwindCards() {
  return (
    <div className="p-8 flex gap-4 flex-wrap">
      <h2 className="text-2xl font-bold mb-4 w-full">Tailwind Cards</h2>
      
      {/* Simple Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border w-64">
        <h3 className="text-xl font-bold mb-2">Simple Card</h3>
        <p className="text-gray-600">This is a basic card with shadow and border.</p>
      </div>
      
      {/* Card with Image */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-64">
        <img 
          src="https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Image" 
          alt="Placeholder"
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold mb-2">Card with Image</h3>
          <p className="text-gray-600 text-sm">Beautiful card design with image header.</p>
        </div>
      </div>
      
      {/* Colored Card */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-xl text-white w-64">
        <h3 className="text-xl font-bold mb-2">Gradient Card</h3>
        <p>Beautiful gradient background!</p>
      </div>
      
      {/* Interactive Card */}
      <div className="bg-white p-6 rounded-lg shadow-md border w-64 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
        <h3 className="text-xl font-bold mb-2 text-blue-600">Hover Me!</h3>
        <p className="text-gray-600">This card has hover effects.</p>
      </div>
    </div>
  );
}

export default TailwindCards;
