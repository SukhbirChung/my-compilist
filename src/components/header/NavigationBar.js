import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar() {
    const categories = ['Movies', 'Shows', 'Documentaries', 'Books', 'Recipes'];
    const [initialLoad, setInitialLoad] = useState(true);

    const clickHandler = () => {
        setInitialLoad(false);
    }

    return (
        <div className="navigationBar margin-top-large">
            <h1 className="font-size-extra-large">Categories</h1>
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