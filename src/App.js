import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { checkIsLoggedIn } from './helpers/checkIsLoggedIn';
import RootLayout from './components/RootLayout';
import Main from './components/main/Main';
import MyAccount from './components/MyAccount';
//import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
    const [loggedInUser, setLoggedInUser] = useState({
        username: '',
        flashMessage: ''
    });

    useEffect(() => {
        const response = checkIsLoggedIn();

        response.then((res) => {
            if (res.status === 200) {
                setLoggedInUser({
                    username: res.username,
                    flashMessage: 'Welcome back!'
                });
            }
            else {
                setLoggedInUser((currentState) => {
                    return currentState;
                });
            }
        }).catch(err => console.log(err));
    }, []);

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout loggedInUser={loggedInUser} logoutBtnClicked={(message) => {
                setLoggedInUser({
                    username: '',
                    flashMessage: message
                });
            }} />,
            /*errorElement: <ErrorMessage />,*/
            children: [
                {
                    path: '', element: <Main username={loggedInUser.username} homepage />
                },
                { path: '/searchresults', element: <Main showSearchResults username={loggedInUser.username} /> },
                { path: ':category', element: <Main username={loggedInUser.username} /> }
            ]
        },
        {
            path: '/login',
            element: <MyAccount formType='Login' response={(message, username) => {
                setLoggedInUser({
                    username: username,
                    flashMessage: message
                });
            }} />
        },
        {
            path: '/signup',
            element: <MyAccount formType='Sign Up' response={(message, username) => {
                setLoggedInUser({
                    username: username,
                    flashMessage: message
                });
            }} />
        }
    ]);

    return (
        <RouterProvider router={router} />
  );
}

export default App;
