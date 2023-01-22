import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../Shared/FormTitle';
import Swal from 'sweetalert2'
import axios from 'axios';
const UpdateAdminProfile = () => {
    const { id } = useParams();
    const [admin, setAdmin] = useState({});
    const [data, setData] = useState({
        FullName: admin?.FullName,
        InstituteId: admin?.InstituteId,
        PhoneNo: admin?.PhoneNo,
        Designation: admin?.Designation,
        password: admin?.password,
        instituteEmail: admin?.instituteEmail,
        personalEmail: admin?.personalEmail,
        presentAddress: admin?.presentAddress,
    })
    useEffect(() => {
        const url = `http://localhost:5000/adminList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [id]);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                `http://localhost:5000/updateProfile/${id}`,
                data
            );
        Swal.fire('Profile Update Successfully')
        window.location.href = "/adminList";
    };
    // console.log(admin);
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white py-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit} className='w-75 rounded bg-secondary myForm'>
                                <FormTitle>Information of {admin.FullName}</FormTitle>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='FullName'
                                            defaultValue={admin.FullName}
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                               
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute ID</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='InstituteId'
                                            defaultValue={admin.InstituteId}
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='PhoneNo'
                                            defaultValue={admin.PhoneNo}
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='Designation'
                                            defaultValue={admin.Designation}
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Password for admin login</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='password'
                                            defaultValue={admin.password}
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Institute Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name='instituteEmail'
                                            defaultValue={admin.instituteEmail}
                                            onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Personal Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name='personalEmail'
                                            defaultValue={admin.personalEmail}
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Present Address </Form.Label>
                                        <Form.Control
                                            type="text"
                                            name='presentAddress'
                                            defaultValue={admin.presentAddress}
                                            onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                                {/* <Row>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Profile Photo</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="file"
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row> */}

                                <Form.Group as={Col} sm='12' md='12' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >Update Profile</button>
                                </Form.Group>
                                <Form.Group as={Col} sm='12' md='12' >
                                    <Link
                                        className='btn btn-danger w-100 p-2 mt-3'
                                        to={`/adminList/${admin._id}`}
                                    >CANCEL</Link>
                                </Form.Group>
                            </Form>

                        </div>

                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default UpdateAdminProfile;