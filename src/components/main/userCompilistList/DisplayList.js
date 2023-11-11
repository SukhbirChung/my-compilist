import React, { Fragment } from 'react';
import { loggedInUserInfo } from '../../../helpers/helpers';
import SubCategories from './SubCategories';

function DisplayList(props) {
    const category = props.category;

    return (
        <Fragment>
            <SubCategories category={props.category} />
            <h2 className="font-size-medium margin-top-large">My {category}</h2>
            <div className="displayList">
                {
                    loggedInUserInfo.compilistList[category.toLowerCase()].length === 0 ?
                        <p className="margin-top-medium">No {category.toLowerCase()} saved in your list. Use the search box above to look for your favorite {category.toLowerCase() }.</p> :
                        ''
                        /*<DisplayResults selectedOption={selectedOption} requestFromSearchResults />*/
                }
            </div>
            {/*<div className="popular-this-week hide-scrollbar">*/}
            {/*    {*/}
            {/*        popularItems.movie.map((item) => {*/}
            {/*            return <MovieResults key={item.id} item={item} selectedOption='movie' />*/}
            {/*        })*/}
            {/*    }*/}
            {/*</div>*/}
        </Fragment>
    );
}

export default DisplayList;