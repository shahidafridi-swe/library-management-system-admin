import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pre() {
    const navigate = useNavigate();
    React.useEffect(() => {
        navigate("/login");
    }, []);
}

const ProtectedWrapper = (Component) => ({props}) => {

    
    const token = localStorage.getItem("token");
   


    return token ? (
        <Component {...props} />
    ) : <Pre />
}

export default ProtectedWrapper;
