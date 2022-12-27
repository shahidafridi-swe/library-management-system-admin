import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import FormTitle from '../Shared/FormTitle';

const IssueRequest = () => {
    const titleList = ["User Name", "User Id", "User Type", "Book Title", "Author", "Edition", "Issue Date", "Return Date", "Actions"];
    const [issueRequests, setIssueRequests] = useState([]);
    useEffect(() => {
        fetch('issueRequestList.json')
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
                        {issueRequests.map(singleRequest => (
                            <tr>

                                <td>{singleRequest.user}</td>
                                <td>{singleRequest.userId}</td>
                                <td>{singleRequest.userType}</td>
                                <td>{singleRequest.bookTitle}</td>
                                <td>{singleRequest.author}</td>
                                <td>{singleRequest.edition}</td>
                                <td>{singleRequest.issueDate}</td>
                                <td>{singleRequest.returnDate}</td>
                                <td>
                                    <Link to={`/issueRequest/${singleRequest._id}`}
                                        className='btn btn-warning btn-sm'
                                    >View</Link>

                                </td>
                            </tr>
                        )
                        )
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default IssueRequest;