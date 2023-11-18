import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="font-size-small">
            <span>Copyright &copy; 2023 My Compilist |&nbsp;</span>
            <span>Powered by <Link to="https://paptido.com/" className="link-paptido">Paptido Inc.</Link></span>
        </footer>
    );
}

export default Footer;