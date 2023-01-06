import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const ViewUserList = () => {
    const userListTitle = ['name', "institute_Id", "phone", "user_type", "department", "email", "action"]
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/userList")
            .then(res => res.json())
            .then((data) => setUserList(data))
    }, []);
    const handleDeletBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/userList/${id}`)
                    .then(res => {
                        const remaining = userList.filter(admin => admin._id !== id)
                        setUserList(remaining)
                    });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div>
            <Table responsive='sm' striped bordered hover variant="success" className='myTable mx-auto w-100' >
                <thead className='tableHeader text-uppercase '>
                    <tr className='justify-content-center align-items-center'>
                        {userListTitle.map((title) => (
                            <th className='uppercase align-items-center' key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {userList.map(user => (
                        <tr key={user._id}>
                            <td>{user.fullName}</td>
                            <td>{user.instituteId}</td>
                            <td>{user.phoneNumber}</td>
                            <td>{user.userType}</td>
                            <td>{user.department}</td>
                            <td>{user.instituteEmail}</td>
                            <td>
                                <Link to={`/userList/${user._id}`}
                                    className='btn btn-dark'
                                >View</Link>
                                <Button variant="danger" onClick={() => handleDeletBtn(user._id)}>Delete Profile</Button>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ViewUserList;