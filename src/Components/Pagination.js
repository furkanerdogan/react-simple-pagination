import React, { useState } from "react";
import "./Component.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [active, setActive] = useState(false);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  console.log("postsPerPage", postsPerPage);
  const handleLeftArrow = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };
  const handleRightrrow = () => {
    if (currentPage < postsPerPage) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className="pagination-container">
      <ul>
        <a
          onClick={() => {
            handleLeftArrow();
          }}
        >
          &laquo;
        </a>

        {pageNumbers.map((number) => (
          <li key={number} style={{ display: "inline" }}>
            <a
              className={`page-link ${currentPage === number ? "Active" : ""}`}
              onClick={() => {
                paginate(number);
                setActive(true);
              }}
            >
              {number}
            </a>
          </li>
        ))}
        <a
          onClick={() => {
            handleRightrrow();
          }}
        >
          &raquo;
        </a>
      </ul>
    </div>
  );
};

export default Pagination;
