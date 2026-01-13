// ⚛️ EXAMPLE 4: Flexbox Layouts
function TailwindLayouts() {
  return (
    <div className="p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-4">Flexbox Layouts</h2>
      
      {/* Centered Content */}
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Centered (justify-center)</h3>
        <div className="flex justify-center gap-2">
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 1</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 2</div>
          <div className="bg-blue-500 text-white px-4 py-2 rounded">Item 3</div>
        </div>
      </div>
      
      {/* Space Between */}
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Space Between (justify-between)</h3>
        <div className="flex justify-between">
          <div className="bg-green-500 text-white px-4 py-2 rounded">Left</div>
          <div className="bg-green-500 text-white px-4 py-2 rounded">Center</div>
          <div className="bg-green-500 text-white px-4 py-2 rounded">Right</div>
        </div>
      </div>
      
      {/* Vertical Centering */}
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Vertically Centered (items-center)</h3>
        <div className="flex items-center gap-4 h-32 bg-white rounded">
          <div className="bg-purple-500 text-white px-4 py-2 rounded">Short</div>
          <div className="bg-purple-500 text-white px-4 py-8 rounded">Tall</div>
          <div className="bg-purple-500 text-white px-4 py-2 rounded">Short</div>
        </div>
      </div>
      
      {/* Grid-like with Gap */}
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-bold mb-2">Grid with Gap (flex-wrap gap-4)</h3>
        <div className="flex flex-wrap gap-4">
          <div className="bg-red-500 text-white px-6 py-3 rounded">Box 1</div>
          <div className="bg-red-500 text-white px-6 py-3 rounded">Box 2</div>
          <div className="bg-red-500 text-white px-6 py-3 rounded">Box 3</div>
          <div className="bg-red-500 text-white px-6 py-3 rounded">Box 4</div>
          <div className="bg-red-500 text-white px-6 py-3 rounded">Box 5</div>
        </div>
      </div>
    </div>
  );
}

export default TailwindLayouts;
