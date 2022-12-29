import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import bookImg from '../../../image/book.png';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/viewBooks/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id])
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white p-3">
                <Card.Img variant="top" src={bookImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <h2><span className='text-dark fw-bold'>Title:</span>{book.title}</h2>
                        <h3><span className='text-dark fw-bold'>Author:</span> {book.authors} </h3>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>Call Number:</span> {book.callNo}</p>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>ISBN:</span> {book.ISBN10? book.ISBN10:book.ISBN13}</p>
                        <p className='m-0 fs-4 text-uppercase'><span className='text-dark fw-bold text-capitalize'>Accession Number:</span>1</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Publication:</span> {book.publisher}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Publish Year:</span> {book.publicationYear}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> {book.edition} </p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Price:</span> 550 $</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Copies:</span> 1</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Available:</span> 2</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Location:</span> {book.library}</p>
                      
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link
                            to={`/updateBook/${book._id}`}
                            className='btn btn-primary'
                        >Update Book Info</Link>
                        <Button variant="danger">Delete Book</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookDetails;