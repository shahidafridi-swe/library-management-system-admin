import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const ModalForThousand = ({ setModalShowTen, setModalShowHundred, setModalShowThousand, setSelectedCategory, selectedKeyFromHundred, ...props }) => {

    const [thousandCategory, setThousandCategory] = useState([])
    useEffect(() => {
        fetch("thousand.json")
            .then(res => res.json())
            .then(data => setThousandCategory(data))
    }, []);

    const start = parseInt(selectedKeyFromHundred) * 10;
    const end = ((parseInt(selectedKeyFromHundred) + 1) * 10);
    const newList = thousandCategory.slice(start, end)

    const selectHandler = (val) => {
        setSelectedCategory(val);
        // model close
        closeModal();
        // setModalShowTen(false);
        // setModalShowHundred(false);
        // setModalShowThousand(false);
    }
    const closeModal = () =>{
        setModalShowTen(false);
        setModalShowHundred(false);
        setModalShowThousand(false);
      }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Thousand Division Category
                </Modal.Title>
            </Modal.Header>


            <Modal.Body>
                {
                    newList.map(singleOfTen => {
                        return (
                            <>
                                <Button className='mb-2 w-100 btn-light' onClick={() => selectHandler(singleOfTen)}> {singleOfTen.key}. {singleOfTen.title}</Button>
                                <br />
                            </>
                        )
                    })
                }
            </Modal.Body>


            <Modal.Footer className='d-flex justify-content-between'>
                <Button className='w-25' onClick={props.onHide}>Back</Button>
                <Button className='w-25' variant='danger'  onClick={closeModal}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
};

export default ModalForThousand;