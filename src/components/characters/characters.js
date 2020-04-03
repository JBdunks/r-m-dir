import React from "react";
import data from "../../characters.json";
import "./characters.css";

var characters = data.results;

class Characters extends React.Component {
  state = {
    characters: characters
  };
  ///===search function
  handleInputChange = event => {
    if (event.target.name === "search") {
      console.log(event.target.value);
      const searchTerm = event.target.value.toLowerCase();
      console.log(searchTerm);

      let newList = this.state.characters.filter(character => {
        return character.name.toLowerCase().includes(searchTerm);
      });

      console.log(newList);

      this.setState({
        // [event.target.name]: event.target.value
        characters: newList
      });
    }
  };

  //=========many sorting functions start now=========
  sortById = () => {
    let sortedCharacters = this.state.characters.sort((a, b) => {
      if (b.id > a.id) {
        return -1;
      }
      if (a.id > b.id) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedCharacters.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    console.log("sort by id");
    this.setState({ results: sortedCharacters });
  };

  //sort by name==========
  sortByName = () => {
    let sortedCharacters = this.state.characters.sort((a, b) => {
      if (b.name > a.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedCharacters.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    console.log("sort by name");
    this.setState({ results: sortedCharacters });
  };
  // sort by species==========
  sortBySpecies = () => {
    let sortedCharacters = this.state.characters.sort((a, b) => {
      if (b.species > a.species) {
        return -1;
      }
      if (a.species > b.species) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedCharacters.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    console.log("sort by species");
    this.setState({ results: sortedCharacters });
  };

  //sort by gender ============
  sortByGender = () => {
    let sortedCharacters = this.state.characters.sort((a, b) => {
      if (b.gender > a.gender) {
        return -1;
      }
      if (a.gender > b.gender) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedCharacters.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    console.log("sort by gender");
    this.setState({ results: sortedCharacters });
  };

  // sort by location ==========
  sortByLocation = () => {
    let sortedCharacters = this.state.characters.sort((a, b) => {
      if (b.location.name > a.location.name) {
        return -1;
      }
      if (a.location.name > b.location.name) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedCharacters.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    console.log("sort by location");
    this.setState({ results: sortedCharacters });
  };

  //sort by status ============
  sortByStatus = () => {
    let sortedCharacters = this.state.characters.sort((a, b) => {
      if (b.status > a.status) {
        return -1;
      }
      if (a.status > b.status) {
        return 1;
      }

      return 0;
    });

    if (this.state.sortOrder === "DESC") {
      sortedCharacters.reverse();
      this.setState({ sortOrder: "ASC" });
    } else {
      this.setState({ sortOrder: "DESC" });
    }
    console.log("sort by status");
    this.setState({ results: sortedCharacters });
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
              placeholder="Search By Character Name"
            />
          </nav>
        </div>
        <br />

        <table>
          <thead>
            <tr>
              <th onClick={this.sortById}>Image</th>
              <th onClick={this.sortByName}>Name</th>
              <th onClick={this.sortBySpecies}> Species</th>
              <th onClick={this.sortByGender}> Gender</th>
              <th onClick={this.sortByLocation}> Location</th>
              <th onClick={this.sortByStatus}> Status</th>
            </tr>
          </thead>
          <tbody>
            {this.state.characters.map(character => (
              <tr key={character.id}>
                <td>
                  <img
                    className="characterImage"
                    src={character.image}
                    alt={character.name}
                  />
                </td>
                <td>{character.name}</td>
                <td>{character.species}</td>
                <td>{character.gender}</td>
                <td>{character.location.name}</td>
                <td>{character.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Characters;
