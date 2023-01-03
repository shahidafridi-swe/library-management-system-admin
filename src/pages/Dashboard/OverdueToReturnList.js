import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const OverdueToReturnList = () => {
    const titleList = ["User Name", "User Id", "User Type", "Book Title", "Author", "Edition", "Accession", "Issue Date", "Return Date", "Actions"];
    const [overdueList, setOverdueList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/issueRequestForABook')
            .then(res => res.json())
            .then(data => setOverdueList(data))

    }, []);
    // const [date,setDate]=useState(new Date())
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;
    return (
        <section className='px-5 vh-50'>
            <Card bg={"danger"}>
                <Card.Header as="h5">Overdue To Return Book List {date}</Card.Header>
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
                                        overdueList.map((singlePending) => {
                                            if (date>singlePending.returnDate) {
                                                return (
                                                    <tr>
                                                        <td>{singlePending.FullName}</td>
                                                        <td>{singlePending.InstituteId}</td>
                                                        <td>{singlePending.userType}</td>
                                                        <td>{singlePending.title}</td>
                                                        <td>{singlePending.author}</td>
                                                        <td>{singlePending.edition}</td>
                                                        <td>{singlePending.accessionNumber}</td>
                                                        <td>{singlePending.issueDate}</td>
                                                        <td>{singlePending.returnDate}</td>
                                                        <td>
                                                            <Link to={`/extendReturnDate/${singlePending._id}`}
                                                                className='btn btn-warning btn-sm'
                                                            >View</Link>
                                                        </td>
                                                    </tr>
                                                )

                                            }
                                            return null
                                        }
                                        )
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

export default OverdueToReturnList;