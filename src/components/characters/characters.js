import React from "react";
import data from "../../characters.json";
import "./characters.css";

var characters = data.results;

class Characters extends React.Component {
  state = {
    characters: characters
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
    );
  }
}

export default Characters;
