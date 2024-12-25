// import React from 'react';
import Navber from '../../pages/Navber/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;