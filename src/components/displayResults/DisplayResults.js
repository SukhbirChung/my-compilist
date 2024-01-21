import React, { Fragment } from 'react';
import { searchResults } from '../../helpers/submitSearchBoxForm';
import MovieResults from '../displayResults/MovieResults';
import DisplayBookResults from '../displayBookResults/DisplayBookResults';
import BookResults from '../displayResults/BookResults';
import './DisplayResults.css';

function PopularItems(props) {
    const popularItems = props.popularItems;

    return (
        props.comingFromSearchResults ?
            props.category === 'books' ?
                searchResults.map((item) => {
                    return <BookResults key={item.key} item={item} username={props.username} />
                }) :
                searchResults.map((item) => {
                    return <MovieResults key={item.id} item={item} category={ props.category} username={props.username} />
                })
            :
        <Fragment>
            <h2 className="font-size-medium margin-top-large">Popular Movies This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    popularItems.movies.map((item) => {
                        return <MovieResults key={item.id} item={item} category='movies' username={props.username} />
                    })
                }
            </div>

            <h2 className="font-size-medium margin-top-large">Popular Shows This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    popularItems.shows.map((item) => {
                        return <MovieResults key={item.id} item={item} category='shows' username={props.username} />
                    })
                }
            </div>

            <h2 className="font-size-medium margin-top-large">Popular Books This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    popularItems.books.map((item) => {
                        return <DisplayBookResults key={item.list_id} list={item} username={props.username} />
                    })
                }
            </div>
        </Fragment>
    );
}

export default PopularItems;