import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark mb-4">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text" href>
              MovieSeriesInfo
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-3x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-react fa-3x" id="react-logo" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
