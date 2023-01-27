import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const PendingToReturnList = () => {
    const titleList = ["User Name", "User Id", "User Type", "Book Title", "Author", "Edition", "Accession", "Issue Date", "Return Date", "Actions"];
    const [pendingList, setPendingList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/adminissuedBooks')
            .then(res => res.json())
            .then(data => setPendingList(data))
    }, []);

    // const current = new Date();
    console.log(pendingList)
    const current = new Date();
    const date = current.getTime();
    // const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    // const date = current.getTime();
return (
        <section className='px-5 mb-2'>
            <Card bg='warning'>
                <Card.Header as="h5">Pending Books: {pendingList.length}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div className="tableFixHead d-flex justify-content-center "
                            style={{
                                "height": "400px",
                                "overflow-y": "auto"
                            }} >
                            <Table responsive='sm' striped bordered hover variant="success" className='myTable ' >
                                <thead className='tableHeader text-uppercase '>
                                    <tr className='justify-content-center align-items-center'>
                                        {titleList.map((title) => (
                                            <th className='uppercase align-items-center' key={title}>{title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        pendingList.map((singlePending) => {
                                            const rt = new Date(singlePending.returnDate);

                                            console.log(date, rt.getTime(), date >= rt.getTime())
                                            if (date <= rt.getTime()) {
                                              
                                            return (
                                                <tr>
                                                    <td>{singlePending.FullName}</td>
                                                    <td>{singlePending.InstituteId}</td>
                                                    <td>{singlePending.userType}</td>
                                                    <td>{singlePending?.book?.title}</td>
                                                    <td>{singlePending?.book?.authors}</td>
                                                    <td>{singlePending?.book?.edition}</td>
                                                    <td>{singlePending?.book?.accessionNumber}</td>
                                                    <td>{singlePending.issueDate}</td>
                                                    <td>{singlePending.returnDate}</td>
                                                    <td>
                                                        <Link to={`/extendReturnDate/${singlePending._id}`}
                                                            className='btn btn-warning btn-sm'
                                                        >View</Link>
                                                    </td>
                                                </tr>
                                            )}
                                        })
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </section>
    );
};

export default PendingToReturnList;