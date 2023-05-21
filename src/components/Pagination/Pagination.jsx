import React from "react";
import styles from "./pagination.module.css";

const Pagination = ({ currentPage, gamesForPage, totalGames, handlePage }) => {
    const totalPages = Math.ceil(totalGames / gamesForPage);
    const pageNumbers = [];

    for (let i = 0; i < totalPages; i++) {
        pageNumbers.push(i + 1);
    }

    return (
        <div>
            <button
                className={styles.prevnext}
                onClick={() => {
                    if (currentPage > 1) handlePage(currentPage - 1);
                }}
            >
                Prev
            </button>
            {pageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    onClick={() => handlePage(pageNumber)}
                    className={
                        pageNumber === currentPage
                            ? styles.active
                            : styles.numbers
                    }
                >
                    {pageNumber}
                </button>
            ))}
            <button
                className={styles.prevnext}
                onClick={() => {
                    if (currentPage < totalPages) handlePage(currentPage + 1);
                }}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
