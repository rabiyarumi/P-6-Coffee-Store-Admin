import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <Navbar/>
            <div className='max-w-[90%] mx-auto'>
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;