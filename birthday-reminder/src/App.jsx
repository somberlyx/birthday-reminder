import React, { useState } from "react";
import data from "./store/data";
import List from "./components/List";

function App() {
  return (
    <main>
      <section className="container">
        <h3>0 birthdays today</h3>
        <List></List>
        <button onClick={() => console.log("you clicked me")}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
