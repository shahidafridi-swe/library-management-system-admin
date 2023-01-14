import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios'; import Swal from 'sweetalert2';
const NoticeBoard = () => {
    const [notice, setNotice] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] = useState({
        notice: notice.notice
    })
    useEffect(() => {
        fetch("http://localhost:5000/noticeboard")
            .then(res => res.json())
            .then(data => setNotice(data[0]))
    })

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .put(
                `http://localhost:5000/updateNotice/${notice._id}`,
                data
            );

        Swal.fire('Updated Successfully')
    };
    return (
        <div className='d-flex justify-content-center align-items-center mb-1'>
            <div className='w-75 border-1 border-primary border-start border-end text-danger  fw-bold'>
                <marquee behavior="scroll" direction="left">
                    {notice.notice}
                </marquee>
            </div>
            <div>
                <Button variant="outline-primary" onClick={handleShow}>
                    Update
                </Button>
                <Modal bg='warning' show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Notice Board</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>New Notice</Form.Label>
                                <input as="textarea" onChange={handleChange} type="text" name='notice' autoFocus rows={3} required placeholder='Please write here the new notice...' />
                            </Form.Group>
                            <Form.Group
                                className="mb-3">
                                <Form.Label>Current Notice</Form.Label>
                                <Form.Control type="text" as="textarea" name='oldNotice' value= {notice.notice} rows={3} disabled />
                            </Form.Group>
                            <Form.Control className='btn btn-primary' type="submit" name='oldNotice' value="Update Notice" />
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default NoticeBoard;