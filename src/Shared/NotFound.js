import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from "../image/notFound.png"

const NotFound = () => {
    return (
        <div className='mx-auto w-75 m-4 text-center'>
            <img src={notFoundImage} alt="" />
            <Link to="/" className='btn btn-primary'>Go to home</Link>
        </div>
    );
};

export default NotFound;