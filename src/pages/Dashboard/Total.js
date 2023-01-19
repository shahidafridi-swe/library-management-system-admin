import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./MyDashboard.css";

const Total = () => {
    const [books, setBooks] = useState([]);
    const [thesis, setThesis] = useState([]);
    const [admins, setAdmins] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/allBooks')
        .then(res=> res.json())
        .then(data => setBooks(data))
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/viewThesis')
        .then(res=> res.json())
        .then(data => setThesis(data))
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/adminList')
        .then(res=> res.json())
        .then(data => setAdmins(data))
    },[])
    useEffect(()=>{
        fetch('http://localhost:5000/userList')
        .then(res=> res.json())
        .then(data => setUsers(data))
    },[])

    return (
        <section className='px-5 py-2'>
            <div className='border border-dark rounded'>
                <h1 className='text-center text-uppercase'>Total Items</h1>
                <div className='d-flex '>
                    <Link to="/adminList" className="w-25 mx-3 text-decoration-none total-link ">
                        <Card bg="dark" text='white' className="mb-2  text-center my-card">
                            <Card.Header>ADMIN</Card.Header>
                            <Card.Body>
                                <Card.Title className='fs-1 fw-bold font-monospace'>{admins.length} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/userList" className="w-25 mx-3 text-decoration-none total-link">
                        <Card bg="dark" text='white' className="mb-2  text-center my-card">
                            <Card.Header>USER</Card.Header>
                            <Card.Body>
                                <Card.Title className='fs-1 fw-bold font-monospace'>{users.length} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/viewBooks" className="w-25 mx-3 text-decoration-none total-link">
                        <Card bg="dark" text='white' className="mb-2  text-center my-card">
                            <Card.Header>BOOK</Card.Header>
                            <Card.Body>
                                <Card.Title className='fs-1 fw-bold font-monospace'>{books.length} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>
                    <Link to="/viewTheses" className="w-25 mx-3 text-decoration-none total-link">
                        <Card bg="dark" text='white' className="mb-2  text-center my-card">
                            <Card.Header>THESIS</Card.Header>
                            <Card.Body>
                                <Card.Title className='fs-1 fw-bold font-monospace'>{thesis.length} </Card.Title>
                            </Card.Body>
                        </Card>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Total;