import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    return (
    <ReactPaginate
    className= "justify-content-center pagination gap-4 my-4"
    forcePage={pageNumber===1? 0 : pageNumber -1}
    nextLabel = "Next"
    previousLabel = "Previous"
    nextClassName={`${styles.btnnext} btn btn-outline-primary`}
    previousClassName={`${styles.btnnext} btn btn-outline-primary`}
    pageClassName='page-item'
    pageLinkClassName='page-link'
    activeClassName='active'
    onPageChange={(data) => {
        setPageNumber(data.selected +1)
    }}
    pageCount={info?.pages}
    />
    );
};
export default Pagination;



// className="pagination justify-content-center my-4 gap-4"
//     nextLabel = "Next"
//     previousLabel="Prev"
//     previousClassName="btn btn-primary fs-5 prev"
//     nextClassName="btn btn-primary fs-5 next"
//     pageClassName="page-item"
//     pageLinkClassName="page-link"
//     pageCount={info?.pages} 