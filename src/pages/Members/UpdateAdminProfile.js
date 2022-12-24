import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import adminImg from '../../image/user.png';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../Shared/FormTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'

const UpdateAdminProfile = () => {
    const { id } = useParams();
    const [admin, setAdmin] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/adminList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [id]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        
    };
    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white py-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit(onSubmit)} className='w-75 rounded bg-secondary myForm'>
                                <FormTitle>Information of NAME/ID</FormTitle>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control type="text" name='name' value={admin.FullName} required {...register("FullName")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute ID</Form.Label>
                                        <Form.Control type="text" name='instituteId' value={admin.InstituteId} required {...register("InstituteId")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name='phone' value={admin.PhoneNo} required {...register("PhoneNo")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Designation</Form.Label>
                                        <Form.Control type="text" name='designation' value={admin.Designation} required {...register("Designation")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Password for admin login</Form.Label>
                                        <Form.Control type="text" name='password' value={admin.password} required {...register("password")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Institute Email</Form.Label>
                                        <Form.Control type="email" name='email1' value={admin.instituteEmail} required {...register("instituteEmail")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Personal Email</Form.Label>
                                        <Form.Control type="email" name='email2' value={admin.personalEmail} required {...register("personalEmail")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Present Address </Form.Label>
                                        <Form.Control type="text" name='address' value={admin.presentAddress} required {...register("presentAddress")} />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Profile Photo</Form.Label>
                                        <Form.Control
                                            type="file"
                                            name="file"
                                        />
                                    </Form.Group>
                                </Row>

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