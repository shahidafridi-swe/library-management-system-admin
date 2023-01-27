import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';

const UserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/userList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [id])
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white p-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <h2><span className='text-dark fw-bold'>Name:</span> {user.fullName}</h2>
                        <h3><span className='text-dark fw-bold'>ID:</span> {user.instituteId}</h3>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>User Type:</span> {user.userType}</p>
                        <p className='m-0 fs-4 text-uppercase'><span className='text-dark fw-bold text-capitalize'>Department:</span> {user.department}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Phone:</span> {user.phoneNumber}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> {user.instituteEmail}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Personal Email:</span> {user.personalEmail}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> {user.presentAdd}</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link
                            to={`/userList`}
                            className='btn btn-danger w-25'
                        >Back</Link>
                        <Link
                            to={`/updateUserProfile/${user._id}`}
                            className='btn btn-primary w-25'
                        >Update Profile</Link>
                       
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserProfile;