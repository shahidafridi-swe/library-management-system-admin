import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import FormTitle from '../Shared/FormTitle';
import axios from 'axios';
import Swal from 'sweetalert2';
import './issuBook.css';
import { useForm } from 'react-hook-form';
const SingleRequestDetails = () => {
    const { id } = useParams();
    const [singleRequest, setSingleRequest] = useState({});
    // const [accept, setAccept] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/userIssueRequestForABook/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleRequest(data))
    }, [id]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // const formData = { ...data, book: singleRequest };
        fetch('http://localhost:5000/adminRequestForABook', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(singleRequest)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    Swal.fire('Issue Request Accept Successfully')
                    reset()
                }
            })
    };


    const handleDeletBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/denyIssueReq/${id}`)
                Swal.fire(
                    'Deny!',
                    'User returned the book',
                    'success'
                )
                window.location.href = "/issueRequest"
            }
        })
    }
    const handleDeletBtn1 = (id) => {
        if (singleRequest.status === 'accepted') {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/returnUserBook/${id}`)
                    Swal.fire(
                        'Returned!',
                        'User returned the book',
                        'success'
                    )
                }
            })
        }

    }
    return (
        <div className='d-flex justify-content-center'>
            <Form onSubmit={handleSubmit(onSubmit)} style={{ width: '80%' }} className="text-white p-3">

                <Card bg='secondary' >
                    <Card.Body>
                        <FormTitle>Book Request Details Of {singleRequest.FullName}</FormTitle>
                        <Card.Text>
                            <div className='d-flex justify-content-between my-5'>
                                <div className='w-50'>
                                    <Form.Control type="hidden" name='adminType' value="accepted" required {...register("status")} />

                                    <h3><span className='text-dark fw-bold'>User Name:</span> {singleRequest.FullName}
                                        {/* <input type="text" name="" className='bg-secondary border-0 text-light' value={singleRequest.FullName}  {...register("FullName")} /> */}
                                    </h3>
                                    <h3><span className='text-dark fw-bold'>User ID:</span>{singleRequest.InstituteId}</h3>
                                    {/* <h3><span className='text-dark fw-bold'>User ID:</span> <input type="text" name="" className='bg-secondary border-0 text-light' value={singleRequest.InstituteId}  {...register("InstituteId")} />
                                    </h3> */}
                                    <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span>  {singleRequest.userType}</p>
                                    {/* <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span><input type="text" name="" className='bg-secondary border-0 text-light' value={singleRequest.userType} {...register("userType")} />
                                    </p> */}
                                    <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span>{singleRequest.phone}                                     </p>
                                    {/* <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span><input type="text" name="" className='bg-secondary border-0 text-light' value={singleRequest.phone} {...register("phone")} />
                                    </p> */}
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span>{singleRequest.instituteEmail} 
                                    </p>
                                    {/* <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span><input type="text" name="" className='bg-secondary border-0 text-light' value={singleRequest.instituteEmail} {...register("instituteEmail")} />
                                    </p> */}
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span>{singleRequest.presentAddress} 
                                    </p>
                                </div>
                                <div className='w-50'>
                                    <h3><span className='text-dark fw-bold'>Book Title: </span>
                                        {singleRequest?.book?.title} 
                                    </h3>
                                    <h3><span className='text-dark fw-bold'>Author:</span> {singleRequest?.book?.authors}
                                    </h3>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Accession Number:</span>{singleRequest?.book?.accessionNumber} 
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span>{singleRequest?.book?.edition}
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Issue Date:</span>{singleRequest.issueDate}
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Return Email:</span> {singleRequest.returnDate} 
                                    </p>
                                </div>
                            </div>
                            {/* <div className='d-flex justify-content-between my-5'>
                                <div className='w-50'>
                                    <h3><span className='text-dark fw-bold'>User Name:</span>
                                        <input type="text" onChange={setValue} name="" className='bg-secondary border-0 text-light' value={singleRequest.FullName} />
                                    </h3>
                                    <h3><span className='text-dark fw-bold'>User ID:</span> <input type="text" onChange={e => setInstituteId(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.InstituteId} />
                                    </h3>
                                    <p className='m-0 fs-4 '><span className='text-dark fw-bold'>User Type:</span><input type="text" onChange={e => setuserType(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.userType} />
                                    </p>
                                    <p className='m-0 fs-4 '><span className='text-dark fw-bold'>Phone:</span><input type="text" onChange={e => setphone(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.phone} />
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Institution Email:</span><input type="text" onChange={e => setinstituteEmail(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.instituteEmail} />
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Address:</span><input type="text" onChange={e => setpresentAddress(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.presentAddress} />
                                    </p>
                                </div>
                                <div className='w-50'>
                                    <h3><span className='text-dark fw-bold'>Book Title: </span>
                                        <input type="text" name="" onChange={e => setTitle(e.target.value)} className='bg-secondary border-0 text-light input_height' value={singleRequest.title} />
                                    </h3>
                                    <h3><span className='text-dark fw-bold'>Author:</span>                                    <input type="text" onChange={e => setauthor(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.author} />
                                    </h3>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Accession Number:</span><input type="text" onChange={e => setaccessionNumber(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.accessionNumber} />
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Edition:</span><input type="text" onChange={e => setedition(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.edition} />
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Issue Date:</span><input type="text" onChange={e => setissueDate(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.issueDate} />
                                    </p>
                                    <p className='m-0 fs-4'><span className='text-dark fw-bold'>Return Email:</span> <input type="text" onChange={e => setreturnDate(e.target.value)} name="" className='bg-secondary border-0 text-light' value={singleRequest.returnDate} />
                                    </p>
                                </div>
                            </div> */}
                        </Card.Text>
                        <div className='d-flex justify-content-between'>
                            {/* <Button variant="danger" type='submit' onClick={() => updateStatus(singleRequest._id)}>Accept Request</Button> */}
                            <Button variant="danger" onClick={() => handleDeletBtn1(singleRequest._id)} type='submit'>Accept Request</Button>
                            <Button variant="danger" onClick={() => handleDeletBtn(singleRequest._id)}>Deny Request</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Form>


        </div>
    );
};

export default SingleRequestDetails;