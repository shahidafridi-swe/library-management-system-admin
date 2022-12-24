import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function AddThesis() {   
   

    const handleSubmit = event => {
        event.preventDefault();
        event.target.reset();
    };

    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='p-4 rounded bg-secondary myForm'>
                <FormTitle>add thesis form</FormTitle>
                <Row className="">


                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' placeholder="Write the title of the thesis..." required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="Description" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Instructor</Form.Label>
                        <Form.Control type="text" name='instructor' placeholder="Insrtuctor Name" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Semester</Form.Label>
                        <Form.Control type="text" name='semester' placeholder="Semester" required />
                    </Form.Group>
                </Row>
                <Row className=" text-center mt-5">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Team Members</Form.Label>
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" placeholder="Member Name" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" placeholder="Member ID" required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member Name"  />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member ID"  />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member Name"  />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member ID"  />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member Name"  />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member ID"  />
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member Name"  />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member ID"  />
                    </Form.Group>
                </Row>


               
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Branch</Form.Label>
                        <Form.Control type="text" placeholder="Branch" />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Cover Photo</Form.Label>
                        <Form.Control
                            type="file"
                            required
                            name="file"
                        />
                    </Form.Group>
                </Row>

                <Form.Group as={Col} sm='12' md='12' >
                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >ADD THESIS</button>

                </Form.Group>



            </Form>
        </div>

    );
}

export default AddThesis;







