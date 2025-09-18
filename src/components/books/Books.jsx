import { useState } from 'react';
import data from '../../assets/data/booksList.json';
import Pagination from '../pagination/Pagination';
import usePagination from '../../hooks/usePagination';

const Books = () => {

    const [open, setOpen] = useState(true);
    const { currentItems, pageCount, handlePageClick} = usePagination(data);


    return (
        <div className="col">
            <h2 className='fw-semibold'>Books Table</h2>
            <button
                type='button'
                className='btn btn-primary my-3'
                onClick={() => setOpen(!open)}
            >
                {open ? 'Hide' : 'Show'}
            </button>
            {
                open &&
                <>
                    <table className="table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>Book ID</th>
                                <th>Book Name</th>
                                <th>Book Author</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length === 0 ?
                                <tr>
                                    <td>No data found!</td>
                                    <td>No data found!</td>
                                    <td>No data found!</td>
                                </tr>
                                :
                                <>
                                    {currentItems?.map((book) => (
                                        <tr key={book.id}>
                                            <td className='text-center'>{book.id}</td>
                                            <td className='text-start'>{book.title}</td>
                                            <td className='text-start'>{book.author}</td>
                                        </tr>
                                    ))}
                                </>
                            }
                        </tbody>
                    </table>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick}/>
                </>}
        </div>
    );
};

export default Books;