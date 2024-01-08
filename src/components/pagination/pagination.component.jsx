import React, { useEffect } from "react";

import "./pagination.styles.scss";

const Pagination = ({
  itemsPerPage,
  total,
  currentPage,
  setCurrentPage,
  index,
}) => {
  let pages = [];
  // useEffect(() => {

  if (Array.isArray(total)) {
    pages = { ...pages, index: [] };

    for (let i = 1; i <= Math.ceil(total[i] / itemsPerPage); i++) {
      pages?.[index]?.push(i);
    }
  } else if (total > 0) {
    pages = [];

    for (let i = 1; i <= Math.ceil(total / itemsPerPage); i++) {
      pages.push(i);
    }
  }
  // }, [total]);
  {
    console.log("total", total);
  }

  return (
    <div className="pagination-container">
      <div className="page-navigation-container">
        {!Array.isArray(total) &&
          pages?.map((page, index) => {
            return (
              <div key={index} className="pagination-list">
                <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`page-button
                ${page == currentPage ? "active" : ""}
              `}
                >
                  {page}
                </button>
              </div>
            );
          })}

        {Array.isArray(total) &&
          pages?.[index]?.map((page, index) => {
            return (
              <div key={index} className="pagination-list">
                <button
                  key={index}
                  onClick={() => setCurrentPage(page)}
                  className={`page-button
                ${page == currentPage ? "active" : ""}
              `}
                >
                  {page}
                </button>
              </div>
            );
          })}
      </div>
      {console.log("pages", pages)}
      <div className="results-container">
        {Array.isArray(total) ? total[index] : total} results
      </div>
    </div>
  );
};

export default Pagination;
