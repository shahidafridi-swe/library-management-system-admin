import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
const ViewAdminList = () => {
    const adminListTitle = ['name', "institute_Id", "phone", "designation", "email", "action"]
    const [adminData, setAdminData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/adminList")
            .then(res => res.json())
            .then((data) => setAdminData(data))
    })
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
                axios.delete(`http://localhost:5000/adminList/${id}`)
                    .then(res => {
                        const remaining = adminData.filter(admin => admin._id !== id)
                        setAdminData(remaining)
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
                        {adminListTitle.map((title) => (
                            <th className='uppercase align-items-center' key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {adminData.map(admin => (
                        <tr key={admin._id}>
                            <td>{admin.FullName}</td>
                            <td>{admin.InstituteId}</td>
                            <td>{admin.PhoneNo}</td>
                            <td>{admin.Designation}</td>
                            <td>{admin.instituteEmail}</td>
                            <td>
                                <Link to={`/adminList/${admin._id}`}
                                    className='btn btn-dark'
                                >View</Link>
                                <Button variant="danger" onClick={() => handleDeletBtn(admin._id)}>Delete Profile</Button>

                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ViewAdminList;