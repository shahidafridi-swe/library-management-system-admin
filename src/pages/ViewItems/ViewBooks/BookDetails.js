import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import bookImg from '../../../image/book.png';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    useEffect(() => {
        const url = ``;
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
                        <h2><span className='text-dark fw-bold'>Title:</span>BookName</h2>
                        <h3><span className='text-dark fw-bold'>Author:</span> AuthorName </h3>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>Call Number:</span> CallNumber</p>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>ISBN:</span> ISBNnumber</p>
                        <p className='m-0 fs-4 text-uppercase'><span className='text-dark fw-bold text-capitalize'>Accession Number:</span> AccessionNumber</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Publication:</span> PublicationName</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Publish Year:</span> PublishYear</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> Edition </p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Price:</span> Price $</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Copies:</span> CopyNumber</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Available:</span> AvilableNumber</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Location:</span> Location</p>
                      
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link
                            to={`/updateBookInfo/${book._id}`}
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