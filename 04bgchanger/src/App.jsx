import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-screen min-h-screen duration-300"
      style={{ backgroundColor: color }}
    >
      {/* Button Panel */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-3 bg-white px-4 py-2 rounded-xl shadow-lg">
        
        <button
          onClick={() => setColor("red")}
          className="px-4 py-1 rounded text-white"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>

        <button
          onClick={() => setColor("blue")}
          className="px-4 py-1 rounded text-white"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>

        <button
          onClick={() => setColor("green")}
          className="px-4 py-1 rounded text-white"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>

        <button
          onClick={() => setColor("olive")}
          className="px-4 py-1 rounded text-white"
          style={{ backgroundColor: "olive" }}
        >
          Olive
        </button>

      </div>
    </div>
  );
}

export default App;