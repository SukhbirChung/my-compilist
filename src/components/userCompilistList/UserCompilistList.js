import { Link } from 'react-router-dom';
import DisplayUserList from './DisplayUserList';
import './UserCompilistList.css';

function UserCompilistList(props) {
    return (
        <div className="user-compilist-list-container margin-top-large">
            {
                props.username ?
                    <DisplayUserList username={props.username} category={props.category}  /> :
                    <div style={{ border: "1px solid white", padding: "0.5rem", textAlign: "center" }}>
                        Login to access your personalized list&nbsp;
                        <Link to="/login" className="link moving-color-button" style={{ display: "inline-block" }}>Login</Link>
                    </div>
            }
        </div>
    );
}

export default UserCompilistList;