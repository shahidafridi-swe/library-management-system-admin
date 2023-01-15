import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import FormTitle from '../../Shared/FormTitle';
import '../ViewBooks/ViewBooks.css';

function ViewThesis() {
    const thesisListTitle = ["Accession Number", "Title", "Instructor", "Semester", "Action"];
    const [thesisList, setThesisList] = useState([]);
    useEffect(() => {
        fetch("thesisList.json")
            .then(res => res.json())
            .then((data) => setThesisList(data))
    }, []);
    const forTitle = thesisList[0];



    return (forTitle) && (

        <div className='mx-auto w-100'>
            <FormTitle>Theses</FormTitle>

            <Table responsive='sm' striped bordered hover variant="success" className=' mx-auto w-75' >
                <thead className='tableHeader text-uppercase '>
                    <tr className='justify-content-center align-items-center text-center'>
                        {
                            thesisListTitle.map((title) => (
                                <th className='uppercase align-items-center' key={title}>   {title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                <tbody>

                    {thesisList.map((thesis, index) => (
                        <tr key={thesis._id}>
                            
                            <td className='text-center'>{index+1}</td>
                            <td>{thesis.Title}</td>
                            <td>{thesis.Instructor}</td>
                            <td>{thesis.Semester}</td>
                            <td>
                                <Link to={`/viewTheses/id`}
                                    className='btn btn-warning btn-sm'
                                >View</Link>
                                <Link to={`/issueThesis/`}
                                    className='btn btn-success btn-sm m-1'
                                >Issue</Link>

                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ViewThesis;

