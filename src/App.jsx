import React from "react";
import Routing from "./components/Routing/routing";
import { Navbar } from "./components/Navbar/Navbar";

import "./App.css";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routing />
      </main>
    </div>
  );
};

export default App;
