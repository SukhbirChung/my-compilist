import { NavLink } from 'react-router-dom';
import { categories } from '../../helpers/helpers';
import './NavigationBar.css';

function NavigationBar(props) {
    return (
        <div className={props.requestComingFrom === 'header' ? 'header-navigation-bar' : 'main-navigation-bar'}>
            <h1 className="font-size-large margin-top-extra-large">Categories</h1>
            <nav className="navbar margin-top-small">
                <ul className="navbar-items">
                    {
                        Object.keys(categories).map((category) => {
                            return <li key={category}>
                                <NavLink to={`/${category}`} className={`link navbar-item`}>
                                    {
                                        props.requestComingFrom === 'header' && categories[category]
                                    }                                    
                                    <span>{category}</span>
                                </NavLink>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </div>
    );
}

export default NavigationBar;