import React, { Fragment } from 'react';
import NavigationBar from '../../header/NavigationBar';
import SubCategories from './SubCategories';
import DisplayList from './DisplayList';
import './MainContent.css';

function MainContent(props) {
    return (
        <Fragment>
            <NavigationBar requestComingFrom='main' />
            <SubCategories category={props.category} />
            <DisplayList />
        </Fragment>
    );
}

export default MainContent;