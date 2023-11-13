import React, { Fragment } from 'react';
import { loggedInUserInfo } from '../../../helpers/helpers';
import SubCategories from './SubCategories';
import DisplayUserList from './DisplayUserList';

function DisplayList(props) {
    const category = props.category;

    return (
        <Fragment>
            <SubCategories category={category} totalNumber={loggedInUserInfo.compilistList[category.toLowerCase()].length} />
            <h2 className="font-size-medium margin-top-large">My {category}</h2>
            <div className="displayList">
                {
                    loggedInUserInfo.compilistList[category.toLowerCase()].length === 0 ?
                        <p className="margin-top-medium">No {category.toLowerCase()} saved in your list. Use the search box above to look for your favorite {category.toLowerCase() }.</p> :
                        <DisplayUserList selectedOption={category} isLoggedIn={props.isLoggedIn} />
                }
            </div>
        </Fragment>
    );
}

export default DisplayList;