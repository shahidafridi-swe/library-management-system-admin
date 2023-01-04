import React, { useEffect, useState } from 'react';

const ShowImage = () => {
    const [image, setImage] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/addImage')
            .then(res => res.json())
            .then(data => setImage(data))
    })
    return (
        <div>
            <h1>we can show image from database {image.length}</h1>
            {
                image.map(img => (
                    <div>
                        <h2>{img.name}</h2>
                        <img style={{width:'200px'}} src={`data:image/png;base64,${img.image}`} alt="" />
                    </div>

                ))
            }
        </div>
    );
};

export default ShowImage;