import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { checkIfUserLoggedIn } from './helpers/helpers';
import RootLayout from './components/RootLayout';
import Main from './components/main/Main';
import MyAccount from './components/MyAccount';
//import ErrorMessage from './components/ErrorMessage';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const response = checkIfUserLoggedIn();
        response.then((res) => {
            if (res.status === 200) {
                setIsLoggedIn(true);
            }
            else {
                setIsLoggedIn((currentState) => {
                    return currentState;
                });
            }
        }).catch(err => console.log(err));
    }, []);

    const logoutBtnClickHandler = () => {
        setIsLoggedIn(false);
    }

    const router = createBrowserRouter([
        {
            path: '/',
            element: <RootLayout isLoggedIn={isLoggedIn} logoutBtnClicked={logoutBtnClickHandler}/>,
            /*errorElement: <ErrorMessage />,*/
            children: [
                {
                    path: '', element: <Main isLoggedIn={isLoggedIn} homepage />
                },
                { path: '/searchresults', element: <Main showSearchResults /> },
                { path: ':category', element: <Main isLoggedIn={isLoggedIn} /> }
            ]
        },
        {
            path: '/login',
            element: <MyAccount formType='Login' response={() => setIsLoggedIn(true)} />
        },
        {
            path: '/signup',
            element: <MyAccount formType='Sign Up' response={() => setIsLoggedIn(true)} />
        }
    ]);

    return (
        <RouterProvider router={router} />
  );
}

export default App;
