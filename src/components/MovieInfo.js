import React from "react";

const MovieInfo = (props) => {
  return (
    <div>
      <div className="container">
        <div
          className="row"
          onClick={props.closeMovieInfo}
          style={{ cursor: "pointer", paddingTop: 50 }}
        >
          <i class="fas fa-arrow-left"></i>
          <span style={{ marginLeft: 10 }}>Go back</span>
        </div>
        <div className="row">
          <div className="col s12 m4">
            {props.currentMovie.poster_path == null ? (
              <img
                className=""
                src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}
                alt="Card image cap"
                style={{ width: "100%", height: 420 }}
              />
            ) : (
              <img
                className=""
                src={`http://image.tmdb.org/t/p/w185${props.currentMovie.poster_path}`}
                alt="Card image"
                style={{ width: "80%", height: 400 }}
              />
            )}
          </div>
          <div className="col s12 m8">
            <div className="info-container">
              <p>
                <h1>Movie Title:</h1>
                {props.currentMovie.title}
              </p>
              <p>
                <h1>Release Date:</h1>
                {props.currentMovie.release_date
                  .substring(6)
                  .split("-")
                  .concat(props.currentMovie.release_date.substring(0, 4))
                  .join("/")}
              </p>
              <p>
                <h1>Overview:</h1>
                {props.currentMovie.overview}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
