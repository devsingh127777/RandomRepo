import React, { useState } from "react";

const App = () => {
  const [first, setFirst] = useState(10);
  return (
    <div>
      <h1>{first}</h1>
      <button onClick={() => setFirst(first + 1)}>Increment</button>
    </div>
  );
};

export default App;
