import React from "react";
import data from "../../characters.json";
import "./search.css";

var characters = data.results;
console.log("search" + characters[0].name);

class Search extends React.Component {
  state = {
    search: "",
    characters: characters
  };

  handleInputChange = event => {
    // console.log(event.target.value);
    if (event.target.name === "search") {
      const searchTerm = event.target.value.toLowerCase();
      console.log(searchTerm);

      // const newList = characters.filter(character =>
      //   character.toLowerCase().includes(searchTerm)
      // );
      // console.log(newList);
    }
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="searchRow">
            <input
              type="text"
              name="search"
              value={this.state.search}
              onChange={this.handleInputChange}
              placeholder="Search"
            />
          </nav>
        </div>
      </>
    );
  }
}

// export default Search;
