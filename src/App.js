import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      //currentMovie: null
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
        this.setState({
          movies: [...data.results],
          totalResults: data.total_Results,
        });
      });

    e.preventDefault();
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ movies: [...data.results], currentPage: pageNumber });
      });
  };
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };
  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        <Navbar />
        <SearchArea
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <MovieList movies={this.state.movies} />
        {this.state.totalResults > 20 ? (
          <Pagination
            pages={numberPages}
            nextPage={this.nextPage}
            currentPage={this.state.currentPage}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
