import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';
import FormTitle from '../Shared/FormTitle';

const SingleRequestDetails = () => {
    return (
        <div className='d-flex justify-content-center'>

            <Card bg='secondary' style={{ width: '60%' }} className="text-white p-3">
                <Card.Body>
                    <FormTitle>Book Request Details Of Name</FormTitle>
                    <Card.Text>
                        <div className='d-flex justify-content-between my-5' >
                            <div>
                                <h2><span className='text-dark fw-bold'>User Name:</span> value</h2>
                                <h3><span className='text-dark fw-bold'>User ID:</span> value</h3>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span> value</p>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Personal Email:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> value</p>
                            </div>
                            <div>
                                <h2><span className='text-dark fw-bold'>Book Title:</span> value</h2>
                                <h3><span className='text-dark fw-bold'>Author:</span> value</h3>
                                
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Accession Number:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Issue Date:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Return Email:</span> value</p>
                            </div>
                        </div>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link
                            to={`/issueRequest`}
                            className='btn btn-primary'
                        >Accept Request</Link>
                        <Button variant="danger">Deny Request</Button>
                    </div>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleRequestDetails;