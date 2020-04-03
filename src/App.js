import React from "react";
import Nav from "./components/nav/nav";
import Search from "./components/search/davesearch";
import Characters from "./components/characters/characters";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Search />
      <br />
      <Characters />
    </>
  );
}

export default App;
