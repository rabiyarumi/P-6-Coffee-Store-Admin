import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='text-center my-10'>
           <Link to={"/addCoffee"} className="btn btn-outline">Add Coffee</Link>
        </div>
    );
};

export default Banner;