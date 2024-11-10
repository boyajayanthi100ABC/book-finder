/**
 * LanguageFilter Component
 * 
 * This component renders a dropdown menu for selecting a language.
 * When the user selects an option, the onSelectLanguage callback is called.
 */
import React from "react";
import "./index.css";

const LanguageFilter = ({ selectedLanguage, onSelectLanguage }) => {
  return (
    <div className="language-filter">
      <label className="language-filter-label">Select Language:</label>
      <select
        className="language-filter-select"
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
      >
        <option value="">All</option>
        <option value="eng">English</option>
        <option value="fre">French</option>
        <option value="spa">Spanish</option>
        <option value="rus">Russian</option>
      </select>
    </div>
  );
};

export default LanguageFilter;

