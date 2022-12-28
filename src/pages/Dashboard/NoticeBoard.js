
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const NoticeBoard = () => {
    const [notice, setNotice] = useState("Welcome to Library Of Presidency University");

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = (event) => {
        event.preventDefault();
        const newNotice = event.target.newNotice.value;
        setNotice(newNotice);
        setShow(false);
    };


    return (
        <div className='d-flex justify-content-center align-items-center mb-1'>
            <div className='w-75 border-1 border-primary border-start border-end text-danger  fw-bold'>
                <marquee behavior="scroll" direction="left">{notice}</marquee>

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
                        <Form onSubmit={handleUpdate}>
                            <Form.Group className="mb-3">
                                <Form.Label>New Notice</Form.Label>

                                <Form.Control  as="textarea" type="text" name='newNotice' autoFocus rows={3} required placeholder='Please write here the new notice...' />

                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                
                            >
                                <Form.Label>Current Notice</Form.Label>
                                <Form.Control type="text" as="textarea" name='oldNotice' value={notice} rows={3}  disabled/>

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