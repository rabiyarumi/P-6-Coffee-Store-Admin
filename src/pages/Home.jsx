import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Banner from '../components/Banner';
import CoffeeCard from '../components/CoffeeCard';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <Banner/>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;