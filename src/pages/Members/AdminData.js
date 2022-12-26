import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UpdateAdminProfile from './UpdateAdminProfile';
const AdminData = () => {
    const { id } = useParams();
    const [adminList, setAdminList] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/updateAdminProfile/${id}`)
            .then(res => res.json())
            .then((data) => setAdminList(data))
    }, []);
    return (
        <div>
            {
                <UpdateAdminProfile adminList={adminList} />
            }
        </div>
    );
};

export default AdminData;