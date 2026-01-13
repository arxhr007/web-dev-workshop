// ⚛️ COMPLETE APP: All Tailwind Examples
import TailwindButtons from './TailwindButtons';
import TailwindCards from './TailwindCards';
import TailwindForms from './TailwindForms';
import TailwindLayouts from './TailwindLayouts';
import TailwindText from './TailwindText';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          🎨 Tailwind CSS Examples
        </h1>
        
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <TailwindButtons />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <TailwindCards />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <TailwindForms />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <TailwindLayouts />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <TailwindText />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
