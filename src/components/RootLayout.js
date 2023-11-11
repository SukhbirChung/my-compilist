import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './Footer';

function RootLayout(props) {
    return (
        <Fragment>
            <Header isLoggedIn={props.isLoggedIn} logoutBtnClicked={props.logoutBtnClicked} />
            <Outlet />
            <Footer />
        </Fragment>
    );
}

export default RootLayout;