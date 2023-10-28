import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import MyAccount from './components/MyAccount';
import Main from './components/main/Main';
import ErrorMessage from './components/ErrorMessage';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorMessage />,
        children: [
            { path: '', element: <Main /> },
            { path: ':category', element: <Main /> }
        ]
    },
    {
        path: '/login',
        element: <MyAccount formType='Login'/>
    },
    {
        path: '/signup',
        element: <MyAccount formType='Sign Up' />
    }
]);


function App() {
    return (
        <RouterProvider router={router} />
  );
}

export default App;
