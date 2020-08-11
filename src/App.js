import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchArea />
      </div>
    );
  }
}

export default App;
