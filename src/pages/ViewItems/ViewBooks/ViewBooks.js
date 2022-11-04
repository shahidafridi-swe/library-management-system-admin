import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import './ViewBooks.css';

function ViewBooks() {
    const bookListTitle = ["Accession Number", "Title", "Author", "Publication", "Publish Year", "Edition", "Call No", "ISBN", "Copies", "Available", "Actions"];

    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        fetch("bookList.json")
            .then(res => res.json())
            .then((data) => setBookList(data))
    }, []);

    const forTitle = bookList[0];

    return (forTitle) && (
        <div className='px-3 '>
            <div className='searchSection '>
                <div className="input-group mb-3 ">
                    <form className='d-flex justify-content-between w-100 flex-1 px-5 row'>

                        <div className='col-md-3 d-flex mb-3 mb-md-0'>                            
                            <select className="form-select" id="branch">
                                <option value="1">Gulshan</option>
                                <option value="2">Baridhara</option>
                                <option value="3" selected>ALL</option>
                            </select>                         
                            <label className="input-group-text px-2" for="branch">Branch</label>                      
                        </div>

                        <div className='col-md-3 d-flex mb-3 mb-md-0'>
                            <select className="form-select" id="searchCategory">
                                <option selected>Choose...</option>
                                <option value="1">Accession Number</option>
                                <option value="2">Title</option>
                                <option value="3">Author</option>
                                <option value="3" selected>Tags</option>
                            </select>
                            <label className="input-group-text px-1" for="searchCategory">Category</label>
                        </div>

                        <div className='col-md-6 d-flex'>
                            <input type="text" className="form-control" placeholder="Search Text" />
                            <button className="btn btn-primary" type="button" >Search</button>
                        </div>

                    </form>
                </div>
            </div>


            <div className="tableFixHead " >
                <Table responsive='sm' striped bordered hover variant="success" className='myTable ' >
                    <thead className='tableHeader text-uppercase '>
                        <tr className='justify-content-center align-items-center'>
                            {bookListTitle.map((title) => (
                                <th className='uppercase align-items-center' key={title}>{title}</th>
                            ))}
                            {/* {
                                Object.keys(forTitle).map((title) => (
                                    <th key={title}>{title}</th>
                                ))
                            } */}
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            bookList.map((book) => (
                                <tr>
                                    {
                                        bookListTitle.map((title) => {
                                            if (title in book) {
                                                return <td>{book[title]}</td>
                                            }
                                        })
                                    }

                                    {/* {
                                        Object.values(book).map(val => <td>{val}</td>)
                                    } */}
                                </tr>)
                            )
                        }


                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default ViewBooks;