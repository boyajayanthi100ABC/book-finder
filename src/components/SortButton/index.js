/**
 * SortButton Component
 * 
 * This component renders a button to sort the books by "new" (newest first).
 * When the button is clicked, the onSort callback is called.
 * If the books are sorted by "new", the button has an active class.
 */
import React from "react";

import "./index.css";

const SortButton = ({ onSort, sortOrder }) => {
  const sortActiveClass = sortOrder === "new" ? "active" : "";
  return (
    <button className={`sort-button ${sortActiveClass}`} onClick={onSort}>
      Newest
    </button>
  );
};

export default SortButton;

