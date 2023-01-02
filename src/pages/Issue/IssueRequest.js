import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import FormTitle from '../Shared/FormTitle';
import Swal from 'sweetalert2'

const IssueRequest = () => {
    const titleList = ["User Name", "User Id", "User Type", "Book Title", "Author", "Edition", "Issue Date", "Return Date", "Actions"];
    const [issueRequests, setIssueRequests] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/issueRequestForABook')
            .then(res => res.json())
            .then(data => setIssueRequests(data))

    }, []);
    return (
        <div className='px-3 '>
            <FormTitle>Issue Requests</FormTitle>
            <div className="tableFixHead d-flex justify-content-center"  >
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
                            issueRequests.map((singleRequest) => {
                                const hasStatus = 'status' in singleRequest;
                                if (hasStatus) {
                                    return null
                                }
                                else{
                                return <tr>
                                    <td>{singleRequest.FullName}</td>
                                    <td>{singleRequest.InstituteId}</td>
                                    <td>{singleRequest.userType}</td>
                                    <td>{singleRequest.title}</td>
                                    <td>{singleRequest.author}</td>
                                    <td>{singleRequest.edition}</td>
                                    <td>{singleRequest.issueDate}</td>
                                    <td>{singleRequest.returnDate}</td>
                                    <td>
                                        <Link to={`/issueRequestForABook/${singleRequest._id}`}
                                            className='btn btn-warning btn-sm'
                                        >View</Link>
    
                                    </td>
                                </tr> 
                                }
                            }

                            )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default IssueRequest;
/* 
<tr>
                                            <td>{singleRequest.FullName}</td>
                                            <td>{singleRequest.InstituteId}</td>
                                            <td>{singleRequest.userType}</td>
                                            <td>{singleRequest.title}</td>
                                            <td>{singleRequest.author}</td>
                                            <td>{singleRequest.edition}</td>
                                            <td>{singleRequest.accessionNumber}</td>
                                            <td>{singleRequest.issueDate}</td>
                                            <td>{singleRequest.returnDate}</td>
                                            <td>
                                                <Link to={`/extendReturnDate/${singleRequest._id}`}
                                                    className='btn btn-warning btn-sm'
                                                >View</Link>
                                            </td>
                                        </tr>

*/