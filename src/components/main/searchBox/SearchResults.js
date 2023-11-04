import React, { Fragment } from 'react';
import { searchResults } from '../../../helpers/helpers';
import DisplayResults from '../displayResults/DisplayResults';
import './SearchResults.css';

function SearchResults(props) {
    const selectedOption = props.selectedOption;

    while (searchResults.length > 10) {
        searchResults.pop();
    }

    searchResults.sort((a, b) => {
        if (selectedOption === 'movie') {
            return (new Date(b.release_date)).getFullYear() - (new Date(a.release_date)).getFullYear();
        }
        else if (selectedOption === 'tv') {
            return (new Date(b.first_air_date)).getFullYear() - (new Date(a.first_air_date)).getFullYear();
        }
        else if (selectedOption === 'books') {
            return a.first_publish_year - b.first_publish_year;
        }
    });

    return (
        <Fragment>
            <h1 className="margin-top-large font-size-large">Search Results</h1>
            <div className="SearchResults">
                {
                    searchResults.length === 0 ?
                        <p className="font-size-medium">No results found!</p> :
                        <DisplayResults selectedOption={selectedOption} requestFromSearchResults/>
                }
            </div>
            <div className="close-search-results-container margin-top-small">
                <button className="moving-color-button font-size-medium" onClick={() => props.closeSearchResults(false)}>Go to My Compilist Collection</button>
            </div>
        </Fragment>
    );
}

export default SearchResults;