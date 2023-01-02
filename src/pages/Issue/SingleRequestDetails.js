import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import FormTitle from '../Shared/FormTitle';
import axios from 'axios';
import Swal from 'sweetalert2'
const SingleRequestDetails = () => {
    const { id } = useParams();
    const [singleRequest, setSingleRequest] = useState({});
    const [accept, setAccept] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/issueRequestForABook/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleRequest(data))
    }, [id]);
    // const handleRequest = (e) => {
    //     // const user = { email };
    //     fetch("http://localhost:5000/issueRequestForABook/requestStatus", {
    //       method: "put",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(),
    //     //   body: JSON.stringify(user),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data.modifiedCount) {
    //         //   setEmail("");
    //         //   setSuccess(true);
    //         }
    //       });
    //     e.preventDefault();
    //   };
    const updateStatus = (id, uid) => {
        axios.put(`http://localhost:5000/issueRequestForABook/${id}`)
            .then(() => {
            }).catch((error) => {
                console.log(error);
            })
        const findItem = accept.find(book => book._id === id);
        if (findItem) {
            findItem.status = 'acceptRequest';
            Swal.fire('Request Accepted Successfully')    
            const reamingData = accept.filter(book => book._id !== id);
            setAccept([findItem, ...reamingData])
        }
    }
    return (
        <div className='d-flex justify-content-center'>

            <Card bg='secondary' style={{ width: '80%' }} className="text-white p-3">
                <Card.Body>
                    <FormTitle>Book Request Details Of Name</FormTitle>
                    <Card.Text>
                        <div className='d-flex justify-content-between my-5' >
                            <div className='w-50'>
                                <h3><span className='text-dark fw-bold'>User Name:</span> {singleRequest.FullName}</h3>
                                <h3><span className='text-dark fw-bold'>User ID:</span> {singleRequest.InstituteId}</h3>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span> {singleRequest.userType}</p>
                                <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span> {singleRequest.phone}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span> {singleRequest.instituteEmail}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span> {singleRequest.presentAddress}</p>
                            </div>
                            <div  className='w-50'>
                                <h3><span className='text-dark fw-bold'>Book Title: </span> {singleRequest.title}</h3>
                                <h3><span className='text-dark fw-bold'>Author:</span> {singleRequest.author}</h3>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Accession Number:</span> {singleRequest.accessionNumber}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span> {singleRequest.edition}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Issue Date:</span> {singleRequest.issueDate}</p>
                                <p className='m-0 fs-4'><span className='text-dark fw-bold'>Return Email:</span> {singleRequest.returnDate}</p>
                            </div>
                        </div>
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                      
                        <Button variant="danger" type='submit' onClick={() => updateStatus(singleRequest._id)}>Accept Request</Button>
                        <Button variant="danger">Deny Request</Button>
                    </div>
                </Card.Body>
            </Card>


        </div>
    );
};

export default SingleRequestDetails;