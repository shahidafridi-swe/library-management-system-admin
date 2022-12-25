import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';
import './AddBook.css';
import Button from 'react-bootstrap/Button';
import ModalForTen from './ModalForTen';
import { useForm } from "react-hook-form";
import bookImg from '../../../image/book.png';
import Swal from 'sweetalert2'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UpdateBook() {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

    };
    

    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white py-3">
                <Card.Img variant="top" src={bookImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit(onSubmit)} className='w-75 rounded bg-secondary myForm'>

                                <Row className="">

                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control type="text" disabled value="VALUE" required {...register("category")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Call No</Form.Label>
                                        <Form.Control type="text" value="VALUE" required {...register("callNo")} />
                                    </Form.Group>
                                </Row>

                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control type="text" value="VALUE" required {...register("title")} />
                                    </Form.Group>

                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>ISBN10</Form.Label>
                                        <Form.Control type="text" disabled value="VALUE" required {...register("ISBN10")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control type="text"  value="VALUE" required {...register("authors")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>ISBN13</Form.Label>
                                        <Form.Control type="text" disabled value="VALUE" required {...register("ISBN13")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Publisher</Form.Label>
                                        <Form.Control type="text" value="VALUE" required  {...register("publisher")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control type="number" value={0} required {...register("price")} />
                                    </Form.Group>
                                </Row>

                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Publish Year</Form.Label>
                                        <Form.Control type="number" disabled value={2000} required {...register("publicationYear")} />
                                    </Form.Group>

                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Accession Number</Form.Label>
                                        <Form.Control type="text" value="VALUE" required {...register("accessionNo")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Edition</Form.Label>
                                        <Form.Control type="text" value="VALUE" required {...register("edition")} />
                                    </Form.Group>

                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Tags</Form.Label>
                                        <Form.Control type="text" value="VALUE" required {...register("tags")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Branch</Form.Label>
                                        <Form.Control type="text" value="VALUE" required {...register("library")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Cover Photo</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="file"
                                        />
                                    </Form.Group>
                                </Row>
                                <Form.Group as={Col} sm='12' md='12' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >Update Book</button>
                                </Form.Group>
                                <Form.Group as={Col} sm='12' md='12' >
                                    <Link
                                        className='btn btn-danger w-100 p-2 mt-3'
                                        to={`/viewBooks/}`}
                                    >CANCEL</Link>
                                </Form.Group>
                            </Form>
                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>

        </div>

    );
}

export default UpdateBook;







