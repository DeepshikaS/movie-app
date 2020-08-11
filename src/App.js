import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
    };
    this.REACT_APP_apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.REACT_APP_apiKey}&query=${this.searchTerm}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        this.setState({ movies: [...data.results] });
      });
  };

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    return (
      <div className="App">
        <Navbar />
        <SearchArea
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
