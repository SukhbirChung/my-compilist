import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import FlashMessage from './flashMessage/FlashMessage';
import Header from './header/Header';
import Footer from './Footer';

function RootLayout(props) {
    const username = props.loggedInUser.username;
    const flashMessage = props.loggedInUser.flashMessage;

    return (
        <Fragment>
            {
                flashMessage && <FlashMessage message={{ success: flashMessage }} />
            }            
            <Header username={username} logoutBtnClicked={props.logoutBtnClicked} />
            <Outlet />
            <Footer />
        </Fragment>
    );
}

export default RootLayout;