import React from "react";
import ReactDOM from "react-dom";
import Parent from "./Parent";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Parent />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
