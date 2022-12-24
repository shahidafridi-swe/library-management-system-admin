import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';

const AdminProfile = () => {
    const { id } = useParams();
    const [admin, setAdmin] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/adminList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [id])
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white p-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <h2><span className='text-dark fw-bold'>Name:</span> {admin.FullName}</h2>
                        <h3><span className='text-dark fw-bold'>ID:</span> {admin.InstituteId}</h3>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Designation:</span> {admin.Designation}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Phone:</span> {admin.PhoneNo}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Password:</span> {admin.password}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> {admin.instituteEmail}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Personal Email:</span> {admin.personalEmail}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> {admin.presentAddress}</p>
                    </Card.Text>





                    <div className='d-flex justify-content-between'>
                        {/* <Link
                            to={'/updateProfile/' + institute_Id}
                            className='btn btn-primary'
                        >Update Profile</Link> */}

                        <Button variant="danger">Delete Profile</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AdminProfile;