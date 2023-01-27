import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import bookImg from '../../../image/book.png';
import axios from 'axios';
import Swal from 'sweetalert2';
const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    console.log("this book", book)
    useEffect(() => {
        const url = `http://localhost:5000/viewBooks/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [id]);



    // handle delet button===
const handleDeletBtn = (id) => {
    Swal.fire({
        title: 'Are you sure?',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/viewBooks/${id}`)
            Swal.fire(
                'Returned!',
                'User returned the book',
                'success'
            )
            window.location.href = "/viewBooks";
        }
    })
}
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white p-3">
                <Card.Img variant="top" src={bookImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <h2><span className='text-dark fw-bold'>Title:</span>{book.title}</h2>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>Author:</span> {book.authors} </p>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>Category:</span> {book.category} </p>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>Call Number:</span> {book.callNo}</p>
                        <p className='m-0 fs-4 text-capitalize'><span className='text-dark fw-bold'>ISBN:</span> {book.ISBN10? book.ISBN10:book.ISBN13}</p>
                        <p className='m-0 fs-4 text-uppercase'><span className='text-dark fw-bold text-capitalize'>Accession Number:</span>{book.accessionNumber}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Publication:</span> {book.publisher}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Publish Year:</span> {book.publicationYear}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> {book.edition} </p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Price: </span>{book.price && book.price} BDT</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Page: </span>{book.pageNumber && book.pageNumber}</p>
                        {/* <p className='m-0 fs-4'><span className='text-dark fw-bold'>Copies:</span> 1</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Available:</span> 1 </p> */}
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Branch:</span> {book.branch}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Location:</span> {book.location}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Tags:</span> {book.tags}</p>
                      
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <Link
                            to={`/viewBooks`}
                            className='btn btn-primary w-25'
                        >Back</Link>
                        <Link
                            to={`/updateBook/${book._id}`}
                            className='btn btn-success w-25'
                        >Update Book Info</Link>
                        <Button className='w-25' variant="danger"  onClick={() => handleDeletBtn(book._id)}>Delete Book</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BookDetails;