import React, { Component } from "react";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2';
import FormTitle from "../Shared/FormTitle";
export default class RegAUser extends Component {
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
                Swal.fire('User Create Successfully')

                window.location.href = "/userList";
            });
    }
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Form onSubmit={this.handleSubmit} className='p-4 w-50 bg-secondary rounded myform'>
                    <FormTitle>Add a User</FormTitle>
                    <Row className="mb-3">
                        <Form.Group as={Col} sm='12' md='6' >
                            <Form.Label>Full Name<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control className="reguserInput" type="text" name='name' placeholder="Full Name" onChange={(e) => this.setState({ fullName: e.target.value })} required />
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Institute ID<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control type="text" name='instituteId' placeholder="Institute ID" onChange={(e) => this.setState({ instituteId: e.target.value })} required />
                        </Form.Group>
                    </Row>
                    <Row className="">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Department</Form.Label> <br />
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
                            <Form.Label>User Type</Form.Label> <br />
                            <Form.Select name='userType' aria-label="Default select example" onChange={(e) => this.setState({ userType: e.target.value })}>
                                <option value="student">All</option>
                                <option value="student">Student</option>
                                <option value="faculty">Faculty</option>
                            </Form.Select>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Institute Email<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control type="email" name='email1' placeholder="Institute Email Address" onChange={(e) => this.setState({ instituteEmail: e.target.value })} required />
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Password for User Login<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control type="text" name='password' placeholder="Password for User Login" onChange={(e) => this.setState({ password: e.target.value })} required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Present Address<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control type="text" name='address' placeholder="Present Address" onChange={(e) => this.setState({ presentAdd: e.target.value })} required />
                        </Form.Group>

                        <Form.Group as={Col} sm='12' md='6'>
                            <Form.Label>Personal Email<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control type="email" name='email2' placeholder="Personal Email Address" onChange={(e) => this.setState({ personalEmail: e.target.value })} required />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} sm='12' md='12'>
                            <Form.Label>Phone Number<span class="badge text-dark">*</span></Form.Label> <br />
                            <Form.Control type="text" name='phone' placeholder="Phone Number" onChange={(e) => this.setState({ phoneNumber: e.target.value })} required />
                        </Form.Group>
                    </Row>
                    <Row className="d-flex justify-content-between">
                        <Form.Group as={Col} sm='12' md='5' >
                            <a href='/' className='btn btn-danger w-100 p-2 mt-3'>CANCEL</a>
                        </Form.Group>
                        <Form.Group as={Col} sm='12' md='5' >
                            <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >ADD USER</button>
                        </Form.Group>
                    </Row>
                   
                </Form>
            </div>
        );
    }
}
