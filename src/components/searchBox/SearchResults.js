import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { searchResults } from '../../helpers/submitSearchBoxForm';
import DisplayResults from '../displayResults/DisplayResults';
import './SearchResults.css';

function SearchResults(props) {
    const category = props.category;

    if (category !== 'books') {
        while (searchResults.length > 10) {
            searchResults.pop();
        }
    }

    searchResults.sort((a, b) => {
        if (category === 'movies') {
            return (new Date(b.release_date)).getFullYear() - (new Date(a.release_date)).getFullYear();
        } else if (category === 'books') {
            return b.first_publish_year - a.first_publish_year;
        } else {
            return (new Date(b.first_air_date)).getFullYear() - (new Date(a.first_air_date)).getFullYear();
        }
    });

    return (
        <Fragment>
            <h1 className="margin-top-large font-size-large">Search Results</h1>
            <div className="SearchResults">
                {
                    searchResults.length === 0 ?
                        <p className="font-size-medium">No results found!</p> :
                        <DisplayResults username={props.username} category={category} comingFromSearchResults />
                }
            </div>
            <div className="close-search-results-container margin-top-small">
                <Link to="/" className="link moving-color-button font-size-medium">Go to Homepage</Link>
            </div>
        </Fragment>
    );
}

export default SearchResults;