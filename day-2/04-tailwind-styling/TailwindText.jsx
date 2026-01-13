// ⚛️ EXAMPLE 5: Text Styling & Colors
function TailwindText() {
  return (
    <div className="p-8 space-y-6">
      <h2 className="text-2xl font-bold mb-4">Text Styling</h2>
      
      {/* Font Sizes */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg mb-2">Font Sizes</h3>
        <p className="text-xs">Extra Small Text (text-xs)</p>
        <p className="text-sm">Small Text (text-sm)</p>
        <p className="text-base">Base Text (text-base)</p>
        <p className="text-lg">Large Text (text-lg)</p>
        <p className="text-xl">Extra Large (text-xl)</p>
        <p className="text-2xl">2XL Text (text-2xl)</p>
        <p className="text-3xl">3XL Text (text-3xl)</p>
      </div>
      
      {/* Font Weights */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg mb-2">Font Weights</h3>
        <p className="font-light">Light (font-light)</p>
        <p className="font-normal">Normal (font-normal)</p>
        <p className="font-medium">Medium (font-medium)</p>
        <p className="font-semibold">Semi Bold (font-semibold)</p>
        <p className="font-bold">Bold (font-bold)</p>
      </div>
      
      {/* Text Colors */}
      <div className="space-y-2">
        <h3 className="font-bold text-lg mb-2">Text Colors</h3>
        <p className="text-gray-500">Gray Text (text-gray-500)</p>
        <p className="text-red-500">Red Text (text-red-500)</p>
        <p className="text-blue-500">Blue Text (text-blue-500)</p>
        <p className="text-green-500">Green Text (text-green-500)</p>
        <p className="text-purple-500">Purple Text (text-purple-500)</p>
        <p className="text-pink-500">Pink Text (text-pink-500)</p>
      </div>
      
      {/* Text Alignment */}
      <div className="space-y-2 border-t pt-4">
        <h3 className="font-bold text-lg mb-2">Text Alignment</h3>
        <p className="text-left">Left Aligned (text-left)</p>
        <p className="text-center">Center Aligned (text-center)</p>
        <p className="text-right">Right Aligned (text-right)</p>
      </div>
      
      {/* Text Transform */}
      <div className="space-y-2 border-t pt-4">
        <h3 className="font-bold text-lg mb-2">Text Transform</h3>
        <p className="uppercase">uppercase text (uppercase)</p>
        <p className="lowercase">LOWERCASE TEXT (lowercase)</p>
        <p className="capitalize">capitalize each word (capitalize)</p>
      </div>
    </div>
  );
}

export default TailwindText;
