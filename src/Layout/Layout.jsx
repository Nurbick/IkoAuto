import React from 'react';
import {Outlet} from 'react-router-dom'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

const Layout = () => {
    return (
        <div className='layout'>
            <Header/>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;