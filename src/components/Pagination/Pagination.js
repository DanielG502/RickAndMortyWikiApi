import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    let [width, setWidth] = useState(window.innerWidth);

    // console.log(width);
    let updateDimension = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateDimension);
        return () => window.removeEventListener('resize', updateDimension);
    });

    return (
        <>
            <style jsx='true'>
                {`
                    @media (max-width: 768px) {
                        .pagination {
                            font-size: 12px;
                        }
                        .next,
                        .prev {
                            display: none;
                        }
                    }
                `}
            </style>
            <ReactPaginate
                className='pagination justify-content-center gap-4 my-4'
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                nextLabel='Next'
                previousLabel='Previous'
                nextClassName={`${styles.btnnext} btn btn-outline-primary fw-bold netx`}
                previousClassName={`${styles.btnnext} btn btn-outline-primary fw-bold prev`}
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                isactive='active'
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1);
                }}
                pageClassName='page-item'
                pageLinkClassName='page-link'
                pageCount={info && info.pages ? info.pages : 1}
            />
        </>
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
