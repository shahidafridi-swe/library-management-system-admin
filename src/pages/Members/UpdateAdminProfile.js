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
import axios from "axios";

const UpdateAdminProfile = (props) => {
    const { FullName, InstituteId, PhoneNo, Designation, instituteEmail, password, presentAddress } = props.adminList;

    const { id } = useParams();
    const [isAdding, setIsAdding] = useState(false);
    const [admin, setAdmin] = useState({});
    const[changeValue,setChangeValue]= useState({
        FullName:""
    })
   
    useEffect(() => {
        const url = `http://localhost:5000/adminList/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setAdmin(data))
    }, [id]);

const handleOnChange=(e)=>{
  
setChangeValue(
    {...changeValue,
    [e.target.name]:e.target.value})

}


    // const { register, handleSubmit, setValue, reset } = useForm();
    // const onSubmit = data => {
    //     console.log('update profile')
    // };

    // set all field default value using react-hook-form setValue function
    // setValue("FullName", FullName);
    // setValue("InstituteId", InstituteId);
    // setValue("PhoneNo", PhoneNo);
    // setValue("Designation", Designation);
    // setValue("password", password);
    // setValue("instituteEmail", instituteEmail);
    // setValue("presentAddress", presentAddress);

  // handle onSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `http://localhost:5000/updateProfile/${id}`,
        changeValue
      )
      .then((res) => {
        console.log(res.data);
        if (res.data?.modifiedCount > 0) {
          // reset form
        //   reset();
          Swal(`Successful`, "product Successfully Updated", "success");
        } else {
          Swal(`Failed`, "Something went wrong, Please try again ", "error");
        }
      })
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsAdding(false);
      });
  };

    return (
        <div className='d-flex justify-content-center'>
            <Card bg='secondary' style={{ width: '60%' }} className="text-white py-3">
                <Card.Img variant="top" src={adminImg} className="w-25 mx-auto rounded" />
                <Card.Body>
                    <Card.Text>
                        <div className='d-flex justify-content-center w-100'>
                            <Form onSubmit={handleSubmit} className='w-75 rounded bg-secondary myForm'>
                                <FormTitle>Information of NAME/ID</FormTitle>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control 
                                        onChange={handleOnChange} 
                                        defaultValue={FullName} 
                                        type="text" 
                                        name='FullName'  />
                                    </Form.Group>
                                </Row>
                                {/* <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Institute ID</Form.Label>
                                        <Form.Control type="text" name='instituteId'  required {...register("InstituteId")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type="text" name='phone' required {...register("PhoneNo")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='6'>
                                        <Form.Label>User Type</Form.Label>
                                        <Form.Select name='userType' aria-label="Default select example" {...register("userType")}>
                                            <option value="student">Student</option>
                                            <option value="faculty">Faculty</option>
                                        </Form.Select>
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
                                <Row>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Password for admin login</Form.Label>
                                        <Form.Control type="text" name='password' required {...register("password")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Institute Email</Form.Label>
                                        <Form.Control type="email" name='email1'  required {...register("instituteEmail")} />
                                    </Form.Group>
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Personal Email</Form.Label>
                                        <Form.Control type="email" name='email2'  required {...register("personalEmail")} />
                                    </Form.Group>
                                </Row>
                                <Row className="">
                                    <Form.Group as={Col} sm='12' md='12'>
                                        <Form.Label>Present Address </Form.Label>
                                        <Form.Control type="text" name='address'  required {...register("presentAddress")} />
                                    </Form.Group>
                                </Row> */}
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
                                        to={`/userList`}
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