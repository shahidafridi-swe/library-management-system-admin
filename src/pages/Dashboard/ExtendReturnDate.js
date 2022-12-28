import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';
import FormTitle from '../Shared/FormTitle';

const ExtendReturnDate = () => {
    return (
        <div className='d-flex justify-content-center'>

            <Card bg='secondary' style={{ width: '80%' }} className="text-white p-3">
                <Card.Body>
                    <FormTitle>Details of the issue of USERNAME</FormTitle>
                    <Card.Text>
                        <div className='d-flex justify-content-between my-5' >
                            <div className='w-50'>
                                <h3><span className='text-dark fw-bold'>User Name:</span> value</h3>
                                <h3><span className='text-dark fw-bold'>User ID:</span> value</h3>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span> value</p>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> value</p>
                            </div>
                            <div className='w-50'>
                                <h3><span className='text-dark fw-bold'>Book Title:</span> value</h3>
                                <h3><span className='text-dark fw-bold'>Author:</span> value</h3>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Accession Number:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Issue Date:</span> value</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Return Email:</span> value</p>
                            </div>
                        </div>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='w-50'>
                            <button className='btn btn-success'>RETURNED</button>
                        </div>
                        <div className='w-50'>
                            <Form className='w-100 rounded bg-secondary myForm'>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Extend Date of Return</Form.Label>
                                        <Form.Control type="text" name='extendReturnDate' value="" required />
                                    </Form.Group>
                                </Row>

                                <Form.Group as={Col} sm='12' md='6' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >EXTEND DATE</button>
                                </Form.Group>

                            </Form>
                        </div>
                    </div>
                </Card.Body>
            </Card>


        </div>
    );
};

export default ExtendReturnDate;