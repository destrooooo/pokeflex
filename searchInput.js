// SearchInput.js
import React from "react";

export const SearchInput = ({ value, onChange }) => (
  <input
    type="text"
    value={value}
    onChange={onChange}
    placeholder="Enter a Pokémon name..."
  />
);
