import React, { useState } from "react";
import { MagnifyingGlass } from "react-loader-spinner";

import useFetchBooks from "../../hooks/useFetchBooks.js";
import SearchBar from "../SearchBar";
import BookList from "../BookList";
import Pagination from "../Pagination";
import LanguageFilter from "../LanguageFilter";
import SortButton from "../SortButton";
import Header from "../Header";

import "./index.css";

/**
 * The Home component renders the main page of the application.
 * It contains a search bar, a book list, a pagination component, sort button
 * and a language filter.
 *
 */
const Home = () => {
  const [query, setQuery] = useState("lord of the rings");
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("");
  const [sortOrder, setSortOrder] = useState("random");
  const { books, loading, error, totalResults } = useFetchBooks(
    query,
    page,
    language,
    sortOrder
  );

  const alignCenter = loading ? "align-center" : "";

  // Handles the search input change and resets the page number

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setPage(1);
  };

  // Handles the language selection change and resets the page number

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setPage(1);
  };

  // Handles the sort order change

  const handleSort = () => {
    setSortOrder((prevOrder) => (prevOrder === "random" ? "new" : "random"));
  };

  // Handles the page change

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <Header />
      <div className="app-content">
        <div className="search-controls">
          <SearchBar onSearch={handleSearch} />
          <div className="filters-container">
            <LanguageFilter onSelectLanguage={handleLanguageChange} />
            <SortButton onSort={handleSort} sortOrder={sortOrder} />
          </div>
        </div>
        <div className={`books-container ${alignCenter}`}>
          {loading ? (
            <MagnifyingGlass
              visible={true}
              height="80"
              width="80"
              ariaLabel="magnifying-glass-loading"
              wrapperStyle={{}}
              wrapperClass="magnifying-glass-wrapper"
              glassColor="#c0efff"
              color="black"
            />
          ) : (
            <>
              <BookList books={books} />
              {totalResults > 0 && (
                <Pagination
                  currentPage={page}
                  totalPages={Math.ceil(totalResults / 10)}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Home;
