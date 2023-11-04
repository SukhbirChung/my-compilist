import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/" className="link font-size-extra-large color-primary">My Compilist</Link>
            </div>
            <NavigationBar requestComingFrom='header'/>
            {/*<div className="login-link">*/}
            {/*    <Link to="/login" className="link font-size-medium">*/}
            {/*        <img src={process.env.PUBLIC_URL + './assets/login.svg'} alt="Clickable login icon" width="30" />*/}
            {/*        <span>Login</span>*/}
            {/*    </Link>*/}
            {/*</div>*/}
        </header>
    );
}

export default Header;
