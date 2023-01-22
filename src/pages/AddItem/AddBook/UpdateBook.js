import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './AddBook.css';
import bookImg from '../../../image/book.png';
import Swal from 'sweetalert2';
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
function UpdateBook() {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [data, setData] = useState({
        // category: book?.FullName,
        callNo: book?.callNo,
        title: book?.title,
        ISBN10: book?.ISBN10,
        authors: book?.authors,
        ISBN13: book?.ISBN13,
        publisher: book?.publisher,
        edition: book?.edition,
        branch: book?.branch,
    })
    useEffect(() => {
        const url = `http://localhost:5000/viewBooks/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id]);

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
                `http://localhost:5000/updateBookInfo/${id}`,
                data
            );
        Swal.fire('Updated Successfully')
        window.location.href = "/viewBooks";
    };
    console.log(book);
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white py-3">
                <Card.Img variant="top" src={bookImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit} className='w-75 rounded bg-secondary myForm'>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control name='category' type="text" defaultValue={book.category} required onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Call No</Form.Label>
                                        <Form.Control name='callNo' type="text" defaultValue={book.callNo} required onChange={handleChange} />
                                    </Form.Group>
                                </Row>

                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control name='title' type="text" defaultValue={book.title} required onChange={handleChange} />
                                    </Form.Group>
                                </Row>

                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Author</Form.Label>
                                        <Form.Control name='authors' type="text" defaultValue={book.authors} required onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Publisher</Form.Label>
                                        <Form.Control name='publisher' type="text" defaultValue={book.publisher} required onChange={handleChange} />
                                    </Form.Group>
                                </Row>

                                <Row className="">

                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Accession Number</Form.Label>
                                        <Form.Control name='accessionNumber' type="text" defaultValue={book.accessionNumber} required onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Edition</Form.Label>
                                        <Form.Control name='edition' type="text" defaultValue={book.edition} required onChange={handleChange} />
                                    </Form.Group>
                                </Row>


                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Location: </Form.Label>
                                        <Form.Control name='location' type="text" defaultValue={book.location} required onChange={handleChange} />
                                    </Form.Group>
                                  
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control name='price' type="number" defaultValue={book.price} required onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Page</Form.Label>
                                        <Form.Control name='pageNumber' type="number" defaultValue={book.pageNumber} required onChange={handleChange} />
                                    </Form.Group>
                                </Row>

                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Tags</Form.Label>
                                        <Form.Control name='tags' type="text" defaultValue={book.tags ? book.tags : ""} required onChange={handleChange} />
                                    </Form.Group>
                                </Row>

                                {/* <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Branch</Form.Label>
                                        <Form.Control name='branch' type="text" defaultValue={book.branch} required onChange={handleChange} />
                                    </Form.Group>

                                </Row> */}
                                <Form.Group as={Col} sm='12' md='12' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit'>Update Book</button>
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
}

export default UpdateBook;







