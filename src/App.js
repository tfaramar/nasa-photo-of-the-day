import React from "react";
import "./App.css";
import APODcard from "./Components/APODcard.js";

function App() {
  return (
    <div className="App">
      <p>
        NASA Photo of the Day:
      </p>
      <APODcard />
    </div>
  );
}

export default App;
