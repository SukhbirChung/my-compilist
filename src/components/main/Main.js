import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SearchBox from '../searchBox/SearchBox';
import SearchResults from '../searchBox/SearchResults';
import MainContent from './MainContent';
import './Main.css';

function Main(props) {
    const [searchCategory, setSearchCategory] = useState('');
    const params = useParams();
    const category = params.category;

    return (
        <main className="margin-top-large">
            <SearchBox searchResultsUpdated={(category) => setSearchCategory(category)} />
            {
                props.showSearchResults ?
                    <SearchResults category={searchCategory} username={props.username} /> :
                    <MainContent username={props.username} homepage={props.homepage} category={category} />
            }
        </main>
    );
}

export default Main;