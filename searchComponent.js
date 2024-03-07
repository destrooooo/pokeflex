// SearchComponent.js
import React, { useState, useEffect } from "react";
import { fetchPokemonData } from "./fetchData"; // Assurez-vous que le chemin est correct
import { SearchInput } from "./searchInput"; // Assurez-vous que le chemin est correct

const SearchComponent = () => {
  const [inputValue, setInputValue] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [pokemonNames, setPokemonNames] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const results = await fetchPokemonData();
      if (results.length > 0) {
        console.log(`Received ${results.length} pokemon names.`);
      }
      setPokemonNames(results.map((pokemon) => pokemon.name.toLowerCase()));
    };

    getData();
  }, []);

  const handleInputChange = (event) => {
    const userInput = event.target.value.toLowerCase();
    setInputValue(userInput);

    if (userInput.trim() !== "") {
      const found = pokemonNames.includes(userInput);
      setIsFound(found);
      console.log(
        found
          ? `The pokemon "${userInput}" was found.`
          : `The pokemon "${userInput}" was not found.`
      );
    } else {
      console.log("The search input is empty.");
    }
  };

  return (
    <div>
      <SearchInput value={inputValue} onChange={handleInputChange} />
      {inputValue && isFound && <div>Pokémon name found in the database.</div>}
      {inputValue && !isFound && (
        <div>Pokémon name not found in the database.</div>
      )}
    </div>
  );
};

export default SearchComponent;
