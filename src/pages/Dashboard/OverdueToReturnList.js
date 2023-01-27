import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const OverdueToReturnList = () => {
    const titleList = ["User Name", "User Id", "User Type", "Book Title", "Author", "Edition", "Accession", "Issue Date", "Return Date", "Actions"];
    const [overdueList, setOverdueList] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/adminissuedBooks')
            .then(res => res.json())
            .then(data => setOverdueList(data))

    }, []);
    // const [date,setDate]=useState(new Date())
    const current = new Date();
    const currentDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    const date = current.getTime();
    
    const options = {year: 'numeric', month: 'long', day: 'numeric'};
    const dateString = current.toLocaleDateString('en-US', options)
    return (
        <section className='px-5 vh-50'>
            <Card bg={"danger"}>
                <Card.Header as="h5" >Overdue Books from:   {dateString}</Card.Header>
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
                                                                                
                                            const rt = new Date(singlePending.returnDate);

                                            console.log(date, rt.getTime(), date >= rt.getTime())
                                            if (date > rt.getTime()) {
                                           
                                                return (
                                                    <tr>
                                                        <td>{singlePending.FullName}</td>
                                                        <td>{singlePending.InstituteId}</td>
                                                        <td className='text-capitalize'>{singlePending.userType}</td>
                                                        <td>{singlePending?.book.title}</td>
                                                        <td>{singlePending?.book.authors}</td>
                                                        <td>{singlePending?.book.edition}</td>
                                                        <td>{singlePending?.book.accessionNumber}</td>
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