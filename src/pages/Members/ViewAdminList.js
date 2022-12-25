import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
const ViewAdminList = () => {
    const adminListTitle = ['name', "institute_Id", "phone", "designation", "email", "action"]
    const [adminList, setAdminList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/adminList")
            .then(res => res.json())
            .then((data) => setAdminList(data))
    }, []);
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
                    {adminList.map(admin => (
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