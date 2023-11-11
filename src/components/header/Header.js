import { Link } from 'react-router-dom';
import { loggedInUserInfo, logout } from '../../helpers/helpers';
import NavigationBar from './NavigationBar';
import './Header.css';

function Header(props) {
    const logoutBtnClickHandler = () => {
        const response = logout();
        response.then((res) => {
            if (res.status === 200) {
                props.logoutBtnClicked();
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
                props.isLoggedIn ?
                    <div className="username margin-top-medium">{`Hello ${loggedInUserInfo.username}!`}</div> :
                    ''
            }
            <NavigationBar requestComingFrom='header'/>
            <div className="login-link">
                {
                    props.isLoggedIn ?
                        <button className="link logout-button font-size-medium" onClick={ logoutBtnClickHandler}>
                            <img src={process.env.PUBLIC_URL + './assets/logout.svg'} alt="Clickable login icon" width="24" />
                            <span>Logout</span> 
                        </button>
                         : 
                        <Link to="/login" className="link font-size-medium">
                            <img src={process.env.PUBLIC_URL + './assets/login.svg'} alt="Clickable login icon" width="30" />
                            <span>Login</span>
                        </Link>
                }
            </div>
        </header>
    );
}

export default Header;
