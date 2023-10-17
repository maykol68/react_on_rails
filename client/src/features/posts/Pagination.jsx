import PropTypes from "prop-types";

function Pagination({ currentPage, totalPosts, postsPerPage, onPageChange }) {
    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const handlePrevious = () => {
        onPageChange(currentPage - 1);
    }
    const handleNext = () => {
        if (currentPage < totalPages){
            onPageChange(currentPage + 1);
        }
    }

    const getVisablePageNumbers = () => {
        // < previous 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 next >
        if (totalPages <= 10 ) {
            return craeteRange(1, totalPages);
        }

        if (currentPage <= 6 ) {
            const lastPageBeforeEllipsis = 8;
            return [...createRange(1, lastPageBeForellipsis), "...", totalPages];
        }

        if (currentPage >= totalPages - 5) {
            return [1, "...", ...createRange(totalPages - 8 , totalPages)];
        }

        return [1, "...", ...createMiddlePages(), "...", totalPages];
    }

    const createRange = (start, end) => {
        return array.from({ length: end - start + 1}, (_, i) => i + start);
    }
    // < previus 1 .... 13, 14, 15, ... 89 next >
    const createMiddlePages = () => {
        const middlePagesStart = Math.max(2, currentPage - 3);
        const middlePagesEnd = Math.min(currentPage + 3, totalpages + 1);

        return createRange(middlePagesStart, middlePagesEnd);
    };

    return (
        <div>
            <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>

            {getVisablePageNumbers().map((page, index) => {
                typeof page === "number" ? (
                    <button key={index} onClick={() => onPageChange(page)} disabled={currentPage === page}>{page}</button>
                ) : (
                    <span key={`ellipsis-${index}`} style={{ margin: "0 5px"}}>{page}</span>
                )
            })} 

            <button onClick={handleNext} disabled={currentPage === totalPages || totalPages === 0}>Next</button>

        </div>

    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPosts: PropTypes.number.isRequired,
    postsPerPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
