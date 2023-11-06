import React, { Fragment } from 'react';
import NavigationBar from '../../header/NavigationBar';
import SubCategories from './SubCategories';
import PopularThisWeek from './PopularThisWeek';
import DisplayList from './DisplayList';
import './MainContent.css';

function MainContent(props) {
    return (
        <Fragment>
            <NavigationBar requestComingFrom='main' />
            {
                !props.homepage && <SubCategories category={props.category} />
            }
            {
                props.homepage && <PopularThisWeek />
            }
            
            {/*<DisplayList />*/}
        </Fragment>
    );
}

export default MainContent;