import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';

const AdminProfile = () => {

    const { institute_Id } = useParams();

    const [admin, setAdmin] = useState({});
    useEffect(() => {
        const url = ``;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [institute_Id])

    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '50%' }} className="text-white p-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <h2><span className='text-dark fw-bold'>Name:</span> NAME NAME NAME</h2>
                        <h3><span className='text-dark fw-bold'>ID:</span> 191378038</h3>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Designation:</span> Librarian</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Phone:</span> 01711223344</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Password:</span> password</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> faculty@pu.edu.bd</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Personal Email:</span> faculty@gmail.com</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> Dhaka, Bangladesh</p>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link
                        to={'/updateProfile/'+institute_Id} 
                        className='btn btn-primary'
                        >Update Profile</Link>

                        <Button variant="danger">Delete Profile</Button> 
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AdminProfile;