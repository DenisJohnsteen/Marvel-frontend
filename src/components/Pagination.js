import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <center>
        <ul className="pagination-container">
          {pageNumbers.map((number) => {
            return (
              <li className="active_pagin" key={number}>
                <a onClick={() => paginate(number)} href="#!">
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </center>
    </nav>
  );
};

export default Pagination;
