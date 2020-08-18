import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import MovieList from "./components/MovieList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleSubmit = (e) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.results] });
      });

    e.preventDefault();
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
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
