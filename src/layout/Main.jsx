import React from 'react';
import Home from '../pages/home/Home/Home';
import NavBar from '../pages/shared/NavBar/NavBar';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
};

export default Main;