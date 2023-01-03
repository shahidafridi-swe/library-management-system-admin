import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import ViewAdminList from './ViewAdminList';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import axios from 'axios';
function AdminList() {
    const adminListTitle = ['name', "institute_Id", "phone", "designation", "email", "action"]
    // const forTitle = adminList[0];
    const [state, setState] = useState({ search_field1: "FullName", search_text: "" });
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
        const url = `http://localhost:5000/admin/search`;
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
    const handleDeletBtn = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/admin/search/${id}`)
                    .then(res => {
                        const remaining = searchValue.filter(admin => admin._id !== id)
                        setSearchValue(remaining)
                    });
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }
    return (
        <div className='px-3 '>
            <div>
                <h2 className='text-center text-uppercase fw-bold'>All Admin List</h2>
            </div>
            <div className='searchSection '>
                <div className="input-group mb-3 ">
                    <form onSubmit={handleSearch} className='d-flex justify-content-center w-100 flex-1 px-5 row'>
                        <div className='col-md-3 d-flex mb-3 mb-md-0'>
                            <select className="form-select" id="searchCategory"
                                onChange={handleChange} name="search_field1">
                                <option value="FullName">Full Name</option>
                                <option value="InstituteId">Institute_Id</option>
                                <option value="PhoneNo">Phone</option>
                                <option value="instituteEmail">Email</option>
                                <option value="Designation" >Designation</option>
                            </select>
                            <label className="input-group-text px-1" for="searchCategory">Category</label>
                        </div>
                        <div className='col-md-6 d-flex'>
                            <input type="text" onChange={handleChange} name="search_text" className="form-control" placeholder="Search Text" />
                            <button className="btn btn-primary" type="submit">Search</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="tableFixHead d-flex justify-content-center" >
                <Table responsive='sm' striped bordered hover variant="success" className='myTable mx-auto w-100' >
                    <tbody>
                        {
                            searchValue.length === 0 ? (
                                <ViewAdminList />
                            ) : (
                                <Table responsive='sm' striped bordered hover variant="success" className='myTable mx-auto w-100' >
                                    <thead className='tableHeader text-uppercase '>
                                        <tr className='justify-content-center align-items-center'>
                                            {adminListTitle.map((title) => (
                                                <th className='uppercase align-items-center' key={title}>{title}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {searchValue.map(admin => (
                                            <tr key={admin._id} >
                                                <td>{admin.FullName}</td>
                                                <td>{admin.InstituteId}</td>
                                                <td>{admin.PhoneNo}</td>
                                                <td>{admin.Designation}</td>
                                                <td>{admin.instituteEmail}</td>
                                                <td>
                                                    <Link to={`/adminList/${admin._id}`}
                                                        className='btn btn-dark'
                                                    >View</Link>
                                                    <Button variant="danger" onClick={() => handleDeletBtn(admin._id)}>Delete Profile</Button>

                                                </td>
                                            </tr>
                                        ))
                                        }
                                    </tbody>
                                </Table>
                            )
                        }
                    </tbody>
                </Table>
            </div >

        </div >
    );
}

export default AdminList;

