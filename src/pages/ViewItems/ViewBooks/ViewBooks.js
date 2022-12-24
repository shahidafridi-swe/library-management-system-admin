import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import AllBooks from './AllBooks';
import './ViewBooks.css';
import { Link } from 'react-router-dom';
function ViewBooks() {
    const bookListTitle = ["Accession Number", "Title", "Author", "Publisher", "Published Year", "Edition", "Call No", "ISBN", "Copies", "Available", "Actions"];
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allBooks")
            .then(res => res.json())
            .then((data) => setBookList(data))
    }, []);
    const forTitle = bookList[0];
    const [state, setState] = useState({ type: '', branch: '', search_field: "title", search_text: "" });
    const [searchValue, setSearchValue] = useState([])
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const prev_state = { ...state };
        prev_state[name] = value;
        setState(prev_state);
    }
    const handleSearch = (e) => {
        e.preventDefault();
        const url = `http://localhost:5000/search`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
        })
            .then((res) => res.json())
            .then((data) => {
                setSearchValue(data.data)
            });
    }
    return (forTitle) && (
        <div className='px-3 '>
            <div className='searchSection '>
                <div className="input-group mb-3 ">
                    <form onSubmit={handleSearch} className='d-flex justify-content-between w-100 flex-1 px-5 row'>

                        <div className='col-md-3 d-flex mb-3 mb-md-0'>
                            <select onChange={handleChange} name='branch' className="form-select" id="branch">
                                <option value="1">Gulshan</option>
                                <option value="2">Baridhara</option>
                                <option value="3" selected>ALL</option>
                            </select>
                            <label className="input-group-text px-2" for="branch">Branch</label>
                        </div>

                        <div className='col-md-3 d-flex mb-3 mb-md-0'>
                            <select onChange={handleChange} name="search_field" className="form-select" id="searchCategory">
                                <option value="title">Default</option>
                                <option value="title">Title</option>
                                <option value="callNo">Call No</option>
                                <option value="ISBN10">ISBN</option>
                                <option value="ISBN13">ISSN</option>
                                <option value="authors">Author</option>
                                <option value="publisher">Publisher</option>
                                <option value="category">Category</option>
                                <option value="tags">Tags</option>
                                <option value="category">Subject</option>
                                <option value="abstract">Abstract</option>
                                <option value="description">Description</option>
                            </select>
                            <label className="input-group-text px-1" for="searchCategory">Category</label>
                        </div>

                        <div className='col-md-6 d-flex'>
                            <input onChange={handleChange} type="text" className="form-control" name="search_text" placeholder="Search Text" />
                            <div className="submit  input_margin">
                                <button className='btn-sm btn btn-dark' type="submit" >Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="tableFixHead " >
                <Table responsive='sm' striped bordered hover variant="success" className='myTable ' >
                    <tbody>
                        {
                            searchValue.length === 0 ? (
                                <AllBooks />
                            ) : (<Table responsive='sm' striped bordered hover variant="success" className='myTable ' >
                                <thead className='tableHeader text-uppercase '>
                                    <tr className='justify-content-center align-items-center'>
                                        {bookListTitle.map((title) => (
                                            <th className='uppercase align-items-center' key={title}>{title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchValue.map(book => (
                                        <tr>
                                            <td>1</td>
                                            <td>{book.title}</td>
                                            <td>{book.authors}</td>
                                            <td>{book.publisher}</td>
                                            <td>{book.publicationYear}</td>
                                            <td>{book.edition}</td>
                                            <td>{book.callNo}</td>
                                            <td>{book.ISBN10}</td>
                                            <td>{book.copies}</td>
                                            <td>-</td>
                                            <td>
                                                <Link to='/'
                                                    className='btn btn-dark'
                                                >View</Link>
                                            </td>
                                        </tr>
                                    )
                                    )
                                    }
                                </tbody>
                            </Table>

                            )}



                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default ViewBooks;

