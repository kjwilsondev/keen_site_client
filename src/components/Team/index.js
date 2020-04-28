import React, { Component } from "react";
// import ceo from "../../ceo.jpg";

class Team extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>ceo</p>
          {/* <img src={kid} className="App-logo" alt="kid" /> */}
          <a
            className="App-link"
            href="https://www.makeschool.com/portfolio/kjwilson"
            target="_blank" // opens link in new tab
            rel="noopener noreferrer"
          >
            portfolio
          </a>
        </header>
      </div>
    );
  }
}

export default Team;
