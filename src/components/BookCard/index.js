import React from "react";
import Modal from "../Modal";

import "./index.css";

const BookCard = ({ book }) => {
  const [open, setOpen] = React.useState(false);

  const { cover_edition_key, title, ratings_average, author_name } = book;

  const rating = ratings_average || Math.floor(Math.random() * 5) + 1;

  // Handlers for opening and closing the modal
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Function to get color based on rating
  const getRatingTagColor = (rating) => {
    if (rating < 2.5) return "tag-red";
    if (rating >= 2.5 && rating < 4) return "tag-orange";
    return "tag-green";
  };

  // Function to truncate text to a specified length
  const truncateTitle = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  // Function to render the book image or a placeholder if no image is available
  const renderBookImage = () =>
    cover_edition_key ? (
      <img
        src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}.jpg`}
        alt={title}
        className="book-image"
      />
    ) : (
      <div className="book-image-placeholder">No Image</div>
    );

  // Function to render the book card content
  const renderBookCard = () => (
    <>
      <span className={`rating-tag ${getRatingTagColor(rating)}`}>
        {rating.toFixed(1)}
      </span>

      {renderBookImage()}
      <div className="book-info-container">
        <h3 className="book-title">{truncateTitle(title, 30)}</h3>
        {author_name?.[0] && <p>Author: {truncateTitle(author_name[0], 30)}</p>}
      </div>
    </>
  );

  return (
    <>
      <div onClick={handleOpen} className="book-card">
        {renderBookCard()}
      </div>
      <Modal isOpen={open} onClose={handleClose} book={book} />
    </>
  );
};

export default BookCard;
