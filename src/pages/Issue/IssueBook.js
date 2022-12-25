import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import FormTitle from '../Shared/FormTitle';


const IssueBook = () => {
    const { register, handleSubmit, reset } = useForm();

    return (
        <div className='d-flex justify-content-center w-100'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white  py-3">
                <Card.Body>
                    <FormTitle>Book Issue Form</FormTitle>

                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form className='w-100 rounded bg-secondary myForm'>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <h3 className='text-dark text-uppercase mt-3'>User Information</h3>
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <h3 className='text-dark text-uppercase mt-3'>Book Information</h3>
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name='name' value="" required {...register("FullName")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Book Title</Form.Label>
                                        <Form.Control type="text" name='title' value="" required {...register("title")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute ID</Form.Label>
                                        <Form.Control type="text" name='instituteId' value="" required {...register("InstituteId")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" name='autor' value="" required {...register("author")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>User Type</Form.Label>
                                        <Form.Control type="text" name='userType' value="" required {...register("userType")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Accession Number</Form.Label>
                                        <Form.Control type="text" name='accession' value="" required {...register("accession")} />
                                    </Form.Group>
                                </Row>
                                
                                <Row>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name='phone' value="" required {...register("phone")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Edition</Form.Label>
                                        <Form.Control type="text" name='editon' value="" required {...register("edition")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute Email</Form.Label>
                                        <Form.Control type="email" name='email1' value="" required {...register("instituteEmail")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Issue Date</Form.Label>
                                        <Form.Control type="email" name='issueDate' value="" required {...register("issueDate")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Present Address </Form.Label>
                                        <Form.Control type="text" name='address' value="" required {...register("presentAddress")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Return Date </Form.Label>
                                        <Form.Control type="text" name='returnDate' value="" required {...register("returnDate")} />
                                    </Form.Group>
                                </Row>

                                <Form.Group as={Col} sm='12' md='12' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >ISSUE</button>
                                </Form.Group>
                                <Form.Group as={Col} sm='12' md='12' >
                                    <Link
                                        className='btn btn-danger w-100 p-2 mt-3'
                                        to={`/viewBooks`}
                                    >CANCEL</Link>
                                </Form.Group>
                            </Form>

                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default IssueBook;