import printMsg from 'fluidtype.js';
import React from 'react';
const print = printMsg()

function App() {
  return (
    <div className="App">
      <h1>{print}</h1>
    </div>
  );
}

export default App;
