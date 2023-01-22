import { useEffect, useState, useRef } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FormTitle from '../../Shared/FormTitle';
import './AddBook.css';
import ModalForTen from './ModalForTen';
import Swal from 'sweetalert2';
import './AddBook.css';
function AddBook() {
    const [tenCategory, setTenCategory] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const categoryRef = useRef();
    const [callNo, setCallNo] = useState('');
    const [title, setTitle] = useState('');
    const [isbn, setisbn] = useState('');
    const [author, setauthor] = useState('');
    const [publisher, setPublisher] = useState('');
    const [pageNumber, setPageNumber] = useState('');
    const [edition, setEdition] = useState('');
    const [price, setPrice] = useState('');
    const [publishYear, setPublishYear] = useState('');
    const [accessionNumber, setAccessionNumber] = useState('');
    const [tags, setTags] = useState('');
    const [branch, setBranch] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const category1 = categoryRef.current.value;
        const formData = new FormData()
        formData.append('category', category1)
        formData.append('callNo', callNo)
        formData.append('title', title)
        formData.append('ISBN10', isbn)
        formData.append('authors', author)
        formData.append('publisher', publisher)
        formData.append('edition', edition)
        formData.append('price', price)
        formData.append('publicationYear', publishYear)
        formData.append('pageNumber', pageNumber)
        formData.append('accessionNumber', accessionNumber)
        formData.append('tags', tags)
        formData.append('branch', branch)
        formData.append('location', location)
      

        fetch('http://localhost:5000/addBooks', {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire('Book Added Successfully')
                    window.location.href = "/viewBooks";
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
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
                        <input className='category' required
                            defaultValue={
                                selectedCategory === null ?
                                    "Select the category" : `${selectedCategory.key}. ${selectedCategory.title}`
                            }
                            type="button"
                            onClick={() => setModalShow(true)}
                            ref={categoryRef}
                        />
                        <ModalForTen
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                            setSelectedCategory={setSelectedCategory}
                            setModalShowTen={setModalShow}
                        />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Call No</Form.Label>
                        <input className='category' required onChange={e => setCallNo(e.target.value)} type="text" placeholder="Call Number" />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Title</Form.Label>
                        <input className='category' required onChange={e => setTitle(e.target.value)} type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>ISBN</Form.Label>
                        <input className='category' required onChange={e => setisbn(e.target.value)} type="text" placeholder="ISBN" />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Author</Form.Label>
                        <input className='category' required onChange={e => setauthor(e.target.value)} type="text" placeholder="Author Name" />
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publisher</Form.Label>
                        <input className='category' required onChange={e => setPublisher(e.target.value)} type="text" placeholder="Publisher Name" />
                    </Form.Group>
                </Row>
                <Row className="">

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Edition</Form.Label>
                        <input className='category' required onChange={e => setEdition(e.target.value)} type="text" placeholder="Edition" />
                    </Form.Group>


                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Price</Form.Label>
                        <input className='category' required onChange={e => setPrice(e.target.value)} type="number" placeholder="Price" />
                    </Form.Group>
                </Row>

                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Publish Year</Form.Label>
                        <input className='category' required onChange={e => setPublishYear(e.target.value)} type="number" placeholder="Publish Year" />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Accession Number</Form.Label>
                        <input className='category' required onChange={e => setAccessionNumber(e.target.value)} type="text" placeholder="Accession Number" />
                    </Form.Group>
                </Row>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Tags</Form.Label>
                        <input className='category' required onChange={e => setTags(e.target.value)} type="text" placeholder="Tags" />
                    </Form.Group>

                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Location of Book In Library</Form.Label>
                        <input className='category' required onChange={e => setLocation(e.target.value)} type="text" placeholder="Location of Book In Library" />
                    </Form.Group>
                </Row>
                <Row className="">
                    {/* <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Branch</Form.Label>
                        
                        <input className='category' required onChange={e => setBranch(e.target.value)} type="text" placeholder="Branch" />
                    </Form.Group> */}
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Branch</Form.Label>
                        <Form.Select className='text-light' name='userType' aria-label="Default select example" onChange={e => setBranch(e.target.value)}>
                            <option className='text-dark' value="Baridhara">Baridhara</option>
                            <option className='text-dark' value="Gulshan">Gulshan</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Page Number</Form.Label>
                        <input className='category' required onChange={e => setPageNumber(e.target.value)} type="number" placeholder="Page Number" />
                    </Form.Group>
                </Row>
                {/* <Row className="">                   
                    <Form.Group as={Col} sm='12' md='12'>
                        <Form.Label>Cover Photo</Form.Label>
                        <input className='category'
                            accept='image/*'
                            type="file"
                            name="file"
                            onChange={e => setImage(e.target.files[0])}
                        />
                    </Form.Group>
                </Row> */}
                <Row className="mt-2 d-flex justify-content-between">
                    <Form.Group as={Col} sm='12' md='5' >
                        <a href='/' className='btn btn-danger w-100 p-2 '>CANCEL</a>
                    </Form.Group>
                
                    <Form.Group as={Col} sm='12' md='5' >
                        <button className='btn btn-primary w-100 p-2 ' type='submit'>ADD BOOK</button>
                    </Form.Group>
                </Row>
                {/* <Form.Group as={Col} sm='12' md='12' >
                    <button className='btn btn-primary w-100 p-2 mt-3' type='submit'>ADD BOOK</button>
                </Form.Group>
                <Form.Group as={Col} sm='12' md='12' >
                    <a href='/' className='btn btn-danger w-100 p-2 mt-3'>CANCEL</a>
                </Form.Group> */}
            </Form>
         
        </div >

    );
}

export default AddBook;







