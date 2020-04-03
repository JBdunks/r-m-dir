import React from "react";
import "./search.css";

class Search extends React.Component {
  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="searchRow">
            <input type="text" id="searchBox" placeholder="Search" />
          </nav>
        </div>
      </>
    );
  }
}

export default Search;
