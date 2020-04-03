import React from "react";
import data from "../../characters.json";
import "./characters.css";

var characters = data.results;

class Characters extends React.Component {
  state = {
    characters: characters
  };

  sortByName = () => {
    const sortedCharacters = this.state.characters.sort((a, b) => {
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

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th> Image</th>
            <th onClick={this.sortByName}>Name</th>
            <th> Species</th>
            <th> Gender</th>
            <th> Location</th>
            <th> Status</th>
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
