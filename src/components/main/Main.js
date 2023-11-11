import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import SearchBox from './searchBox/SearchBox';
import SearchResults from './searchBox/SearchResults';
import MainContent from './mainContent/MainContent';

function Main(props) {
    const [key, setKey] = useState(0);
    const params = useParams();
    const category = params.category;

    const searchResultsUpdated = () => {
        setKey((currentState) => {
            return currentState + 1;
        })
    }

    return (
        <main className="margin-top-large">
            <SearchBox searchResultsUpdated={searchResultsUpdated}/>
            {
                props.showSearchResults ?
                    <SearchResults /> :
                    <MainContent isLoggedIn={props.isLoggedIn} homepage={props.homepage} category={ category}/>          }
        </main>
    );
}

export default Main;