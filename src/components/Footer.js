import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="font-size-extra-small">
            <span>Copyright &copy; 2023 - {currentYear} My Compilist <span className='footer-separator'>|</span>&nbsp;</span>
            <span>Powered by <Link to="https://paptido.com/" className="link-paptido">Paptido Inc.</Link></span>
        </footer>
    );
}

export default Footer;