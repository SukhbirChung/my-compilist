import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

function RootLayout() {
    return (
        <Fragment>
            <Header />
            <Outlet />
            <Footer />
        </Fragment>
    );
}

export default RootLayout;