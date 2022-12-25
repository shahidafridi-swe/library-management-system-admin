import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
const ViewUserList = () => {
    const userListTitle = ['name', "institute_Id", "phone", "user_type", "department", "email", "action"]
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/userList")
            .then(res => res.json())
            .then((data) => setUserList(data))
    }, []);
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
                            <td>{user.FullName}</td>
                            <td>{user.instituteId}</td>
                            <td>{user.phoneNo}</td>
                            <td>{user.userType}</td>
                            <td>{user.department}</td>
                            <td>{user.instituteEmail}</td>
                            <td>
                                <Link to={`/userList/${user._id}`}
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

export default ViewUserList;