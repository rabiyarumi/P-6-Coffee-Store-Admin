import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className='py-3 px-8 bg-[#392929] text-white  flex justify-between items-center max-w-[90%] mx-auto'>
            <Link to={"/"} className='text-center   text-2xl font-bold italic ]'>Espresso Emporium</Link>
            <div>
                <Link to={'/users'}>Users </Link>
                <Link to={'/users2'}>Users-2 </Link>
            </div>
            <div>
            <Link to={"/login"} className='btn btn-outline text-white' >Login</Link>
            <Link to={"/signup"} className='btn btn-outline ml-4 text-white' >Sign Up</Link>
            </div>
        </div>
    );
};

export default Navbar;