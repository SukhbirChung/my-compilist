import React, { useState, useEffect } from 'react';
import Loader from '../../loader/Loader';
import { getPopularItems } from '../../../helpers/helpers';
import MovieResults from '../displayResults/MovieResults';
import BookResults from '../displayResults/BookResults';

function PopularThisWeek() {
    const [popularItems, setPopularItems] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const response = getPopularItems();

        response.then((res) => {
            setPopularItems(res);
            setIsLoading(false);
        }).catch(err => {
            console.log(err);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className="popular-this-week-container">
            {
                isLoading && <Loader />
            }
            <h2 className="font-size-medium margin-top-large">Popular Movies This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    !popularItems ? '' :
                        popularItems.movie.map((item) => {
                            return <MovieResults key={item.id} item={item} selectedOption='movie' />
                        })
                }
            </div>

            <h2 className="font-size-medium margin-top-large">Popular Shows This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    !popularItems ? '' :
                        popularItems.tv.map((item) => {
                            return <MovieResults key={item.id} item={item} selectedOption='tv' />
                        })
                }
            </div>

            <h2 className="font-size-medium margin-top-large">Popular Books This Week</h2>
            <div className="popular-this-week hide-scrollbar">
                {
                    !popularItems ? '' :
                        popularItems.books.map((item) => {
                            return <BookResults key={item.key} item={item} />
                        })
                }
            </div>
        </div>
    );
}

export default PopularThisWeek;