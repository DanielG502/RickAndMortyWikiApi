import React from 'react'


const Pagination = ({ setPageNumber , pageNumber}) => {
    let next = () => {
        setPageNumber((x) =>  x + 1);
    };
    let previus = () => {
        if(pageNumber === 1 )return;
        setPageNumber((x) =>  x - 1);
    }
    return (
        <div className="container d-flex justify-content-center gap-5 my-5">
            <button onClick={previus} className="btn btn-primary">Previus</button>
            <button onClick={next} className="btn btn-primary">Next</button>
        </div>
    )

    // my solution 
    // let previus = () => {
    //     setPageNumber((x) => x > 1 ? x - 1 : x);
    // }
}

export default Pagination