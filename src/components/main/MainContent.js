import React, { Fragment } from 'react';
import NavigationBar from '../header/NavigationBar';
import PopularThisWeek from './PopularThisWeek';
import UserCompilistList from '../userCompilistList/UserCompilistList';

function MainContent(props) {
    return (
        <Fragment>
            <NavigationBar requestComingFrom='main' />
            {
                props.homepage ?
                    <PopularThisWeek username={props.username} /> :
                   <UserCompilistList username={props.username} category={ props.category} />
          }
        </Fragment>
    );
}

export default MainContent;