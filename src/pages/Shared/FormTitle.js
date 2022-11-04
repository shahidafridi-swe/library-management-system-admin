import React from 'react';

const FormTitle = ({children}) => {
    return (
        <div className='rounded mb-3'>
            <h1 className=' text-center font-weight-bold text-uppercase'>{children}</h1>
        </div>
    );
};

export default FormTitle;