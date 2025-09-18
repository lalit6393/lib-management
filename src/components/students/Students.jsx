import { useState } from 'react';
import data from '../../assets/data/studentsList.json';
import Details from './details/Details';
import Pagination from '../pagination/Pagination';
import usePagination from '../../hooks/usePagination';

const Students = () => {

    const [selectedStudent, setSelectedStudent] = useState(null);
    const [open, setOpen] = useState(true);

    const { currentItems, pageCount, handlePageClick} = usePagination(data);

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
                    <table className="table table-bordered table-striped text-center">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Student Age</th>
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
                                    {currentItems?.map((student) => (
                                        <tr
                                            key={student.id}
                                            onClick={() => setSelectedStudent(student)}
                                            role='button'
                                        >
                                            <td>{student.id}</td>
                                            <td>{student.title}</td>
                                            <td>{student.age}</td>
                                        </tr>
                                    ))}
                                </>
                            }
                        </tbody>
                    </table>
                    <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
                    <Details student={selectedStudent} />
                </>}
        </div>
    );
}

export default Students
