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
