import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../Shared/FormTitle';
import { useState } from 'react';


const AddUser = () => {

    const handleSubmit = event => {
        event.preventDefault();

        const newUserData = {
            name : event.target.name.value,
            instituteId : event.target.instituteId.value,
            department : event.target.department.value,
            userType : event.target.userType.value,
            phone : event.target.phone.value,
            email1 : event.target.email1.value,
            email2 : event.target.email2.value,
            address : event.target.address.value,
            password : event.target.password.value,
            
        }
        console.log(newUserData)
        event.target.reset();
    };

    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='p-4 rounded bg-secondary myForm'>
                <FormTitle>Add a new User</FormTitle>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Full Name" required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Institute ID</Form.Label>
                        <Form.Control type="text" name='instituteId' placeholder="Institute ID" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Department</Form.Label>
                        <Form.Select name='department' aria-label="Default select example">
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

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>User Type</Form.Label>
                        <Form.Select name='userType' aria-label="Default select example">
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Phone Number" required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Institute Email</Form.Label>
                        <Form.Control type="email" name='email1' placeholder="Institute Email Address" required />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Personal Email</Form.Label>
                        <Form.Control type="email" name='email2' placeholder="Personal Email Address" required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Present Address </Form.Label>
                        <Form.Control type="text" name='address' placeholder="Present Address" required />
                    </Form.Group>
                </Row>
                <Row className="">
                   
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Password for User Login</Form.Label>
                        <Form.Control type="text" name='password' placeholder="Password for User Login" required />
                    </Form.Group>
                </Row>

                <Form.Group as={Col} sm='12' md='12' >
                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >ADD USER</button>
                </Form.Group>



            </Form>
        </div>

    ); return (
        <div>

        </div>
    );
};

export default AddUser;