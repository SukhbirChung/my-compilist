import React, { Fragment } from 'react';
import NavigationBar from '../../header/NavigationBar';
import PopularThisWeek from './PopularThisWeek';
import UserCompilistList from '../userCompilistList/UserCompilistList';
import './MainContent.css';

function MainContent(props) {
    return (
        <Fragment>
            <NavigationBar requestComingFrom='main' />
            {
                props.homepage ?
                    <PopularThisWeek isLoggedIn={props.isLoggedIn} /> :
                    <UserCompilistList isLoggedIn={props.isLoggedIn} category={ props.category} />
            }
        </Fragment>
    );
}

export default MainContent;