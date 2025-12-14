 
import React from 'react';
 
import { Outlet } from 'react-router';
import Footer from '../Component/homelayout/Footer';
import Navbar from '../Component/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto  py-4'>
                 <Navbar></Navbar>
            </header>
            <main className='w-11/12 mx-auto py-5'>
               <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AuthLayout;