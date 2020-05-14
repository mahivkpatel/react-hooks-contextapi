import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Authors from "./views/author-view";

function App() {
  return (
    <div className="App">
      <h1>React Hooks Context Demo</h1>
      <br />
      <Authors />
    </div>
  );
}

export default App;
