import { useEffect, useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';
import './AddBook.css';
import ModalForTen from './ModalForTen';
import Swal from 'sweetalert2';
import './AddBook.css';
function AddBook1() {
    const [tenCategory, setTenCategory] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryRef = useRef();
    const [books, setBooks] = useState([]);
    const [image, setImage] = useState(null);
    const callNoRef = useRef();
    const titleRef = useRef();
    const ISBNRef = useRef();
    const authorRef = useRef();
    const publisherRef = useRef();
    const priceRef = useRef();
    const publishYearRef = useRef();
    const accessionNoRef = useRef();
    const editionRef = useRef();
    const tagsRef = useRef();
    const branchRef = useRef();
    const descriptionRef = useRef();

    const handleSubmit = (e) => {
        const category = categoryRef.current.value;
        const callNo = callNoRef.current.value;
        const title = titleRef.current.value;
        const ISBN = ISBNRef.current.value;
        const author = authorRef.current.value;
        const publisher = publisherRef.current.value;
        const price = priceRef.current.value;
        const publishYear = publishYearRef.current.value;
        const accessionNo = accessionNoRef.current.value;
        const edition = editionRef.current.value;
        const tags = tagsRef.current.value;
        const branch = branchRef.current.value;
        const description = descriptionRef.current.value;

        const newbook = { category, callNo, title, ISBN, author, publisher, price, publishYear, accessionNo, edition, tags, branch, description }
        if (!image) {
            return
        }
      
        fetch('http://localhost:5000/addBooks', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newbook)
        })
            .then(res => res.json())
            .then(data => {
                const addedBooks = data;
                const newBooks = [...books, addedBooks];
                setBooks(newBooks);
                Swal.fire('Book Added Successfully')
                categoryRef.current.value = '';
                callNoRef.current.value = '';
                titleRef.current.value = '';
                ISBNRef.current.value = '';
                authorRef.current.value = '';
                publisherRef.current.value = '';
                priceRef.current.value = '';
                publishYearRef.current.value = '';
                accessionNoRef.current.value = '';
                editionRef.current.value = '';
                tagsRef.current.value = '';
                branchRef.current.value = '';
                descriptionRef.current.value = '';
            })
        e.preventDefault();
    }

    useEffect(() => {
        fetch("ten.json")
            .then(res => res.json())
            .then(data => setTenCategory(data))
    }, []);




    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit} className='p-4 rounded bg-secondary myForm'>

                <FormTitle>Add book forms</FormTitle>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Category</Form.Label>
                        <br />
                        <input className='category' defaultValue={
                            selectedCategory === null ?
                                "Select the category" : `${selectedCategory.key}. ${selectedCategory.title}`
                        } type="button" onClick={() => setModalShow(true)} ref={categoryRef} />
                        <ModalForTen
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            setSelectedCategory={setSelectedCategory}
                            setModalShowTen={setModalShow}
                        />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Call No</Form.Label>
                        <Form.Control ref={callNoRef} type="text" placeholder="Call Number" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Title</Form.Label>
                        <Form.Control ref={titleRef} type="text" placeholder="Title" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control ref={ISBNRef} type="text" placeholder="ISBN10" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Author</Form.Label>
                        <Form.Control ref={authorRef} type="text" placeholder="Author Name" required />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publisher</Form.Label>
                        <Form.Control ref={publisherRef} type="text" placeholder="Publisher Name" required />
                    </Form.Group>
                </Row>
                <Row className="">

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Edition</Form.Label>
                        <Form.Control ref={editionRef} type="text" placeholder="Edition" required />
                    </Form.Group>


                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Price</Form.Label>
                        <Form.Control ref={priceRef} type="number" placeholder="Price" required />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publish Year</Form.Label>
                        <Form.Control ref={publishYearRef} type="number" placeholder="Publish Year" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Accession Number</Form.Label>
                        <Form.Control ref={accessionNoRef} type="text" placeholder="Accession Number" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Tags</Form.Label>
                        <Form.Control ref={tagsRef} type="text" placeholder="Tags" required />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descriptionRef} type="text" placeholder="Description" required />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Branch</Form.Label>
                        <Form.Control ref={branchRef} type="text" placeholder="Branch" required />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Cover Photo</Form.Label>
                        <input
                            accept='image/*'
                            type="file"
                            name="file"
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} sm='12' md='12' >
                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit'>ADD BOOK</button>
                </Form.Group>
            </Form>
        </div >

    );
}

export default AddBook1;







