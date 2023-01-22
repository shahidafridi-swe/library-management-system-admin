import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../Shared/FormTitle';
import Swal from 'sweetalert2';
import axios from 'axios';
const UpdateUserProfile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [data, setData] = useState({
        fullName: user?.fullName,
        instituteId: user?.instituteId,
        phoneNumber: user?.phoneNumber,
        userType: user?.userType,
        password: user?.password,
        instituteEmail: user?.instituteEmail,
        personalEmail: user?.personalEmail,
        presentAdd: user?.presentAdd,
        department: user?.department,
    });
    console.log(data)
    useEffect(() => {
        const url = `http://localhost:5000/userList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
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
                `http://localhost:5000/updateUserProfile/${id}`,
                data
            ); 
            Swal.fire('Profile Update Successfully')
            window.location.href = "/userList";
    };
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white py-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit} className='w-75 rounded bg-secondary myForm'>
                                <FormTitle>Information of {user.fullName}</FormTitle>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name='fullName' defaultValue={user.fullName} required  onChange={handleChange} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute ID</Form.Label>
                                        <Form.Control type="text" name='instituteId' defaultValue={user.instituteId} required  onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name='phoneNumber' defaultValue={user.phoneNumber} required   onChange={handleChange}/>
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>User Type</Form.Label>
                                        <Form.Select name='userType' aria-label="Default select example" defaultValue={user.userType}   onChange={handleChange}>
                                            <option value="student">Student</option>
                                            <option value="faculty">Faculty</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Department</Form.Label>
                                        <Form.Select name='department' aria-label="Default select example" defaultValue={user.department}   onChange={handleChange}>
                                            <option value="cse">CSE</option>
                                            <option value="eee">EEE</option>
                                            <option value="bba">BBA</option>
                                            <option value="civil">Civil</option>
                                            <option value="english">English</option>
                                            <option value="llb">LLB</option>
                                            <option value="other">Other</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Password for admin login</Form.Label>
                                        <Form.Control type="text" name='password' defaultValue={user.password} required  onChange={handleChange}/>
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Institute Email</Form.Label>
                                        <Form.Control type="email" name='instituteEmail' defaultValue={user.instituteEmail} required  onChange={handleChange}/>
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Personal Email</Form.Label>
                                        <Form.Control type="email" name='personalEmail' defaultValue={user.personalEmail} required   onChange={handleChange}/>
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Present Address </Form.Label>
                                        <Form.Control type="text" name='presentAdd' defaultValue={user.presentAdd} required  onChange={handleChange}/>
                                    </Form.Group>
                                </Row>
                                {/* <Row>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Profile Photo</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="file"
                                        />
                                    </Form.Group>
                                </Row> */}

                                <Form.Group as={Col} sm='12' md='12' >
                                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >Update Profile</button>
                                </Form.Group>
                                <Form.Group as={Col} sm='12' md='12' >
                                    <Link
                                        className='btn btn-danger w-100 p-2 mt-3'
                                        to={`/userList/${user._id}`}
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

export default UpdateUserProfile;