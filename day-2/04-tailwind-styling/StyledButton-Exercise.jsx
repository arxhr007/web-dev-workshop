// ⚛️ PRACTICE: Style This Button
// TODO: Add Tailwind classes to make this button beautiful!

function StyledButtonExercise() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Practice Exercise</h2>
      <p className="mb-4 text-gray-600">
        Add Tailwind classes to make this button:
        <br />• Green background (bg-green-500)
        <br />• White text (text-white)
        <br />• Padding (px-6 py-3)
        <br />• Rounded corners (rounded-lg)
        <br />• Darker green on hover (hover:bg-green-600)
        <br />• Bold text (font-bold)
      </p>
      
      {/* TODO: Add classes to this button */}
      <button className="">
        Click Me!
      </button>
      
      {/* Solution (hidden below) */}
      <details className="mt-8">
        <summary className="cursor-pointer text-blue-500 font-bold">
          Show Solution
        </summary>
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <code className="text-sm">
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-lg"
          </code>
        </div>
      </details>
    </div>
  );
}

export default StyledButtonExercise;
