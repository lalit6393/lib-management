import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../redux/slices/userSlice';

const Users = () => {

    const dispatch = useDispatch();
    const { loading, success, error, users } = useSelector((state) => state.users);


    useEffect(() => {
        dispatch(getUsers());
        console.log(error, users, success);

    }, [error])

    if (loading) return <p>Loading...</p>

    return (
        <div className=''>
            {error && <p className='text-danger'>{error}</p>}
            {
                !error && success &&
                <div className='d-flex flex-column gap-3 align-items-center p-2'>
                    {users?.map((user) =>
                        <div key={user?.id} className='row d-flex border border-2 rounded-2 p-2 p-md-3 gap-3 justify-content-center'>
                            <div className='col-sm-4 user-image-box'>
                                <img
                                    src={`https://api.dicebear.com/7.x/bottts/svg?seed=${user?.usrname}.svg`}
                                    alt='user'
                                    width={100}
                                    height={100}
                                />
                            </div>
                            <div className='col-sm-8'>
                                <dl className="row g-0 m-0">
                                    <dt className='col-12 fs-3 fw-semibold'>{user.name}</dt>
                                    <dt className="col-sm-3">Email</dt>
                                    <dd className="col-sm-9">{user?.email}</dd>

                                    <dt className="col-sm-3">Phone</dt>
                                    <dd className="col-sm-9">{user?.phone}</dd>

                                    <dt className="col-sm-3">Company</dt>
                                    <dd className="col-sm-9">{user?.company?.name}</dd>

                                    <dt className="col-sm-3">Website</dt>
                                    <dd className="col-sm-9">{user.website}</dd>

                                    <dt className="col-sm-3">Address</dt>
                                    <dd className="col-sm-9">
                                        {
                                            [user?.address?.suite, user?.address?.street, user?.address?.city].filter(value => value).join(', ')
                                        }
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default Users
