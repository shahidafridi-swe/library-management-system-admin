import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import bookImg from '../../../image/book.png';
import axios from 'axios';
import Swal from 'sweetalert2';
const ThesisDetails = () => {
    const { id } = useParams();
    const [thesis, setThesis] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/viewThesis/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setThesis(data))
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
                axios.delete(``)
                Swal.fire(
                    'Returned!',
                    'User returned the book',
                    'success'
                )
            }
        })
    }
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white p-3">
                <Card.Img variant="top" src={bookImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <h2><span className='text-dark fw-bold'>Title: </span>{thesis.ThesisTitle}</h2>
                        <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Description: </span> {thesis.description}</p>
                        <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Instructor: </span>  {thesis.instructor}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Semester:</span> Fall 2022 {thesis.semester}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-1:</span> {thesis.mem1name}</p>

                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.mem1id}</p>
                        {thesis.mem2name &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-2:</span> {thesis.mem2name}</p>

                        }
                        {thesis.mem2id &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.mem2id}</p>

                        }
                        {thesis.mem3name &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-3:</span> {thesis.mem3name}</p>

                        }
                        {thesis.mem3id &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.mem3id}</p>

                        }
                        {thesis.mem4name &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-4:</span> {thesis.mem4name}</p>
                        }
                        {
                            thesis.mem4id &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.mem4id}</p>

                        }
                        {
                            thesis.mem5name &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-5:</span> {thesis.mem5name}</p>
                        }
                        {
                            thesis.mem5id &&
                            <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.mem5id}</p>

                        }

                    </Card.Text>
                    <div className='d-flex justify-content-between  border-top pt-3'>

                        <Link className="btn btn-primary w-25" to="/viewTheses">Back</Link>
                        <Button variant="danger" className='w-25' onClick={() => handleDeletBtn(thesis._id)}>Delete Thesis</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ThesisDetails;