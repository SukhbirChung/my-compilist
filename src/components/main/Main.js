import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from './searchBox/SearchBox';
import SearchResults from './searchBox/SearchResults';
import { searchResults } from '../../helpers/helpers';
import SubCategories from './SubCategories';
import DisplayList from './DisplayList';
import './Main.css';

function Main() {
    //const params = useParams();
    //const category = params.category ? params.category : 'Movies';

    const [displaySearchResults, setDisplaySearchResults] = useState(false);

    const returnedSearchResults = (flag) => {
        setDisplaySearchResults(flag);
    }

    return (
        <main>
            <SearchBox returnSearchResults={returnedSearchResults} />
            {displaySearchResults && <SearchResults searchResults={searchResults} closeSearchResults={returnedSearchResults} />}
            
            {/*<SubCategories category={category} />*/}
            {/*<DisplayList />*/}
        </main>
    );
}

export default Main;