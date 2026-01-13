// ⚛️ EXAMPLE 3: Forms & Inputs
function TailwindForms() {
  return (
    <div className="p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-6">Tailwind Forms</h2>
      
      <form className="space-y-4">
        {/* Text Input */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            Name
          </label>
          <input 
            type="text"
            placeholder="Enter your name"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        {/* Email Input */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            Email
          </label>
          <input 
            type="email"
            placeholder="your@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        {/* Textarea */}
        <div>
          <label className="block text-sm font-bold mb-2 text-gray-700">
            Message
          </label>
          <textarea 
            placeholder="Your message..."
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default TailwindForms;
