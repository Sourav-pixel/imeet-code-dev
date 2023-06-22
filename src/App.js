import React from 'react';

const App = () => {
  return (
    <div className="bg-gray-200 p-4">
      <h1 className="text-4xl font-bold text-blue-500">Welcome to Tailwind CSS with React!</h1>
      <p className="mt-4 text-gray-800">This is an example React component styled using Tailwind CSS.</p>
      <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Click Me
      </button>
    </div>
  );
}

export default App;
