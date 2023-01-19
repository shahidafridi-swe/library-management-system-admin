import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalForThousand from './ModalForThousand';

const ModalForHundred = ({setModalShowTen,setModalShowHundred,setSelectedCategory,selectedKey,...props}) => {
    const [modalShow, setModalShow] = useState(false);
    const [selectedKeyFromHundred, setSelectedKeyFromHundred] = useState(null);
    

    const [hundredCategory, setHundredCategory] = useState([])
    useEffect(() => {
        fetch("hundred.json")
            .then(res => res.json())
            .then(data => setHundredCategory(data))
    }, []);

    const start = selectedKey*10;
    const end = ((selectedKey+1)*10);
    const newList = hundredCategory.slice(start,end) 

    const closeModal = () =>{
      setModalShowTen(false);
      setModalShowHundred(false);
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
            Hundred Division Category
          </Modal.Title>
        </Modal.Header>
        

        <Modal.Body>
        {
                    newList.map(singleOfHundred => {
                        return (
                            <div key={singleOfHundred}>                                                
                            <Button className='mb-2 w-100' variant="light" onClick={() => {
                                setSelectedKeyFromHundred(singleOfHundred.key)
                                setModalShow(true)
                            }}>
                                {singleOfHundred.key}. {singleOfHundred.title}
                            </Button>
                            <ModalForThousand
                                show={modalShow}
                                setSelectedCategory={setSelectedCategory}
                                onHide={() => setModalShow(false)}
                                setModalShowTen={setModalShowTen}
                                setModalShowHundred={setModalShowHundred}
                                setModalShowThousand={setModalShow}
                                selectedKeyFromHundred={parseInt(selectedKeyFromHundred)/10}
                            />
                                <br />
                            </div>
                        )
                    })
                }
        </Modal.Body>

        
        <Modal.Footer className='d-flex justify-content-between'>
                <Button className='w-25'  onClick={props.onHide}>Back</Button>
                <Button className='w-25' variant='danger' onClick={closeModal}>Close</Button>
            </Modal.Footer>
      </Modal>
    );
};

export default ModalForHundred;