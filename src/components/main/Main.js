import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from './searchBox/SearchBox';
import SearchResults from './searchBox/SearchResults';
//import MainContent from './mainContent/MainContent';

function Main() {
    const params = useParams();
    const category = params.category ? params.category : 'Movies';

    const [searchResultsState, setSearchResultsState] = useState({
        display: false,
        query: '',
        selectedOption: ''
    });

    const returnedSearchResults = (flag, query, selectedOption) => {
        setSearchResultsState({
            display: flag,
            query: query,
            selectedOption: selectedOption
        });
    }

    return (
        <main>
            <SearchBox returnSearchResults={returnedSearchResults} />
            {
                searchResultsState.display ?
                    <SearchResults selectedOption={searchResultsState.selectedOption} closeSearchResults={returnedSearchResults} /> : ''
                    /*<MainContent category={ category}/>*/
            }
        </main>
    );
}

export default Main;