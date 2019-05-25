import React from "react";
import ReactDOM from "react-dom";
import PadButtons from "./Components/PadButtons";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PadButtons />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
