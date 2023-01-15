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
        const url = ``;
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
                        <h2><span className='text-dark fw-bold'>Title: </span>Library Management System Web App {thesis.title}</h2>
                        <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Description: </span>Create an account or log into Facebook. Connect with friends, family and other people you know. Share photos and videos, send messages and get updates. {thesis.Description}</p>
                        <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Instructor: </span> Syed Maruful Huq {thesis.Instructor}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Semester:</span> Fall 2022 {thesis.Semester}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-1:</span> {thesis.Member1_Name}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.Member1_ID}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-2:</span> {thesis.Member2_Name}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.Member2_ID}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-3:</span> {thesis.Member3_Name}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.Member3_ID}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-4:</span> {thesis.Member4_Name}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.Member4_ID}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>Member-5:</span> {thesis.Member5_Name}</p>
                        <p className='m-0 fs-4'><span className='text-dark fw-bold'>ID:</span> {thesis.Member5_ID}</p>
                       
                </Card.Text>
                    <div className='d-flex justify-content-end'>
                       
                        <Button variant="danger"  onClick={() => handleDeletBtn(thesis._id)}>Delete Thesis</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ThesisDetails;