import { Link } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import './Header.css';

function Header() {
    return (
        <header>
            <div className="logo">
                <Link to="/" className="link font-size-extra-large color-primary">My Compilist</Link>
            </div>
            <div className="login-link">
                <img src={process.env.PUBLIC_URL + './assets/login.svg'} alt="Clickable login icon" width="30" />
                <Link to="/login" className="link font-size-medium">Login</Link>
            </div>
            <NavigationBar />
        </header>
    );
}

export default Header;
