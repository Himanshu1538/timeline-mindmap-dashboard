import React from "react";
import "../App.css";
import TimelineMindmap from "./TimelineMindmap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dashboard</h1>
      </header>
      <main>
        <TimelineMindmap />
      </main>
    </div>
  );
}

export default App;
