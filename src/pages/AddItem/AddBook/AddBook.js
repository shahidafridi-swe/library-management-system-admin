import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';
import './AddBook.css';
import Button from 'react-bootstrap/Button';
import ModalForTen from './ModalForTen';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'

function AddBook() {
    const [tenCategory, setTenCategory] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addBooks', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('Book Added Successfully')
                    reset()
                }
            })
    };
    useEffect(() => {
        fetch("ten.json")
            .then(res => res.json())
            .then(data => setTenCategory(data))
    }, []);


    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit(onSubmit)} className='p-4 rounded bg-secondary myForm'>

                <FormTitle>Add book forms</FormTitle>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Category</Form.Label>
                        <br />
                        <>
                            <Button className='border p-2' as={Col} sm='12' md='12' variant="secondary" onClick={() => setModalShow(true)}>
                                {
                                    selectedCategory === null ?
                                        "Select the category" : `${selectedCategory.key}. ${selectedCategory.title}`
                                }
                            </Button>

                            <ModalForTen
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                                setSelectedCategory={setSelectedCategory}
                                setModalShowTen={setModalShow}
                            />
                        </>
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Call No</Form.Label>
                        <Form.Control type="text" placeholder="Call Number" required {...register("callNo")} />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title"  required {...register("title")}/>
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ISBN10</Form.Label>
                        <Form.Control type="text" placeholder="ISBN10" required {...register("ISBN10")}/>
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author Name" required {...register("authors")}/>
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ISBN13</Form.Label>
                        <Form.Control type="text" placeholder="ISBN13"required {...register("ISBN13")}/>
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control type="text" placeholder="Publisher Name"required  {...register("publisher")}/>
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price"required {...register("price")}/>
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publish Year</Form.Label>
                        <Form.Control type="number" placeholder="Publish Year" required {...register("publicationYear")}/>
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Accession Number</Form.Label>
                        <Form.Control type="text" placeholder="Accession Number" required {...register("accessionNo")}/>
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Edition</Form.Label>
                        <Form.Control type="text" placeholder="Edition" required {...register("edition")}/>
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="text" placeholder="Tags" required {...register("tags")}/>
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Branch</Form.Label>
                        <Form.Control type="text" placeholder="Branch" required {...register("library")}/>
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Cover Photo</Form.Label>
                        <Form.Control
                            type="file"
                            name="file"
                        />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} sm='12' md='12' >
                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit' >ADD BOOK</button>
                </Form.Group>
            </Form>
        </div>

    );
}

export default AddBook;







