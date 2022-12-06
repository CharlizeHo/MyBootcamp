import React, { useState } from "react";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Headers/Header";

const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  function handleFilter(item) {
    setFilter(item);
  }
  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={handleFilter} />
      <TodoList filter={filter} />
    </>
  );
}

export default App;
