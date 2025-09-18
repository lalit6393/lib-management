import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, handlePageClick }) => {
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            previousLabel="Previous"
            onPageChange={handlePageClick}
            pageRangeDisplayed={0}
            pageCount={pageCount}
            renderOnZeroPageCount={null}
            marginPagesDisplayed={1}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            activeClassName="active"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
        />
    );
};

export default Pagination;
