import React, { Component } from "react";

class Pokeapi extends Component {
  state = {
    data: [],
  };
  // Code is called after the component is mounted/inserted in the DOM
  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon/ditto"; //changer dito par ce qu'on veut
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        console.log(result.types[1].type.name);
        this.setState({
          data: result,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    const { data } = this.state;
    // Forced to use ? because not all fields contain sprites

    return (
      <ul>
        <li>
          <h3>Id</h3>
          <h3>{data.id}</h3>
        </li>
        <li>
          <h3>Name</h3>
          <h3>{data.name}</h3>
        </li>
        <li>
          <h3>sprites</h3>
          <img src={data.sprites?.front_default} />
        </li>
        <li>
          <h3>1st element</h3>
          <h3>{data.types[0].type.name}</h3>
        </li>
        <li>
          <h3>2nd element</h3>
          <h3>{data.types[1].type.name}</h3>
        </li>
      </ul>
    );
  }
}

export default Pokeapi;
