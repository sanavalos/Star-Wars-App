import React from "react";

const Pagination = ({ pageNumbers, setCurrentPage, currentPage, planets }) => {
  return (
    <div>
      <ul className="pagination_list">
        {currentPage !== 1 && (
          <li key="previous">
            <button onClick={() => setCurrentPage(currentPage - 1)}>
              Previous
            </button>
          </li>
        )}

        {pageNumbers.length > 0 &&
          pageNumbers.map((page) => (
            <li key={page}>
              <button onClick={() => setCurrentPage(page)}>{page}</button>
            </li>
          ))}
        {planets.length > 0 && pageNumbers.length !== currentPage && (
          <li key="next">
            <button onClick={() => setCurrentPage(currentPage + 1)}>
              Next
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
