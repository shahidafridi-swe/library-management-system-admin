import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function AdminList() {
    const adminListTitle = ['name', "institute_Id", "phone", "designation", "email", "action"]
    const [adminList, setAdminList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/adminList")
            .then(res => res.json())
            .then((data) => setAdminList(data))
    }, []);
    const forTitle = adminList[0];
    return (forTitle) && (
        <div className='px-3 '>
            <div>
                <h2 className='text-center text-uppercase fw-bold'>All Admin List</h2>
            </div>
            <div className='searchSection '>
                <div className="input-group mb-3 ">
                    <form className='d-flex justify-content-center w-100 flex-1 px-5 row'>

                        <div className='col-md-3 d-flex mb-3 mb-md-0'>
                            <select className="form-select" id="searchCategory">
                                <option value="1">Name</option>
                                <option value="2">Institute_Id</option>
                                <option value="3">Phone</option>
                                <option value="3" >Email</option>
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
            <div className="tableFixHead d-flex justify-content-center" >
                <Table responsive='sm' striped bordered hover variant="success" className='myTable mx-auto w-100' >
                    <thead className='tableHeader text-uppercase '>
                        <tr className='justify-content-center align-items-center'>
                            {adminListTitle.map((title) => (
                                <th className='uppercase align-items-center' key={title}>{title}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody>
                        {
                            adminList.map(listAdmin =>
                                <tr key={listAdmin._id}>
                                    <td>
                                        <p>{listAdmin.FullName}</p>
                                    </td>
                                    <td>
                                        <p>{listAdmin.InstituteId}</p>
                                    </td>
                                    <td>{listAdmin.PhoneNo}</td>
                                    <td>{listAdmin.Designation}</td>
                                    <td>{listAdmin.instituteEmail}</td>
                                      <td> 
                <Link to={`/adminList/${listAdmin._id}`}
                                        className='btn btn-dark'
                                    >View</Link> </td>
                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>

        </div >
    );
}

export default AdminList;

