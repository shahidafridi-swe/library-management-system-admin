import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
function AddThesis() {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addThesis', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('Thesis Added Successfully')
                    reset()
                    window.location.href = "/viewTheses";
                }
            })
    };
    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit(onSubmit)} className='p-4 rounded bg-secondary myForm'>
                <FormTitle className='text-light'>add thesis form</FormTitle>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" name='title' required placeholder="Write the title of the thesis..."  {...register("ThesisTitle")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" name='description' placeholder="Description" required  {...register("description")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Instructor</Form.Label>
                        <Form.Control type="text" name='instructor' required placeholder="Insrtuctor Name"  {...register("instructor")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Semester</Form.Label>
                        <Form.Control type="text" name='semester' placeholder="Semester" required {...register("semester")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Branch</Form.Label>
                        <Form.Select className='text-light' name='userType' aria-label="Default select example" {...register("branch")}>
                            <option className='text-dark' value="baridhara">Baridhara</option>
                            <option className='text-dark' value="gulshan">Gulshan</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="text-center mt-2">
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Team Members</Form.Label>
                    </Form.Group>
                </Row>
                <Row className=" mt-3">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Name </Form.Label>
                        <Form.Control type="text" placeholder="Member1 Name" required {...register("mem1name")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Student ID</Form.Label>
                        <Form.Control type="text" placeholder="Member1 ID" required {...register("mem1id")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member2 Name"  {...register("mem2name")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member2 ID"  {...register("mem2id")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member3 Name"  {...register("mem3name")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member3 ID"  {...register("mem3id")} />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member4 Name"  {...register("mem4name")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member4 ID"  {...register("mem4id")} />
                    </Form.Group>
                </Row>
                <Row className="mb-5">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member5 Name"  {...register("mem5name")} />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Control type="text" placeholder="Member5 ID"   {...register("mem5id")} />
                    </Form.Group>
                </Row>
                <Row className="mb-5 d-flex justify-content-between">
                    <Form.Group as={Col} sm='12' md='5' >
                        <a href='/' className='btn btn-danger w-100 p-2 '>CANCEL</a>
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='5' >
                        <button className='btn btn-primary w-100 p-2 ' type='submit'>ADD THESIS</button>
                    </Form.Group>
                </Row>
            </Form>
        </div>
    );
}
export default AddThesis;







