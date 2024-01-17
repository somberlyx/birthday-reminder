import React, { useState } from "react";
import data from "./store/data";
import List from "./components/List";

function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people}></List>
        <button onClick={() => console.log("you clicked me")}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
