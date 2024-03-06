import React, { Fragment } from 'react';
import { searchResults } from '../../helpers/submitSearchBoxForm';
import MovieResults from '../displayResults/MovieResults';
//import DisplayBookResults from '../displayBookResults/DisplayBookResults';
import DisplayBook from '../displayBookResults/DisplayBook';
//import BookResults from '../displayResults/BookResults';
import './DisplayResults.css';

function PopularItems(props) {
    const popularItems = props.popularItems;

    function scrollToRight(event) {
        event.target.previousElementSibling.scrollBy(event.target.previousElementSibling.clientWidth - 20, 0);
    }

    function scrollToLeft(event) {
        event.target.nextElementSibling.scrollBy(-(event.target.nextElementSibling.clientWidth - 20), 0);
    }

    return (
        props.comingFromSearchResults ?
            props.category === 'books' ?
                searchResults.map((item) => {
                    return <DisplayBook key={item.key} book={item} username={props.username} />
                }) :
                searchResults.map((item) => {
                    return <MovieResults key={item.id} item={item} category={props.category} username={props.username} />
                })
            :
            <Fragment>
                <h2 className="font-size-medium margin-top-large">Popular Movies This Week</h2>
                <div>
                    <button className='previous-button font-size-large' onClick={scrollToLeft}>&lt;</button>
                    <div className="popular-this-week hide-scrollbar">
                        {
                            popularItems.movies.map((item) => {
                                return <MovieResults key={item.id} item={item} category='movies' username={props.username} />
                            })
                        }
                    </div>
                    <button className='next-button font-size-large' onClick={scrollToRight}>&gt;</button>
                </div>

                <h2 className="font-size-medium margin-top-large">Popular Shows This Week</h2>
                <div>
                    <button className='previous-button font-size-large' onClick={scrollToLeft}>&lt;</button>
                    <div className="popular-this-week hide-scrollbar">
                        {
                            popularItems.shows.map((item) => {
                                return <MovieResults key={item.id} item={item} category='shows' username={props.username} />
                            })
                        }
                    </div>
                    <button className='next-button font-size-large' onClick={scrollToRight}>&gt;</button>
                </div>

                <h2 className="font-size-medium margin-top-large">Popular Books This Week</h2>
                <div>
                    <button className='previous-button font-size-large' onClick={scrollToLeft}>&lt;</button>
                    <div className="popular-this-week hide-scrollbar">
                        {
                            popularItems.books.map((item) => {
                                return <DisplayBook key={item.book_uri} book={item} username={props.username} />
                            })
                        }
                    </div>
                    <button className='next-button font-size-large' onClick={scrollToRight}>&gt;</button>
                </div>
            </Fragment>
    );
}

export default PopularItems;