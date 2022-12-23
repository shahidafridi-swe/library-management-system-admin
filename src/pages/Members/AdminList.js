import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

function AdminList() {

    const adminListTitle = ['name', "institute_Id", "phone", "designation", "email", "action"]
    const [adminList, setAdminList] = useState([]);

    useEffect(() => {
        fetch("adminList.json")
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
                            adminList.map((admin) => (
                                <tr key={admin.institute_id}>
                                    {
                                        adminListTitle.map((title) => {
                                            if (title in admin) {
                                                return <td>{admin[title]}</td>
                                            }
                                            else if (title === "action") {
                                                console.log('admin is', admin,)
                                                return <td><Link 
                                                to={'/adminProfile/'+admin.institute_Id}
                                                className='btn btn-warning'
                                                >View</Link></td>
                                            }
                                        })
                                    }
                                </tr>)
                            )
                        }

                    </tbody>
                </Table>
            </div>

        </div>
    );
}

export default AdminList;