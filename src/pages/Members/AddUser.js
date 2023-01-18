import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../Shared/FormTitle';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
const AddUser = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addUser', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('User Added Successfully')

                    reset()
                }
            })
    };
    return (
        <div className='d-flex w-100 justify-content-center'>
            <Form onSubmit={handleSubmit(onSubmit)} className='p-4 w-100 rounded bg-secondary '>
                <FormTitle>Add a User</FormTitle>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Full Name" required {...register("fullName")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Institute ID</Form.Label>
                        <Form.Control type="text" name='instituteId' placeholder="Institute ID" required {...register("instituteId")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type="text" name='phone' placeholder="Phone Number" required {...register("phoneNumber")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Designation</Form.Label>
                        <Form.Control type="text" name='designation' placeholder="Designation" required {...register("userType")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Password for admin login</Form.Label>
                        <Form.Control type="text" name='password' placeholder="Password" required {...register("password")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Institute Email</Form.Label>
                        <Form.Control type="email" name='email1' placeholder="Institute Email Address" required {...register("instituteEmail")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Personal Email</Form.Label>
                        <Form.Control type="email" name='email2' placeholder="Personal Email Address" required {...register("personalEmail")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Present Address </Form.Label>
                        <Form.Control type="text" name='address' placeholder="Present Address" required {...register("presentAdd")} />
                    </Form.Group>
                </Row>
                <Row className="d-flex justify-content-between">
                    <Form.Group as={Col} sm='12' md='5' >
                        <a href='/' className='btn btn-primary w-100 p-2 mt-3'>CANCEL</a>
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='5' >
                        <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >ADD ADMIN</button>
                    </Form.Group>
                </Row>

            </Form>
        </div>

    );
};

export default AddUser;