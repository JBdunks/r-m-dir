import React from "react";

import "./search.css";

const button = () => {
  console.log("lame");
};

const Search = () => {
  return (
    <div className="navbar-fixed">
      <nav className="searchRow">
        <div className="searchDiv">Image</div>
        <div className="searchDiv">Name</div>
        <div className="searchDiv">Species</div>
        <div className="searchDiv" onClick={button}>
          Gender
        </div>
        <div className="searchDiv">Location</div>
        <div className="searchDiv">Status</div>
      </nav>
    </div>
  );
};

export default Search;
