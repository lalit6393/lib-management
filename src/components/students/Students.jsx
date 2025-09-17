import { useState } from 'react';
import data from '../../assets/data/studentsList.json';
import Details from './details/Details';
import ReactPaginate from 'react-paginate';

const Students = () => {

    const [selectedStudent, setSelectedStudent] = useState(null);

    const [itemOffset, setItemOffset] = useState(0);
    const [open, setOpen] = useState(true);

    const itemsPerPage = 10;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    //page change
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

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
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="Next"
                        previousLabel="Previous"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={0}
                        pageCount={pageCount}
                        renderOnZeroPageCount={null}
                        marginPagesDisplayed={1}
                        containerClassName="pagination justify-content-center"  // <ul>
                        pageClassName="page-item"                               // <li>
                        pageLinkClassName="page-link"                           // <a>
                        activeClassName="active"     
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                    />
                    <Details student={selectedStudent} />
                </>}
        </div>
    );
}

export default Students
