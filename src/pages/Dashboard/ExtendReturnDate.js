import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useParams, useNavigate, Link } from 'react-router-dom';
import FormTitle from '../Shared/FormTitle';
import axios from 'axios';
import Swal from 'sweetalert2'
const ExtendReturnDate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    // const [extendDate, setExtendDate] = useState({});
    const [book, setBook] = useState({});
    console.log("ex", book)
    // console.log(extendDate.returnDate)
    const [data, setData] = useState({
        returnDate: book?.returnDate
    });
    console.log(data)

    //get data show
    useEffect(() => {
        const url = `http://localhost:5000/extendReturnDate/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data.returnDate);
                setBook(data)
            })
    }, [id]);

    // useEffect(() => {
    //     const url = `http://localhost:5000/adminIssueRequestBook/${id}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data.returnDate);
    //             setExtendDate(data)
    //         })
    // }, [id]);
    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                `http://localhost:5000/issueBook/${id}`,
                data,
            );
        console.log(data)
        Swal.fire('Return Date Updated Successfully')
        navigate("/")
    };

    // handle delet button
    const handleDeletBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/returnBook/${id}`)
                Swal.fire(
                    'Returned!',
                    'User returned the book',
                    'success'
                )
                navigate("/")
            }
        })
    }

    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '80%' }} className="text-white p-3">
                <Card.Body>
                    <FormTitle>Details of the issue of {book.FullName}</FormTitle>
                    <Card.Text>
                        <div className='d-flex justify-content-between my-5' >
                            <div className='w-50'>
                                <h3><span className='text-dark fw-bold'>User Name:</span> {book.FullName}</h3>
                                <h3><span className='text-dark fw-bold'>User ID:</span> {book.InstituteId}</h3>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span> {book.userType}</p>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span> {book.phone}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> {book.instituteEmail}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> {book.presentAddress}</p>
                            </div>
                            <div className='w-50'>
                                <h3><span className='text-dark fw-bold'>Book Title:</span> {book?.book?.title}</h3>
                                <h3><span className='text-dark fw-bold'>Author:</span> {book?.book?.authors}</h3>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Accession Number:</span> {book?.book?.accessionNumber}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> {book?.book?.edition}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Issue Date:</span> {book.issueDate}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold' name="returnDate">Return Date:</span> {book.returnDate}</p>
                            </div>
                        </div>
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>

                        <div className='w-50'>
                            <Link className='btn btn-danger' to="/">  BACK</Link>
                        </div>
                      
                        <div className='w-50'>
                            <Form className='w-100 rounded bg-secondary myForm' onSubmit={handleSubmit}>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Extend Date of Return</Form.Label>
                                        <input onChange={handleChange} type="date" id="returnDate" className='datepicker' name="returnDate" required/>
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} sm='12' md='6' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit'>EXTEND DATE</button>
                                </Form.Group>
                               
                                
                            </Form>
                            <Form.Group as={Col} sm='12' md='6' >
                                <button className='btn btn-success w-100 p-2 mt-3' onClick={() => handleDeletBtn(book._id)}>RETURNED</button>

                                </Form.Group>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ExtendReturnDate;