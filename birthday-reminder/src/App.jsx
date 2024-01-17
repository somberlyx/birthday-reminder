import React, { useState } from "react";
import data from "./store/data";
import List from "./components/List";
import NoBirthday from "./components/NoBirthday";

function App() {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {people.length === 0 ? (
          <NoBirthday />
        ) : (
          <List people={people} reset={setPeople} />
        )}
        <button onClick={clearAll}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
