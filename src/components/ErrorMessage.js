import { Link } from 'react-router-dom';
import './ErrorMessage.css';

function ErrorMessage() {
    return (
        <div className="errorMessage">
            <h1 className="font-size-extra-large">An error occured!</h1>
            <p className="margin-top-large">Couldn't find this page!</p>
            <Link to="/" className="link errorMessage-link font-size-medium font-weight-bold margin-top-medium">Go to Homepage</Link>
        </div>
    );
}

export default ErrorMessage;