import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar(props) {
    const classes = props.requestFrom === 'header' ? 'header-navigation-bar' : 'main-navigation-bar';
    const categories = ['Movies', 'Shows', 'Documentaries', 'Books', 'Recipes'];
    const [initialLoad, setInitialLoad] = useState(true);

    const clickHandler = () => {
        setInitialLoad(false);
    }

    return (
        <div className={classes}>
            <h1 className="font-size-large">Categories</h1>
            <nav className="navbar margin-top-small">
                <ul className="navbar-items">
                    {
                        categories.map((category) => {
                            return <li key={category}>
                                <NavLink to={`/${category}`} className={`link navbar-item${initialLoad && category === 'Movies' ? ' active' : ''}`} onClick={ clickHandler}>
                                    <img src={process.env.PUBLIC_URL + './assets/' + category + '.svg'} alt="category icon" width="30" />
                                    {category}
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