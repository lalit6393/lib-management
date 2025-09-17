import React from 'react'

const Details = ({ student }) => {

    if (!student) return;

    return (
        <div className='row row-cols-1'>
            <h4 className='fw-semibold col'>Student Details</h4>
            <div className='col'>
                <span className='fw-semibold'>Student Id: </span>
                {student.id}
            </div>
            <div className='col'>
                <span className='fw-semibold'>Student Name: </span>
                {student.title}
            </div>
            <div className='col'>
                <span className='fw-semibold'>Student Age: </span>
                {student.age}
            </div>
        </div>
    )
}

export default Details
