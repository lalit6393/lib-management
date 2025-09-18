import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { authorChange, errorsChange, idChange, nameChange, resetForm, touchesChange } from "../../../redux/slices/bookSlice";


const NewBook = () => {

    const [isPending, setIsPending] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [books, setBooks] = useState([]);

    const formState = useSelector((state) => state.books);
    const dispatch = useDispatch();
    
    const Validate = () => {

        const errors = {};

        if (!formState.id) {
            errors.id = "Id is reqired!"
        }
        if (!formState.name.trim()) {
            errors.name = "Name is required!"
        }
        if (!formState.author.trim()) {
            errors.author = "Author is required!"
        }

        const isValid = Object.keys(errors).length === 0;

        dispatch(errorsChange({ errors: errors }))

        setIsDisabled(!isValid);

        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsPending(true);

        setBooks(prev => ([...prev, { id: formState.id, name: formState.name, author: formState.author }]));

        setIsPending(false);
        dispatch(resetForm());
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            Validate();
        }, 500);

        return () => clearTimeout(timer);
    }, [formState.id, formState.name, formState.author])

    return (
        <div className="d-flex flex-column gap-3">
            <form onSubmit={handleSubmit} className="row g-2">
                <h1 className="col-12 m-3">Book Detail Form</h1>
                <label htmlFor='bookId' className='form-label col-sm-3'>Book Id:</label>
                <div className="col-sm-9">
                    <input
                        type='number'
                        placeholder='Enter Book Id'
                        name='id'
                        id='bookId'
                        className='form-control'
                        value={formState.id ?? ''}
                        onChange={(e) => dispatch(idChange({ value: e.target.value }))}
                        onBlur={(e) => dispatch(touchesChange({ name: e.target.name }))}
                        required
                    />
                    {
                        formState.touched?.id && formState.errors?.id && <p className="fs-7 text-danger">{formState.errors.id}</p>
                    }
                </div>
                <label htmlFor='bookName' className='form-label col-sm-3'>Book Name:</label>
                <div className="col-sm-9">
                    <input
                        type='text'
                        placeholder='Enter Book Name'
                        name='name'
                        id='bookName'
                        className='form-control'
                        value={formState.name}
                        onChange={(e) => dispatch(nameChange({ value: e.target.value }))}
                        onBlur={(e) => dispatch(touchesChange({ name: e.target.name }))}
                        required
                    />
                    {
                        formState.touched?.name && formState.errors?.name && <p className="fs-7 text-danger">{formState.errors.name}</p>
                    }
                </div>
                <label htmlFor='bookAuthor' className='form-label col-sm-3'>Author:</label>
                <div className="col-sm-9">
                    <input
                        type='text'
                        placeholder='Enter Book Name'
                        name='author'
                        id='bookAuthor'
                        className='form-control'
                        value={formState.author}
                        onChange={(e) => dispatch(authorChange({ value: e.target.value }))}
                        onBlur={(e) => dispatch(touchesChange({ name: e.target.name }))}
                        required
                    />
                    {
                        formState.touched?.author && formState.errors?.author && <p className="fs-7 text-danger">{formState.errors.author}</p>
                    }
                </div>
                <button type='submit' className='btn btn-primary' disabled={isPending || isDisabled}>
                    {isPending ? 'Submitting...' : 'Submit'}
                </button>
            </form>

            {/* rendering the booklist added */}
            <div>
                <table className="table table-bordered table-striped text-center">
                    <thead>
                        <tr>
                            <th>Book Id</th>
                            <th>Book Name</th>
                            <th>Book Author</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.length === 0 ?
                            <tr>
                                <td colSpan={3}>No book found!</td>
                            </tr>
                            :
                            <>
                                {books?.map((row, idx) => (
                                    <tr
                                        key={row?.id || idx}
                                    >
                                        <td>{row?.id ?? 'no id'}</td>
                                        <td>{row?.name ?? 'no name'}</td>
                                        <td>{row?.author ?? 'no auhtor'}</td>
                                    </tr>
                                ))}
                            </>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default NewBook
