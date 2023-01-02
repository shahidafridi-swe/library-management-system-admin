import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2'
import FormTitle from '../Shared/FormTitle';
import "react-datepicker/dist/react-datepicker.css";
import './issuBook.css';
const IssueBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/issueRequestForABook', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('Request Sent Successfully')
                    reset()
                }
            })
    };
    useEffect(() => {
        const url = `http://localhost:5000/issueRequestForABook/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])
    return (
        <div className='d-flex justify-content-center w-100'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white  py-3">
                <Card.Body>
                    <FormTitle>Book Issue Form</FormTitle>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit(onSubmit)} className='w-100 rounded bg-secondary myForm'>
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
                                        <Form.Control type="text" name='name' placeholder="Full Name" required {...register("FullName")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Book Title</Form.Label>
                                        <Form.Control type="text" name='title' defaultValue={book.title} placeholder="Books Title" required {...register("title")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute ID</Form.Label>
                                        <Form.Control type="text" name='instituteId' placeholder="Institute Id" required {...register("InstituteId")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text" name='autor' defaultValue={book.authors} placeholder="Author Name" required {...register("author")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>User Type</Form.Label>
                                        <Form.Select className="text-light" name='userType' aria-label="Default select example" {...register("userType")}>
                                            <option className='text-dark' value="all">All</option>
                                            <option className='text-dark' value="student">Student</option>
                                            <option className='text-dark' value="faculty">Faculty</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Accession Number</Form.Label>
                                        <Form.Control type="text" name='accession' defaultValue="1" placeholder="Accession Number" required {...register("accessionNumber")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name='phone' placeholder="Phone Number" required {...register("phone")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Edition</Form.Label>
                                        <Form.Control type="text" name='editon' defaultValue={book.edition} placeholder="Edition" required {...register("edition")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute Email</Form.Label>
                                        <Form.Control type="email" name='email1' placeholder="Institute Email" required {...register("instituteEmail")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Issue Date</Form.Label>
                                        {/* <Form.Control> */}
                                        <input type="date" id="birthday" className='datepicker' name="birthday" {...register("issueDate")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Present Address </Form.Label>
                                        <Form.Control type="text" name='address' placeholder="Present Address" required {...register("presentAddress")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Return Date </Form.Label>
                                        <input type="date" id="birthday" className='datepicker' name="birthday" {...register("returnDate")} />
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