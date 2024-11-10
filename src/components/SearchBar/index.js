// SearchBar component
// This component renders a search bar with an input field and a search button
// When the user submits the form, the onSearch callback is called with the current query
import React, { useState } from "react";
import SearchIcon from "../../icons/SearchIcon";

import "./index.css";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Handles submit event
  const handleSubmit = (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Call onSearch callback with the current query
    onSearch(query);
  };

  // Render the search bar
  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-bar-input"
        placeholder="Ex: Lord of the Rings"
        value={query}
        // Update the query state when the user types in the input field
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="search-icon-container" onClick={handleSubmit}>
        <SearchIcon />
      </div>
    </form>
  );
};

export default SearchBar;

