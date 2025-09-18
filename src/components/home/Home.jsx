import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='row row-cols-1 g-3'>
            <h2 className='col-12 fs-2'>Welcome to Library Management System</h2>
            <div className='col col-sm-4 d-flex justify-content-center'>
                <Link className='link-primary link-underline-opacity-25 link-underline-opacity-100-hover' to={'/books'}>Books</Link>
            </div>
            <div className='col col-sm-4 d-flex justify-content-center'>
                <Link className='link-primary link-underline-opacity-25 link-underline-opacity-100-hover' to={'/students'}>Students</Link>
            </div>
            <div className='col col-sm-4 d-flex justify-content-center'>
                <Link className='link-primary link-underline-opacity-25 link-underline-opacity-100-hover' to={'/books/new'}>Add New Book</Link>
            </div>
        </div>
    )
}

export default Home
