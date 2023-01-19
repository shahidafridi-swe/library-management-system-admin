import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForHundred from './ModalForHundred';

const ModalForTen = ({ setModalShowTen, setSelectedCategory, ...props }) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedKey, setSelectedKey] = useState(null);

    const [tenCategory, setTenCategory] = useState([])
    useEffect(() => {
        fetch("ten.json")
            .then(res => res.json())
            .then(data => setTenCategory(data))
    }, []);



    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Ten Category
                </Modal.Title>
            </Modal.Header>


            <Modal.Body>
                {
                    tenCategory.map(singleOfTen => {

                        return (
                            <div key={singleOfTen.key}>
                                <Button className='mb-2 w-100' variant="light" onClick={() => {
                                    setModalShow(true)
                                    setSelectedKey(singleOfTen.key)
                                }}>
                                    {singleOfTen.key}. {singleOfTen.title}
                                </Button>
                                <ModalForHundred
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                    setSelectedCategory={setSelectedCategory}
                                    setModalShowTen={setModalShowTen}
                                    setModalShowHundred={setModalShow}
                                    selectedKey={parseInt(selectedKey) / 100}
                                />

                                <br />
                            </div>
                        )
                    })
                }
            </Modal.Body>


            <Modal.Footer className='d-flex justify-content-between'>
                <Button className='w-25'  onClick={props.onHide}>Back</Button>
                <Button className='w-25' variant='danger' onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalForTen;