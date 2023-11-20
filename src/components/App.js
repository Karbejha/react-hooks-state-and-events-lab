import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import "./App.css";

function App() {

  const [isDarkMode, setDarkMode] = useState(false);


  const handleToggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };


  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        {}
        <button onClick={handleToggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
