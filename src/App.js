import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchArea from "./components/SearchArea";
import MovieList from "./components/MovieList";
import Pagination from "./components/Pagination";
import MovieInfo from "./components/MovieInfo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      series: [],
      searchTerm: "",
      totalResults: 0,
      currentPage: 1,
      currentSeries: null,
    };
    this.apiKey = process.env.REACT_APP_API;
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  handleSubmit = (e) => {
    fetch(
      `https://api.themoviedb.org/3/search/series?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${this.state.currentPage}`,
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
          series: [...data.results],
          totalResults: data.total_results,
        });
      });

    e.preventDefault();
  };

  nextPage = (pageNumber) => {
    fetch(
      `https://api.themoviedb.org/3/search/series?api_key=${this.apiKey}&query=${this.state.searchTerm}&language=en-US&page=${pageNumber}`,
      {
        method: "GET", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState({ series: [...data.results], currentPage: pageNumber });
      });
  };

  viewMovieInfo = (id) => {
    let filteredMovie;
    this.state.series.forEach((series, i) => {
      if (series.id == id) {
        filteredMovie = series;
      }
    });

    this.setState({ currentSeries: filteredMovie });
  };

  closeMovieInfo = () => {
    this.setState({ currentSeries: null });
  };

  render() {
    const numberPages = Math.floor(this.state.totalResults / 20);

    return (
      <div className="App">
        <Navbar />
        {this.state.currentSeries == null ? (
          <div>
            <SearchArea
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <MovieList
              viewMovieInfo={this.viewMovieInfo}
              series={this.state.series}
            />
          </div>
        ) : (
          <MovieInfo
            closeMovieInfo={this.closeMovieInfo}
            currentSeries={this.state.currentSeries}
          />
        )}

        {this.state.totalResults > 20 && this.state.currentSeries == null ? (
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
