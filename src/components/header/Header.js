import { Link } from 'react-router-dom';
import { logout } from '../../helpers/logout';
import NavigationBar from './NavigationBar';
import './Header.css';

function Header(props) {
    const username = props.username;

    const logoutBtnClickHandler = () => {
        const response = logout();

        response.then((res) => {
            if (res.status === 200) {
                props.logoutBtnClicked(res.message);
            }
            else {
                console.log(res);
            }
        }).catch(err => console.log(err));
    }

    return (
        <header>
            <div className="logo">
                <Link to="/" className="link font-size-extra-large color-primary">My Compilist</Link>
            </div>
            {
                username &&
                <div className="username margin-top-medium">{`Hello ${username}!`}</div>
            }
            <NavigationBar requestComingFrom='header'/>
            <div className="login-link">
                {
                    username ?
                        <button className="link logout-button font-size-medium" onClick={logoutBtnClickHandler}>
                            <svg id="Logout" className="navbar-item-icon" fill="#fff" width="30px" height="30px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.2 471.2" stroke="#fff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M227.619,444.2h-122.9c-33.4,0-60.5-27.2-60.5-60.5V87.5c0-33.4,27.2-60.5,60.5-60.5h124.9c7.5,0,13.5-6,13.5-13.5 s-6-13.5-13.5-13.5h-124.9c-48.3,0-87.5,39.3-87.5,87.5v296.2c0,48.3,39.3,87.5,87.5,87.5h122.9c7.5,0,13.5-6,13.5-13.5 S235.019,444.2,227.619,444.2z" /> <path d="M450.019,226.1l-85.8-85.8c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1l62.8,62.8h-273.9c-7.5,0-13.5,6-13.5,13.5 s6,13.5,13.5,13.5h273.9l-62.8,62.8c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.8-85.8 C455.319,239.9,455.319,231.3,450.019,226.1z" /> </g> </g> </g>
                            </svg>
                            <span>Logout</span> 
                        </button>
                         : 
                        <Link to="/login" className="link font-size-medium">
                            <svg id="Login" className="navbar-item-icon" width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                                <g id="SVGRepo_iconCarrier"> <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" /> </g>
                            </svg>
                            <span>Login</span>
                        </Link>
                }
            </div>
        </header>
    );
}

export default Header;
