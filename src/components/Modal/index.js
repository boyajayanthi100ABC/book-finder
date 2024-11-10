import React from "react";
import "./index.css";

// This component renders a modal when the user clicks on a book card
const Modal = ({ isOpen, onClose, book }) => {
  // If the modal is not open, return null
  if (!isOpen) return null;

  // Destructure the book object to get the properties we need
  const {
    title,
    author_name,
    publish_year,
    first_sentence,
    language,
    publisher,
    cover_edition_key,
  } = book;

  // Function to render the book image or a placeholder if no image is available
  const renderBookImage = () =>
    cover_edition_key ? (
      <img
        // Use the cover edition key to fetch the image
        src={`https://covers.openlibrary.org/b/olid/${cover_edition_key}.jpg`}
        alt={book.title}
        className="modal-image"
      />
    ) : (
      // If there is no image, render a placeholder
      <div className="book-image-placeholder-modal">No Image</div>
    );

  // Render the modal
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {renderBookImage()}
        <div className="modal-details">
          <h2>{title}</h2>
          <p>
            <b>Author:</b> {author_name?.[0] ?? "N/A"}
          </p>
          <p>
            <b>Latest Published Year:</b>{" "}
            {publish_year ? Math.max(...publish_year) : "N/A"}
          </p>
          <p>
            <b>Publisher:</b> {publisher ? publisher[0] : "N/A"}
          </p>
          <p>{first_sentence || "No description available."}</p>
          {language && (
            <p>{`This book is available in ${language.length} ${
              language.length > 1 ? "languages" : "language"
            }`}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
