import React from "react";
import ReactDOM from "react-dom";
import PadButtons from "./Components/PadButtons";
import NoteQueue from "./Components/NoteQueue";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <PadButtons />
      <NoteQueue />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
