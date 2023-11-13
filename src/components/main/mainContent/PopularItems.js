import React, { Fragment } from 'react';
import MovieResults from '../displayResults/MovieResults';
import BookResults from '../displayResults/BookResults';

function PopularItems(props) {
    const popularItems = props.popularItems;

    return (
        <Fragment>
            <h2 className="font-size-medium margin-top-large">Popular Movies This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    popularItems.movie.map((item) => {
                        return <MovieResults key={item.id} item={item} selectedOption='movie' isLoggedIn={props.isLoggedIn} />
                    })
                }
            </div>

            <h2 className="font-size-medium margin-top-large">Popular Shows This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    popularItems.tv.map((item) => {
                        return <MovieResults key={item.id} item={item} selectedOption='tv' isLoggedIn={props.isLoggedIn} />
                    })
                }
            </div>

            <h2 className="font-size-medium margin-top-large">Popular Books This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    popularItems.books.map((item) => {
                        return <BookResults key={item.key} item={item} isLoggedIn={props.isLoggedIn} />
                    })
                }
            </div>
        </Fragment>        
    );
}

export default PopularItems;