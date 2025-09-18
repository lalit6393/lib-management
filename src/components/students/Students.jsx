import { useState } from 'react';
import data from '../../assets/data/studentsList.json';
import Pagination from '../pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import { studentsTableFields } from '../../config/tables';
import Table from '../table/Table';
import { Outlet } from 'react-router-dom';

const Students = () => {

    const [open, setOpen] = useState(true);

    const { currentItems, pageCount, handlePageClick } = usePagination(data);

    return (
        <div className="col">
            <h2 className='fw-semibold'>Students Table</h2>
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
                    <Table tableFields={studentsTableFields} data={currentItems}/>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                    <Outlet/>
                </>}
        </div>
    );
}

export default Students
