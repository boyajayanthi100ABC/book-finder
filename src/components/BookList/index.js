import React from "react";
import BookCard from "../BookCard";

import "./index.css";

const BookList = ({ books }) => {
  // If no books are found, render a message
  if (books.length === 0) {
    return <p>No books found</p>;
  }

  // Render the list of books
  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
