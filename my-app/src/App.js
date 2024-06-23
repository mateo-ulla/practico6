import React, { useState } from "react";
import "./App.css";

function App() {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    setNumero(numero + 1);
  };
  return (
    <div>
      <h1>{numero}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default App;
