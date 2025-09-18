import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h3 className='fs-3'>404</h3>
            <p>Page Not Found!</p>
            <Link className='btn btn-primary' to={'/'}>Home</Link>
        </div>
    )
}

export default NotFound
