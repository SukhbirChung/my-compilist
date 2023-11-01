import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Item from '../item/Item';
import './SearchResults.css';

function SearchResults(props) {
    const searchResults = props.searchResults;

    while (searchResults.length > 8) {
        searchResults.pop();
    }

    searchResults.sort((a, b) => {
        return (new Date(a.release_date)).getFullYear() - (new Date(b.release_date)).getFullYear();
    });

    return (
        <Fragment>
            <div className="SearchResults margin-top-medium">
                {
                    searchResults.length === 0 ?
                        <p className="font-size-medium">No results found!</p> :
                        searchResults.map((item) => {
                            return <Item key={item.id} item={item} />
                        })
                }
            </div>
            <div className="SearchResults-close-button margin-top-medium">
                <button onClick={() => props.closeSearchResults(false)}>Go to My Compilist Collection</button>
            </div>
        </Fragment>
    );
}

export default SearchResults;