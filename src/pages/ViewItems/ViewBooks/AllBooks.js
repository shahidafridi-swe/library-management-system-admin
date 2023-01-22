import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/esm/Table';
import { Link } from 'react-router-dom';
import './ViewBooks.css';
const AllBooks = () => {
    const bookListTitle = ["Accession Number", "Title", "Author", "Publication", "Publish Year", "Edition", "Call No", "ISBN", "Price", "Category", "Actions"];

    const [allBooks, setAllBooks] = useState([]);
    const [isLoaded, setIsLoaded] = useState(true);

    useEffect(() => {

        const url = `http://localhost:5000/viewBooks`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setAllBooks(data)
                setIsLoaded(false)
            });

    }, []);
    return (
        <div>
            <div className="tableFixHead " >
                {
                    isLoaded ? (
                        <div className="spinner-border text-secondary  spinner ">
                            <span className="sr-only">Loading...</span>
                        </div>
                    ) :
                        <Table responsive='sm' striped bordered hover variant="success" className='myTable ' >
                            <thead className='tableHeader text-uppercase '>
                                <tr className='justify-content-center align-items-center'>
                                    {bookListTitle.map((title) => (
                                        <th className='uppercase align-items-center' key={title}>{title}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allBooks.map((book, index) => (
                                        <tr key={book._id}>
                                            <td>{book.accessionNumber}</td>
                                            <td>{book.title}</td>
                                            <td>{book.authors}</td>
                                            <td>{book.publisher}</td>
                                            <td>{book.publicationYear}</td>
                                            <td>{book.edition}</td>
                                            <td>{book.callNo}</td>
                                            <td>{book.ISBN10}</td>
                                            <td>{book.price}</td>
                                            <td>{book.category}</td>
                                            <td>
                                                <Link to={`/viewBooks/${book._id}`}
                                                    className='btn btn-warning btn-sm'
                                                >View</Link>
                                                <Link to={`/issueBook/${book._id}`}
                                                    className='btn btn-success btn-sm mt-1'
                                                >Issue</Link>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }
                            </tbody>
                        </Table>
                }
            </div>


        </div>
    );
};

export default AllBooks;