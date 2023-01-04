import { useEffect, useState, useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Imageupload = () => {
    // const [image, setImage] =useState("");

    const [name, setname] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    // console.log(email)


    const handlesubmit = (e) => {
        e.preventDefault()

        if (!image) {
            return
        }
        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('image', image)

        fetch('http://localhost:5000/addImage', {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log('book added successfully');

                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });



    }


    return (
        <div>
            <Form onSubmit={handlesubmit}>

                <Form.Group as={Col} sm='12' md='6'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={e => setname(e.target.value)} type="text" placeholder="name" />
                </Form.Group>
                <Row className="">
                    <Form.Group as={Col} sm='12' md='6'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control onChange={e => setEmail(e.target.value)} type="text" placeholder="email" />
                    </Form.Group>
                </Row>
                <input
                    accept='image/*'
                    type="file"
                    name="file"
                    onChange={e => setImage(e.target.files[0])}
                />


                <button type="submit"> Add image</button>
            </Form>
        </div>
    );
};

export default Imageupload;