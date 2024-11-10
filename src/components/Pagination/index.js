/**
 * Pagination component.
 * 
 * Displays pagination controls to navigate between pages.
 */

import React from "react";
import "./index.css";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {/* Previous button. Disabled if on the first page. */}
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {/* Page information. */}
      <span className="pagination-info">
        Page {currentPage} of {totalPages}
      </span>
      {/* Next button. Disabled if on the last page. */}
      <button
        className="pagination-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

