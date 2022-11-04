import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';


function AddJournal() {



    const handleSubmit = event => {
        event.preventDefault();

        event.target.reset();
    };



    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='p-4 rounded bg-secondary myForm'>

                <FormTitle>Add journal form</FormTitle>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Category</Form.Label>
                        <Form.Control type="text" placeholder="Category" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Call No</Form.Label>
                        <Form.Control type="text" placeholder="Call Number" required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Title" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" placeholder="ISBN" />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Author</Form.Label>
                        <Form.Control type="text" placeholder="Author Name" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ISSN</Form.Label>
                        <Form.Control type="text" placeholder="ISSN" />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control type="text" placeholder="Publisher Name" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="number" placeholder="Price" />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publish Year</Form.Label>
                        <Form.Control type="number" placeholder="Publish Year" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Accession Number</Form.Label>
                        <Form.Control type="text" placeholder="Accession Number" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Edition</Form.Label>
                        <Form.Control type="text" placeholder="Edition" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Tags</Form.Label>
                        <Form.Control type="text" placeholder="Tags" />
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
                    <button className='btn btn-success w-100 p-2 mt-3' type='submit' >ADD JOURNAL</button>

                </Form.Group>



            </Form>
        </div>

    );
}

export default AddJournal;







