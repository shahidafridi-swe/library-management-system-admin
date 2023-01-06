import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../Shared/FormTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2'
import React, { Component } from "react";

export default class AddUser extends Component {
    // const { register, handleSubmit, reset } = useForm();
    // const onSubmit = data => {
    //     fetch('http://localhost:5000/addUser', {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             if (result.acknowledged) {
    //                 Swal.fire('User Added Successfully')

    //                 reset()
    //             }
    //         })
    // };
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            instituteId: "",
            department: "",
            userType: "",
            phoneNumber: "",
            instituteEmail: "",
            personalEmail: "",
            presentAdd: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        const { fullName, instituteId, department, userType, phoneNumber, instituteEmail, personalEmail, presentAdd, password } = this.state;
        console.log(fullName, instituteId, department, userType, phoneNumber, instituteEmail, personalEmail, presentAdd, password);
        fetch("http://localhost:5000/register", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                fullName,
                instituteId,
                department,
                userType,
                phoneNumber,
                instituteEmail,
                personalEmail,
                presentAdd,
                password
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userRegister");
            });
    }
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Form onSubmit={this.handleSubmit} className='p-4 rounded bg-secondary myForm'>
                    <FormTitle>Add a new User</FormTitle>
                    <Row className="">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Full Name</Form.Label><br />
                            <input type="text" name='name' placeholder="Full Name" onChange={(e) => this.setState({ fullName: e.target.value })} />
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Institute ID</Form.Label><br />
                            <input type="text" name='instituteId' placeholder="Institute ID" onChange={(e) => this.setState({ instituteId: e.target.value })} />
                        </Form.Group>
                    </Row>
                    <Row className="">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Department</Form.Label><br />
                            <Form.Select name='department' aria-label="Default select example"
                                onChange={(e) => this.setState({ department: e.target.value })}>
                                <option value="cse">All</option>
                                <option value="cse">CSE</option>
                                <option value="eee">EEE</option>
                                <option value="bba">BBA</option>
                                <option value="civil">Civil</option>
                                <option value="english">English</option>
                                <option value="llb">LLB</option>
                                <option value="other">Other</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>User Type</Form.Label><br />
                            <Form.Select name='userType' aria-label="Default select example" onChange={(e) => this.setState({ userType: e.target.value })}>
                                <option value="student">All</option>
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>
                    <Row className="">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Institute Email</Form.Label><br />
                            <input type="email" name='email1' placeholder="Institute Email Address" onChange={(e) => this.setState({ instituteEmail: e.target.value })} />
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Password for User Login</Form.Label> <br />
                            <Form.Control type="text" name='password' placeholder="Password for User Login" required />
                        </Form.Group>
                    </Row>
                    <Row className="">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Personal Email</Form.Label><br />
                            <input type="text" name='address' placeholder="Present Address" onChange={(e) => this.setState({ presentAdd: e.target.value })} />
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Phone Number</Form.Label><br />
                            <input type="text" name='phone' placeholder="Phone Number" onChange={(e) => this.setState({ phoneNumber: e.target.value })} />
                        </Form.Group>
                    </Row>
                    <Row className="">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Present Address </Form.Label> <br />
                            <input type="text" name='password' placeholder="Password for User Login" onChange={(e) => this.setState({ password: e.target.value })} />
                        </Form.Group>
                    </Row>
                    <Form.Group as={Col} sm='12' md='12' >
                        <button className='btn btn-primary w-100 p-2 mt-3' type='submit'>ADD USER</button>
                    </Form.Group>
                </Form>
            </div>

        );
    }
}