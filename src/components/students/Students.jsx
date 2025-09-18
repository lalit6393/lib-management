import { useState } from 'react';
import data from '../../assets/data/studentsList.json';
import Details from './details/Details';
import Pagination from '../pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import { studentsTableFields } from '../../config/tables';
import Table from '../table/Table';

const Students = () => {

    const [selectedStudent, setSelectedStudent] = useState(null);
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
                    <Table tableFields={studentsTableFields} data={currentItems} onRowClick={setSelectedStudent} />
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                    <Details student={selectedStudent} />
                </>}
        </div>
    );
}

export default Students
