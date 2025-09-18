import { useState } from 'react';
import data from '../../assets/data/booksList.json';
import Pagination from '../pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import { booksTableFields } from '../../config/tables';
import Table from '../table/Table';

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
                    <Table tableFields={booksTableFields} data={currentItems}/>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick}/>
                </>}
        </div>
    );
};

export default Books;